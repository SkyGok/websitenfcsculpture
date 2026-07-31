const socialLinks = [
  { icon: '𝕏', label: 'X / Twitter', href: 'https://x.com' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '▶', label: 'YouTube', href: 'https://youtube.com' },
  { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com' },
]

const footerLinks = [
  {
    heading: 'Product',
    links: ['Gallery', 'Specifications', 'Contact Us'],
  },
]

export default function Footer() {
  return (
    <footer id="footer" style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)',
      }} />

      {/* Main footer content */}
      <div className="section-wrapper" style={{ padding: '4rem 1.5rem 2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem',
              }}>
                ⬡
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#f0f0ff' }}>
                NFC <span style={{ color: '#a855f7' }}>Sculpture</span>
              </span>
            </a>
            <p style={{
              color: '#8888aa',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              margin: '0 0 1.5rem',
              maxWidth: '280px',
            }}>
              Redefining what a wearable can do.
              Precision engineering. Timeless design. Intelligent living.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(col => (
            <div key={col.heading}>
              <h4 style={{
                color: '#f0f0ff',
                fontWeight: 700,
                fontSize: '0.875rem',
                margin: '0 0 1.25rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: '#8888aa',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseOver={e => (e.target.style.color = '#c084fc')}
                      onMouseOut={e => (e.target.style.color = '#8888aa')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ color: '#55557a', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} NFC Sculpture. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map(l => (
              <a
                key={l}
                href="#"
                style={{
                  color: '#55557a',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseOver={e => (e.target.style.color = '#8888aa')}
                onMouseOut={e => (e.target.style.color = '#55557a')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
