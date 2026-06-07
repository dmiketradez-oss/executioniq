import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ExecutionIQ — AI Trade Analysis for SMC Traders',
  description: 'Upload your chart. Select your entry model. Get feedback like a senior trader is sitting next to you reviewing every decision.',
  openGraph: {
    title: 'ExecutionIQ — AI Trade Analysis for SMC Traders',
    description: 'Upload your chart. Get graded like a senior trader is reviewing your execution.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
