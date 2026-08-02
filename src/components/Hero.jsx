export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* Ambient Background Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '4rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* Left — Text Content */}
          <div>
            <div className="section-label animate-slide-up">
              ✦ NFC Heykel Teknolojisi
            </div>

            <h1
              className="animate-slide-up-delay"
              style={{
                fontSize: 'clamp(2rem, 4.2vw, 3.4rem)',
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                margin: '0 0 1.5rem',
                color: '#f0f0ff',
              }}
            >
              Müşterileriniz tek{' '}
              <span className="gradient-text">dokunuşla</span>{' '}
              Google değerlendirmesi bıraksın.
            </h1>

            <p
              className="animate-slide-up-delay-2"
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.75,
                color: '#8888aa',
                margin: '0 0 2.5rem',
                maxWidth: '480px',
              }}
            >
              Mekanınıza özel tasarlanmış NFC biblolar ile hem dekorunuzu
              güçlendirin hem de Google yorumlarınızı artırın.
            </p>

            <div
              className="animate-fade"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
            >
              <a href="#" className="btn-glow">
                <span>Hemen Sipariş Ver</span>
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </a>
              <a href="#nasil-calisir" className="btn-outline">
                Nasıl Çalışır?
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-fade"
              style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}
            >
              {[
                { value: '500+', label: 'Mutlu İşletme' },
                { value: '4.9★', label: 'Ortalama Puan' },
                { value: '%300', label: 'Daha Fazla Yorum' },
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: i > 0 ? '2rem' : 0 }}>
                  {i > 0 && <div className="stat-divider" style={{ height: '36px' }} />}
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f0f0ff', lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#8888aa', marginTop: '0.2rem', fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              className="product-frame animate-fade"
              style={{
                width: '100%',
                maxWidth: '520px',
                aspectRatio: '1 / 1.1',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Floating badge */}
              <div style={{
                position: 'absolute', top: '-14px', right: '32px', zIndex: 10,
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                borderRadius: '9999px',
                padding: '0.4rem 1rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#fff',
                boxShadow: '0 4px 20px rgba(124,58,237,0.5)',
                letterSpacing: '0.03em',
              }}>
                YENİ 2025
              </div>

              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
                alt="NFC Sculpture ürün görseli"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '1.25rem',
                  position: 'relative',
                  zIndex: 2,
                }}
              />

              {/* Glow beneath image */}
              <div style={{
                position: 'absolute', bottom: '-40px',
                left: '10%', right: '10%',
                height: '80px',
                background: 'rgba(124,58,237,0.35)',
                filter: 'blur(40px)',
                borderRadius: '50%',
                zIndex: 0,
              }} />

              {/* Floating Pill — bottom left */}
              <div style={{
                position: 'absolute', bottom: '24px', left: '-24px', zIndex: 10,
                background: 'rgba(15,15,30,0.9)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '1rem',
                padding: '0.7rem 1rem',
                backdropFilter: 'blur(16px)',
                display: 'flex', alignItems: 'center', gap: '0.65rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>
                <span style={{ fontSize: '1.3rem' }}>📱</span>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#8888aa', fontWeight: 500 }}>Tek Dokunuş</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0ff' }}>Anında Yorum</div>
                </div>
              </div>

              {/* Floating Pill — top left */}
              <div style={{
                position: 'absolute', top: '32px', left: '-20px', zIndex: 10,
                background: 'rgba(15,15,30,0.9)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '1rem',
                padding: '0.6rem 1rem',
                backdropFilter: 'blur(16px)',
                display: 'flex', alignItems: 'center', gap: '0.65rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>
                <span style={{ fontSize: '1.2rem' }}>⭐</span>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#8888aa', fontWeight: 500 }}>Google</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f59e0b' }}>★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        color: '#8888aa', fontSize: '0.75rem', fontWeight: 500, zIndex: 2,
        animation: 'float-orb 2s ease-in-out infinite',
      }}>
        <span>Aşağı Kaydır</span>
        <div style={{
          width: '1.5px', height: '40px',
          background: 'linear-gradient(to bottom, #8888aa, transparent)',
        }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex; flex-direction: column; align-items: center;
          }
        }
      `}</style>
    </section>
  )
}
