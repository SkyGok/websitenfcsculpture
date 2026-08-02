const steps = [
  {
    number: '01',
    icon: '🗿',
    title: 'Heykel Yerleştirilir',
    description:
      'Size özel tasarlanan heykeliniz ve NFC çipiniz masalara veya kasaya yerleştirilir.',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.3)',
    border: 'rgba(124,58,237,0.35)',
  },
  {
    number: '02',
    icon: '📱',
    title: 'Müşteri Dokundurur',
    description:
      'Müşteri telefonunu heykelinize dokundurur. Uygulama gerekmez — iPhone ve Android\'de anında çalışır.',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.3)',
    border: 'rgba(168,85,247,0.35)',
  },
  {
    number: '03',
    icon: '⭐',
    title: 'Google Ekranı Açılır',
    description:
      'Google değerlendirme ekranı otomatik açılır. Müşteri saniyeler içinde yıldızını bırakır.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
    border: 'rgba(245,158,11,0.35)',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="nasil-calisir"
      style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-label">Süreç</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            margin: '0 0 1rem',
            color: '#f0f0ff',
          }}>
            Nasıl{' '}
            <span className="gradient-text">Çalışır?</span>
          </h2>
          <p style={{
            color: '#8888aa',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            3 adımda daha fazla Google yorumu — kurulum, bakım ya da uygulama gerektirmez.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          position: 'relative',
        }}
          className="steps-grid"
        >
          {/* Connector line (desktop only) */}
          <div className="steps-connector" style={{
            position: 'absolute',
            top: '52px',
            left: 'calc(16.66% + 28px)',
            right: 'calc(16.66% + 28px)',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(124,58,237,0.5), rgba(168,85,247,0.5), rgba(245,158,11,0.4))',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Step Number + Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  background: `rgba(${step.color === '#7c3aed' ? '124,58,237' : step.color === '#a855f7' ? '168,85,247' : '245,158,11'},0.12)`,
                  border: `2px solid ${step.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem',
                  boxShadow: `0 0 20px ${step.glow}`,
                  flexShrink: 0,
                }}>
                  {step.icon}
                </div>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: step.color,
                  opacity: 0.25,
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                }}>
                  {step.number}
                </span>
              </div>

              <h3 style={{
                margin: '0 0 0.75rem',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#f0f0ff',
                lineHeight: 1.3,
              }}>
                {step.title}
              </h3>
              <p style={{
                margin: 0,
                color: '#8888aa',
                lineHeight: 1.7,
                fontSize: '0.92rem',
              }}>
                {step.description}
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: '2rem', right: '2rem', height: '2px',
                background: `linear-gradient(90deg, ${step.color}, transparent)`,
                borderRadius: '9999px',
                opacity: 0.5,
              }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-connector { display: none !important; }
        }
        @media (min-width: 480px) and (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
