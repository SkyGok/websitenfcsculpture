const reviews = [
  {
    name: 'Sarah L.',
    role: 'Marathon runner',
    avatar: 'https://i.pravatar.cc/48?img=47',
    text: 'The battery life is insane. I went 12 days without charging it through training, races, and daily use. Nothing else comes close.',
    stars: 5,
  },
  {
    name: 'James K.',
    role: 'Cardiologist',
    avatar: 'https://i.pravatar.cc/48?img=12',
    text: "As a physician, I'm impressed by the ECG accuracy. It caught an irregular rhythm on my own wrist — that's not a feature, that's a lifesaver.",
    stars: 5,
  },
  {
    name: 'Mia T.',
    role: 'Tech reviewer · 2M subs',
    avatar: 'https://i.pravatar.cc/48?img=9',
    text: "NexAura sets a new bar for aesthetics in wearables. The titanium finish, the display crispness — it feels like wearing a piece of the future.",
    stars: 5,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">Testimonials</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#f0f0ff',
            margin: 0,
          }}>
            Loved by{' '}
            <span className="gradient-text">50,000+ people</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
          className="reviews-grid"
        >
          {reviews.map((r, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.75rem' }}>
              {/* Stars */}
              <div style={{ marginBottom: '1rem', fontSize: '1rem', letterSpacing: '0.1em' }}>
                {'★'.repeat(r.stars)
                  .split('')
                  .map((s, si) => (
                    <span key={si} style={{ color: '#f59e0b' }}>{s}</span>
                  ))}
              </div>

              {/* Quote */}
              <p style={{
                color: '#aaaacc',
                lineHeight: 1.7,
                fontSize: '0.95rem',
                margin: '0 0 1.5rem',
                fontStyle: 'italic',
              }}>
                "{r.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src={r.avatar}
                  alt={`${r.name} profile photo`}
                  style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover',
                    border: '2px solid rgba(124,58,237,0.3)' }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f0f0ff' }}>{r.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#8888aa' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
