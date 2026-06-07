'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  source?: string
}

export default function WaitlistForm({ source = 'waitlist' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      const data = await res.json()

      if (data.duplicate) {
        setStatus('duplicate')
      } else if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <p style={{ color: '#4A90D9', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 500, padding: '16px 0' }}>
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  if (status === 'duplicate') {
    return (
      <p style={{ color: '#4A90D9', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 500, padding: '16px 0' }}>
        You&apos;re already on the list.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <input
        type="email"
        required
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: '100%',
          padding: '14px 16px',
          background: '#0D1420',
          border: '1px solid #1A2E4A',
          borderRadius: '4px',
          color: '#E8EDF5',
          fontSize: '15px',
          fontFamily: "'Space Grotesk', sans-serif",
          outline: 'none',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#4A90D9')}
        onBlur={(e) => (e.target.style.borderColor = '#1A2E4A')}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          width: '100%',
          padding: '16px',
          background: status === 'loading' ? '#3a7bc8' : '#4A90D9',
          color: '#080B12',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '18px',
          letterSpacing: '0.08em',
          border: 'none',
          borderRadius: '4px',
          cursor: status === 'loading' ? 'wait' : 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseOver={(e) => { if (status !== 'loading') (e.currentTarget.style.background = '#5ba0e8') }}
        onMouseOut={(e) => { if (status !== 'loading') (e.currentTarget.style.background = '#4A90D9') }}
      >
        {status === 'loading' ? 'JOINING...' : 'JOIN THE WAITLIST →'}
      </button>
      {status === 'error' && (
        <p style={{ color: '#E05555', fontSize: '13px', textAlign: 'center' }}>{errorMsg}</p>
      )}
      <p style={{ color: '#2E4268', fontSize: '12px', textAlign: 'center' }}>
        Free to join · Takes 10 seconds
      </p>
    </form>
  )
}
