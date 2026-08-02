import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Nasıl Çalışır?', href: '#nasil-calisir' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Fark', href: '#karsilastirma' },
    { label: 'SSS', href: '#sss' },
    { label: 'İletişim', href: '#footer' },
  ]

  return (
    <nav
      className="navbar"
      style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none' }}
    >
      <div className="section-wrapper">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem',
              boxShadow: '0 0 16px rgba(124,58,237,0.5)'
            }}>
              ⬡
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#f0f0ff', letterSpacing: '-0.02em' }}>
              NFC <span style={{ color: '#a855f7' }}>Sculpture</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#8888aa',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseOver={e => (e.target.style.color = '#f0f0ff')}
                onMouseOut={e => (e.target.style.color = '#8888aa')}
              >
                {link.label}
              </a>
            ))}
            <a href="#" className="btn-glow" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              Sipariş Ver
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#f0f0ff', fontSize: '1.5rem', padding: '0.25rem',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '1rem 0',
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: '#8888aa', textDecoration: 'none',
                  fontSize: '1rem', fontWeight: 500, padding: '0.5rem 0',
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#" className="btn-glow" style={{ alignSelf: 'flex-start', padding: '0.7rem 1.75rem' }}>
              Sipariş Ver
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
