import WaitlistForm from '@/components/WaitlistForm'
import FadeIn from '@/components/FadeIn'

// ─── Shared style constants ────────────────────────────────────────────────

const EYEBROW: React.CSSProperties = {
  fontSize: '10px',
  color: '#4A90D9',
  fontFamily: "'JetBrains Mono', monospace",
  letterSpacing: '0.25em',
  textTransform: 'uppercase' as const,
  marginBottom: '16px',
}

const SECTION_HEADING: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(28px, 4vw, 44px)',
  color: '#E8EDF5',
  lineHeight: 1.15,
  marginBottom: '48px',
}

const SECTION: React.CSSProperties = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '96px 24px',
}

// ─── Nav ──────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(8,11,18,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1A2E4A',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Logo />
        <a
          href="#waitlist"
          style={{
            color: '#4A90D9',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            border: '1px solid rgba(74,144,217,0.4)',
            padding: '8px 18px',
            borderRadius: '4px',
            transition: 'background 0.2s',
          }}
        >
          JOIN WAITLIST →
        </a>
      </div>
    </nav>
  )
}

function Logo() {
  return (
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '20px' }}>
      <span style={{ color: '#E8EDF5' }}>Execution</span>
      <span style={{ color: '#4A90D9' }}>IQ</span>
    </span>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px 64px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '700px', width: '100%' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
          <span style={{ width: '32px', height: '1px', background: '#4A90D9', opacity: 0.5, display: 'inline-block' }} />
          <span style={{ fontSize: '11px', color: '#4A90D9', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.25em' }}>
            COMING SOON
          </span>
          <span style={{ width: '32px', height: '1px', background: '#4A90D9', opacity: 0.5, display: 'inline-block' }} />
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(36px, 6vw, 64px)',
          color: '#E8EDF5',
          lineHeight: 1.1,
          marginBottom: '24px',
        }}>
          The AI Trade Analyzer Built for Smart Money Traders.
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: '18px',
          color: '#8A9BBE',
          fontWeight: 300,
          lineHeight: 1.7,
          marginBottom: '48px',
          maxWidth: '560px',
          margin: '0 auto 48px',
        }}>
          Upload your chart. Select your entry model. Get feedback like a senior trader is sitting next to you reviewing every decision.
        </p>

        {/* Offer box */}
        <div id="waitlist" className="corner-bracket" style={{
          background: '#0D1420',
          border: '1px solid rgba(74,144,217,0.3)',
          borderRadius: '6px',
          padding: '32px',
          textAlign: 'left',
        }}>
          <p style={{
            fontSize: '14px',
            color: '#E8EDF5',
            marginBottom: '24px',
            lineHeight: 1.6,
            fontWeight: 500,
          }}>
            🔒 First 100 members get <strong style={{ color: '#4A90D9' }}>MAX tier at Pro price</strong> — forever. $49/month value for $24/month. Permanently.
          </p>
          <WaitlistForm source="hero" />
        </div>

      </div>
    </section>
  )
}

