const qrItems = [
  { icon: '🟫', text: 'Düz plastik' },
  { icon: '👻', text: 'Göze çarpmaz' },
  { icon: '💔', text: 'Kolay yıpranır' },
  { icon: '📉', text: 'Marka değeri oluşturmaz' },
]

const nfcItems = [
  { icon: '🎨', text: 'Mekâna özel tasarım' },
  { icon: '✨', text: 'Dikkat çeker' },
  { icon: '💎', text: 'Premium görünüm' },
  { icon: '🚀', text: 'Marka kimliğini güçlendirir' },
]

export default function Comparison() {
  return (
    <section
      id="karsilastirma"
      style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Karşılaştırma</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            margin: '0 0 1rem',
            color: '#f0f0ff',
          }}>
            Farkını{' '}
            <span className="gradient-text">Göster!</span>
          </h2>
          <p style={{
            color: '#8888aa',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '460px',
            margin: '0 auto',
          }}>
            Neden standart QR kartlar artık yeterli değil? İşte yan yana fark.
          </p>
        </div>

        {/* Comparison Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 80px 1fr',
          gap: '0',
          alignItems: 'stretch',
          maxWidth: '900px',
          margin: '0 auto',
        }}
          className="compare-grid"
        >
          {/* QR Card — Negative */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '1.5rem 0 0 1.5rem',
            padding: '2.5rem',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.85rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                width: 52, height: 52,
                borderRadius: '12px',
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                🪪
              </div>
              <div>
                <div style={{
                  fontWeight: 800, fontSize: '1.1rem', color: '#f0f0ff',
                }}>QR Kart</div>
                <div style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 600 }}>
                  Eski Yöntem
                </div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {qrItems.map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(239,68,68,0.05)',
                  border: '1px solid rgba(239,68,68,0.1)',
                }}>
                  <span style={{ fontSize: '1.15rem' }}>{item.icon}</span>
                  <span style={{
                    color: '#aaaacc',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    textDecoration: 'line-through',
                    textDecorationColor: 'rgba(239,68,68,0.4)',
                  }}>
                    {item.text}
                  </span>
                  <span style={{ marginLeft: 'auto', color: '#ef4444', fontSize: '1rem' }}>✕</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS Divider */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.5rem',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent)',
            }} />
            <div style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              borderRadius: '50%',
              width: 48, height: 48,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900,
              fontSize: '0.85rem',
              color: '#fff',
              zIndex: 1,
              boxShadow: '0 0 24px rgba(124,58,237,0.5)',
            }}>
              VS
            </div>
          </div>

          {/* NFC Heykel — Premium */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.08))',
            border: '1px solid rgba(124,58,237,0.35)',
            borderRadius: '0 1.5rem 1.5rem 0',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Glow top-right */}
            <div style={{
              position: 'absolute', top: -60, right: -60,
              width: 200, height: 200,
              background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }} />

            {/* Winner badge */}
            <div style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              borderRadius: '9999px',
              padding: '0.25rem 0.85rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#fff',
            }}>
              ÖNERİLEN
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.85rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                width: 52, height: 52,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.2))',
                border: '1px solid rgba(124,58,237,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: '0 0 20px rgba(124,58,237,0.3)',
              }}>
                🗿
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#f0f0ff' }}>
                  NFC Heykel
                </div>
                <div style={{ fontSize: '0.8rem', color: '#a855f7', fontWeight: 600 }}>
                  Premium Çözüm
                </div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1 }}>
              {nfcItems.map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(124,58,237,0.1)',
                  border: '1px solid rgba(124,58,237,0.2)',
                }}>
                  <span style={{ fontSize: '1.15rem' }}>{item.icon}</span>
                  <span style={{
                    color: '#f0f0ff',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  }}>
                    {item.text}
                  </span>
                  <span style={{ marginLeft: 'auto', color: '#a855f7', fontSize: '1rem' }}>✓</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA below */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" className="btn-glow">
            Heykelimi Tasarla →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .compare-grid {
            grid-template-columns: 1fr !important;
          }
          .compare-grid > div:first-child { border-radius: 1.5rem !important; }
          .compare-grid > div:last-child { border-radius: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
