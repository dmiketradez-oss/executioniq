import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function getAuthClient() {
  const raw = process.env.GOOGLE_PRIVATE_KEY ?? ''
  // Support base64-encoded key (avoids all newline/quote issues in Vercel)
  let privateKey: string
  if (!raw.includes('-----BEGIN')) {
    privateKey = Buffer.from(raw, 'base64').toString('utf-8')
  } else {
    privateKey = raw.replace(/\\n/g, '\n').replace(/^["']|["']$/g, '')
  }
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
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('Waitlist error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
