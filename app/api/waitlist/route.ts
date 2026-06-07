import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function getAuthClient() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return auth
}

export async function POST(req: NextRequest) {
  try {
    const { email, source = 'waitlist' } = await req.json()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    if (!spreadsheetId || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    const auth = await getAuthClient()
    const sheets = google.sheets({ version: 'v4', auth })

    // Check for existing email
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A:A',
    })

    const rows = existing.data.values ?? []
    const emailExists = rows.some(
      (row) => row[0]?.toLowerCase().trim() === email.toLowerCase().trim()
    )

    if (emailExists) {
      return NextResponse.json({ duplicate: true, message: "You're already on the list." }, { status: 200 })
    }

    // Append new row
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email.toLowerCase().trim(), new Date().toISOString(), source]],
      },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
