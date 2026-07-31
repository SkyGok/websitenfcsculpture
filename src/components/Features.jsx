const features = [
  {
    icon: '⚡',
    iconBg: 'linear-gradient(135deg, #7c3aed22, #a855f722)',
    iconBorder: 'rgba(168,85,247,0.3)',
    iconColor: '#c084fc',
    badge: 'Performance',
    title: 'Lightning-Fast Processor',
    description:
      'Powered by the next-gen NexChip X1 with a dual-core neural engine — handles real-time health analytics, GPS tracking, and app multitasking without breaking a sweat.',
    highlights: ['Real-time health analytics', '< 2ms response time', 'Neural engine AI'],
  },
  {
    icon: '🩺',
    iconBg: 'linear-gradient(135deg, #06b6d422, #0ea5e922)',
    iconBorder: 'rgba(6,182,212,0.3)',
    iconColor: '#22d3ee',
    badge: 'Health',
    title: 'Advanced Health Suite',
    description:
      'From ECG monitoring and blood-oxygen sensing to sleep staging and stress detection, NexAura provides clinical-grade biometric insights 24 / 7.',
    highlights: ['ECG + SpO₂ sensors', 'Sleep & stress tracking', 'FDA-cleared alerts'],
  },
  {
    icon: '🔋',
    iconBg: 'linear-gradient(135deg, #10b98122, #34d39922)',
    iconBorder: 'rgba(16,185,129,0.3)',
    iconColor: '#34d399',
    badge: 'Endurance',
    title: '14-Day Battery Life',
    description:
      'An adaptive power engine learns your habits and intelligently dims background tasks, giving you an industry-leading 14 days on a single charge — even with GPS active.',
    highlights: ['14-day endurance', '5-min fast charge', 'Solar top-up ready'],
  },
]

function FeatureCard({ feature, index }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.3rem 0.85rem',
        borderRadius: '9999px',
        background: 'rgba(255,255,255,0.05)',
        border: `1px solid ${feature.iconBorder}`,
        color: feature.iconColor,
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        alignSelf: 'flex-start',
        marginBottom: '1.5rem',
      }}>
        {feature.badge}
      </div>

      {/* Icon */}
      <div
        className="feature-icon"
        style={{
          background: feature.iconBg,
          border: `1px solid ${feature.iconBorder}`,
          fontSize: '1.75rem',
        }}
      >
        {feature.icon}
      </div>

      {/* Text */}
      <h3 style={{
        margin: '0 0 0.75rem',
        fontSize: '1.2rem',
        fontWeight: 700,
        color: '#f0f0ff',
        lineHeight: 1.3,
      }}>
        {feature.title}
      </h3>
      <p style={{
        margin: '0 0 1.5rem',
        color: '#8888aa',
        lineHeight: 1.7,
        fontSize: '0.95rem',
        flexGrow: 1,
      }}>
        {feature.description}
      </p>

      {/* Highlights */}
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {feature.highlights.map(h => (
          <li key={h} style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            fontSize: '0.88rem', color: '#aaaacc',
          }}>
            <span style={{ color: feature.iconColor, fontSize: '0.8rem' }}>✦</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Core Features</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            margin: '0 0 1rem',
            color: '#f0f0ff',
          }}>
            Built for those who{' '}
            <span className="gradient-text">demand more</span>
          </h2>
          <p style={{
            color: '#8888aa',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '540px',
            margin: '0 auto',
          }}>
            Every feature in NexAura was obsessively engineered to push the
            boundaries of what a wearable can do.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
          className="features-grid"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop: '3.5rem',
          padding: '2rem 2.5rem',
          borderRadius: '1.5rem',
          background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(56,189,248,0.08))',
          border: '1px solid rgba(124,58,237,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f0f0ff', marginBottom: '0.25rem' }}>
              Ready to upgrade your wrist?
            </div>
            <div style={{ color: '#8888aa', fontSize: '0.9rem' }}>
              Free shipping · 30-day returns · 2-year warranty
            </div>
          </div>
          <a href="#" className="btn-glow" style={{ padding: '0.75rem 1.75rem' }}>
            Shop Now →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .features-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