// ─── How It Works ────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'MARK YOUR CHART',
      body: 'Mark your entry, stop loss, and target on your chart before uploading. The more detail you mark, the better the feedback.',
    },
    {
      num: '02',
      title: 'UPLOAD YOUR SCREENSHOT',
      body: 'Upload your execution screenshot. EIQ automatically fetches all relevant timeframes in the background — you only need to submit one chart.',
    },
    {
      num: '03',
      title: 'SELECT YOUR MODEL',
      body: 'Choose your entry model — FVG, IFVG, CISD, OB, BB, OTE, or describe your own setup. Tell us the direction and outcome.',
    },
    {
      num: '04',
      title: 'GET YOUR GRADE',
      body: 'Receive a grade from A++ to F with specific feedback on what you did right, what you did wrong, and one actionable improvement focus.',
    },
  ]

  return (
    <section style={{ ...SECTION }}>
      <FadeIn>
        <p style={EYEBROW}>HOW IT WORKS</p>
        <h2 style={SECTION_HEADING}>Four Steps. Real Feedback.</h2>
      </FadeIn>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 80}>
            <div style={{
              background: '#0D1420',
              borderLeft: '2px solid #4A90D9',
              border: '0.5px solid #1A2E4A',
              borderLeftWidth: '2px',
              borderLeftColor: '#4A90D9',
              borderRadius: '4px',
              padding: '20px 24px',
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
            }}>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '28px',
                color: '#4A90D9',
                lineHeight: 1,
                minWidth: '36px',
              }}>
                {s.num}
              </span>
              <div>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#4A90D9',
                  letterSpacing: '0.15em',
                  marginBottom: '6px',
                }}>
                  {s.title}
                </p>
                <p style={{ color: '#8A9BBE', fontSize: '15px', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

// ─── Entry Models ─────────────────────────────────────────────────────────

function EntryModels() {
  const models = [
    { code: 'FVG', name: 'Fair Value Gap' },
    { code: 'IFVG', name: 'Inverse Fair Value Gap' },
    { code: 'CISD', name: 'Change in State of Delivery' },
    { code: 'OB', name: 'Order Block' },
    { code: 'BB', name: 'Breaker Block' },
    { code: 'OTE', name: 'Optimal Trade Entry' },
  ]

  return (
    <section style={{ ...SECTION }}>
      <FadeIn>
        <p style={EYEBROW}>ENTRY MODEL SPECIFIC ANALYSIS</p>
        <h2 style={SECTION_HEADING}>Your Model. Deep Feedback.</h2>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
          marginBottom: '12px',
        }}>
          {models.map((m) => (
            <div key={m.code} style={{
              background: '#0D1420',
              border: '0.5px solid #1A2E4A',
              borderTop: '2px solid #4A90D9',
              borderRadius: '6px',
              padding: '24px',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '32px',
                color: '#4A90D9',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                {m.code}
              </p>
              <p style={{ fontSize: '12px', color: '#8A9BBE' }}>{m.name}</p>
            </div>
          ))}
        </div>

        {/* Community row */}
        <div style={{
          background: '#0D1420',
          border: '0.5px solid #1A2E4A',
          borderRadius: '4px',
          padding: '16px',
          textAlign: 'center',
          color: '#8A9BBE',
          fontSize: '13px',
        }}>
          + Submit your own model — we learn from our community
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Two Layer Analysis ───────────────────────────────────────────────────

function AnalysisFramework() {
  const tagStyle: React.CSSProperties = {
    background: '#111827',
    border: '0.5px solid #1A2E4A',
    color: '#8A9BBE',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px',
    padding: '5px 10px',
    borderRadius: '2px',
    whiteSpace: 'nowrap' as const,
  }

  const layer1Tags = ['HTF Bias', 'Draw on Liquidity', 'Manipulation Confirmed', 'NQ/ES Correlation', 'Killzone Timing', 'Risk Management', 'Economic Calendar']
  const layer2Tags = ['Model Criteria Validation', 'Discount/Premium Check', 'Displacement Confirmed', 'Stop Placement Logic', 'Target Validity', 'Highest TF FVG Used', 'Body Closure Confirmed']

  const cardStyle: React.CSSProperties = {
    background: '#0D1420',
    border: '0.5px solid #1A2E4A',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '12px',
  }

  const headerStyle: React.CSSProperties = {
    background: 'rgba(74,144,217,0.06)',
    borderBottom: '1px solid #1A2E4A',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }

  return (
    <section style={{ ...SECTION }}>
      <FadeIn>
        <p style={EYEBROW}>THE ANALYSIS FRAMEWORK</p>
        <h2 style={SECTION_HEADING}>Two Layers. Zero Vague Feedback.</h2>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={cardStyle}>
          <div style={headerStyle}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: '#4A90D9' }}>LAYER 01</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8A9BBE', letterSpacing: '0.1em' }}>UNIVERSAL SMC FUNDAMENTALS</span>
          </div>
          <div style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {layer1Tags.map((t) => <span key={t} style={tagStyle}>{t}</span>)}
          </div>
        </div>

        <div style={cardStyle}>
          <div style={headerStyle}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: '#4A90D9' }}>LAYER 02</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8A9BBE', letterSpacing: '0.1em' }}>ENTRY MODEL SPECIFIC</span>
          </div>
          <div style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {layer2Tags.map((t) => <span key={t} style={tagStyle}>{t}</span>)}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Grading Scale ────────────────────────────────────────────────────────

function GradingScale() {
  const grades = [
    { grade: 'A++', color: '#4A90D9', label: 'Perfect execution. Size up next time.' },
    { grade: 'A+', color: 'rgba(74,144,217,0.8)', label: 'High quality. Minor imperfections only.' },
    { grade: 'A', color: 'rgba(74,144,217,0.6)', label: 'Good trade. One violation.' },
    { grade: 'B', color: '#8A9BBE', label: 'Tradeable but 2–3 issues to address.' },
    { grade: 'C', color: '#E8A020', label: 'Should have been skipped.' },
    { grade: 'D', color: 'rgba(224,85,85,0.8)', label: 'Lucky if it won.' },
    { grade: 'F', color: '#E05555', label: 'No valid basis. Pure luck.' },
  ]

  return (
    <section style={{ ...SECTION }}>
      <FadeIn>
        <p style={EYEBROW}>THE GRADING SCALE</p>
        <h2 style={SECTION_HEADING}>Every Trade Gets a Grade. No Sugarcoating.</h2>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {grades.map((g, i) => (
          <FadeIn key={g.grade} delay={i * 60}>
            <div style={{
              background: '#0D1420',
              border: '0.5px solid #1A2E4A',
              borderRadius: '4px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '24px',
                color: g.color,
                minWidth: '48px',
              }}>
                {g.grade}
              </span>
              <span style={{ color: '#8A9BBE', fontSize: '14px' }}>{g.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={420}>
        <p style={{
          textAlign: 'center',
          color: '#8A9BBE',
          fontSize: '13px',
          fontStyle: 'italic',
          marginTop: '24px',
        }}>
          We grade the process. Not the outcome.
        </p>
      </FadeIn>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────

function Pricing() {
  const tiers = [
    {
      label: 'FREE',
      price: '$0/month',
      accent: '#2E4268',
      border: '0.5px solid #1A2E4A',
      features: ['3 analyses per month', 'Full analysis quality', 'No credit card required'],
      badge: null,
      highlighted: false,
    },
    {
      label: 'PRO',
      price: '$24/month',
      accent: '#4A90D9',
      border: '0.5px solid #1A2E4A',
      features: ['Unlimited analyses', 'Full analysis quality'],
      badge: null,
      highlighted: false,
    },
    {
      label: 'MAX',
      price: '$49/month',
      accent: '#4A90D9',
      border: '1px solid #4A90D9',
      features: ['Unlimited analyses', 'Full journaling', 'Metrics dashboard', 'Pattern recognition', 'Weekly performance summary'],
      badge: 'MOST ADVANCED',
      highlighted: true,
    },
  ]

  return (
    <section style={{ ...SECTION }}>
      <FadeIn>
        <p style={EYEBROW}>PRICING</p>
        <h2 style={SECTION_HEADING}>Simple Pricing. No Gimmicks.</h2>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}>
          {tiers.map((t) => (
            <div key={t.label} style={{
              background: '#0D1420',
              border: t.border,
              borderTop: `2px solid ${t.accent}`,
              borderRadius: '6px',
              padding: '28px 24px',
              position: 'relative',
            }}>
              {t.badge && (
                <span style={{
                  position: 'absolute',
                  top: '-1px',
                  right: '16px',
                  background: '#4A90D9',
                  color: '#080B12',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  padding: '3px 10px',
                  borderRadius: '0 0 4px 4px',
                }}>
                  {t.badge}
                </span>
              )}
              <p style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '28px',
                color: t.accent,
                marginBottom: '4px',
              }}>
                {t.label}
              </p>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: '#E8EDF5',
                marginBottom: '20px',
              }}>
                {t.price}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8A9BBE', fontSize: '14px' }}>
                    <span style={{ color: '#4A90D9', fontSize: '12px' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Early Access ─────────────────────────────────────────────────────────

function EarlyAccess() {
  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 96px' }}>
      <FadeIn>
        <div className="corner-bracket" style={{
          background: 'rgba(74,144,217,0.06)',
          border: '1px solid rgba(74,144,217,0.3)',
          borderTop: '2px solid #4A90D9',
          borderRadius: '6px',
          padding: '48px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '14px',
            color: '#4A90D9',
            letterSpacing: '0.2em',
            marginBottom: '12px',
          }}>
            FIRST 100 ONLY
          </p>

          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(40px, 7vw, 64px)',
            color: '#E8EDF5',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}>
            MAX Tier. Pro Price. Forever.
          </h2>

          <p style={{
            color: '#8A9BBE',
            fontSize: '16px',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 32px',
          }}>
            The first 100 traders on the waitlist get our most advanced plan — unlimited analyses, full journaling, pattern recognition, metrics dashboard — at permanently half price.
          </p>

          {/* Price display */}
          <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '36px',
              color: '#8A9BBE',
              textDecoration: 'line-through',
              opacity: 0.7,
            }}>$49/month</span>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '52px',
              color: '#4A90D9',
            }}>$24/month</span>
            <span style={{ color: '#8A9BBE', fontSize: '14px', alignSelf: 'flex-end', marginBottom: '8px' }}>Forever. Not a trial.</span>
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              background: '#1A2E4A',
              borderRadius: '4px',
              height: '6px',
              maxWidth: '320px',
              margin: '0 auto 8px',
              overflow: 'hidden',
            }}>
              <div style={{
                background: '#4A90D9',
                width: '37%',
                height: '100%',
                borderRadius: '4px',
                transition: 'width 1s ease',
              }} />
            </div>
            <p style={{ color: '#4A90D9', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
              Spots filling fast
            </p>
          </div>

          {/* Form */}
          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <WaitlistForm source="early-access" />
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1A2E4A',
      padding: '32px 24px',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '20px',
      }}>
        <FooterLogo />
        <p style={{ color: '#2E4268', fontSize: '13px' }}>Built by traders. For traders.</p>
        <a href="mailto:managementEIQ@gmail.com" style={{ color: '#2E4268', fontSize: '13px', textDecoration: 'none' }}>
          managementEIQ@gmail.com
        </a>
      </div>
      <p style={{ textAlign: 'center', color: '#2E4268', fontSize: '10px' }}>
        © 2025 ExecutionIQ. All rights reserved.
      </p>
    </footer>
  )
}

function FooterLogo() {
  return (
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '18px' }}>
      <span style={{ color: '#E8EDF5' }}>Execution</span>
      <span style={{ color: '#4A90D9' }}>IQ</span>
    </span>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <EntryModels />
        <AnalysisFramework />
        <GradingScale />
        <Pricing />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  )
}
