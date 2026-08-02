export default function Banner() {
  return (
    <section
      id="banner"
      style={{
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Full-width gradient background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(56,189,248,0.08) 50%, rgba(168,85,247,0.15) 100%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        borderTop: '1px solid rgba(124,58,237,0.2)',
        borderBottom: '1px solid rgba(124,58,237,0.2)',
        zIndex: 0,
      }} />

      {/* Orbs */}
      <div style={{
        position: 'absolute', top: '-80px', left: '10%',
        width: 350, height: 350,
        background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
        filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '10%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon */}
        <div style={{
          fontSize: '2.5rem',
          marginBottom: '1.25rem',
          display: 'inline-block',
        }}>
          🗿✨
        </div>

        <h2 style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: '#f0f0ff',
          lineHeight: 1.2,
          margin: '0 auto 2rem',
          maxWidth: '780px',
        }}>
          Mekânınıza özel tasarlanmış{' '}
          <span className="gradient-text">dekoratif NFC biblolar</span>{' '}
          ile müşteri deneyimini ve Google değerlendirmelerinizi bir üst seviyeye taşıyın.
        </h2>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="btn-glow">
            Hemen Sipariş Ver →
          </a>
          <a href="#sss" className="btn-outline">
            Sorularım var
          </a>
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2.5rem',
        }}>
          {[
            { icon: '🚀', text: 'Hızlı Kurulum' },
            { icon: '🔒', text: 'Güvenli Ödeme' },
            { icon: '🎨', text: 'Özel Tasarım' },
            { icon: '📦', text: 'Hızlı Kargo' },
          ].map((b, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              color: '#8888aa', fontSize: '0.87rem', fontWeight: 500,
            }}>
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
