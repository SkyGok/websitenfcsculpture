import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'NFC Heykel kafe masasında',
    label: 'Kafe',
    wide: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'NFC Heykel restoran masasında',
    label: 'Restoran',
    wide: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    alt: 'NFC Heykel otel resepsiyonunda',
    label: 'Otel',
    wide: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
    alt: 'NFC heykel ofis masasında',
    label: 'Ofis',
    wide: false,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    alt: 'NFC heykel güzellik salonunda',
    label: 'Güzellik',
    wide: false,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    alt: 'NFC heykel toplantı masasında',
    label: 'İş Merkezi',
    wide: true,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    alt: 'NFC heykel etkinlik alanında',
    label: 'Etkinlik',
    wide: false,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80',
    alt: 'NFC heykel bar tezgahında',
    label: 'Bar',
    wide: false,
  },
]

function GalleryItem({ item, onClick }) {
  return (
    <div
      className="gallery-img"
      onClick={() => onClick(item)}
      style={{
        gridColumn: item.wide ? 'span 2' : 'span 1',
        cursor: 'zoom-in',
        aspectRatio: item.wide ? '16/9' : '4/3',
      }}
    >
      <img src={item.src} alt={item.alt} loading="lazy" />
      <div className="gallery-img-overlay" />
      <div style={{
        position: 'absolute', bottom: '14px', left: '14px', zIndex: 3,
        background: 'rgba(15,15,30,0.85)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '9999px',
        padding: '0.3rem 0.85rem',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#f0f0ff',
        backdropFilter: 'blur(8px)',
      }}>
        {item.label}
      </div>
    </div>
  )
}

function Lightbox({ item, onClose }) {
  if (!item) return null
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(12px)',
        cursor: 'zoom-out',
        padding: '2rem',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '9999px',
          width: 44, height: 44,
          cursor: 'pointer',
          color: '#f0f0ff',
          fontSize: '1.2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        aria-label="Kapat"
      >
        ✕
      </button>
      <img
        src={item.src.replace('w=600', 'w=1200').replace('w=800', 'w=1400')}
        alt={item.alt}
        style={{
          maxWidth: '90vw', maxHeight: '85vh',
          objectFit: 'contain',
          borderRadius: '1rem',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
        }}
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">Ürün Galerisi</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            margin: '0 0 1rem',
            color: '#f0f0ff',
          }}>
            Her mekâna{' '}
            <span className="gradient-text">özel tasarım</span>
          </h2>
          <p style={{ color: '#8888aa', maxWidth: '440px', lineHeight: 1.7, fontSize: '0.95rem', margin: '0 auto' }}>
            Kafe'den restorana, otelden ofise — NFC heykellerimiz her ortama
            mükemmel uyum sağlar. Görmek için tıklayın.
          </p>
        </div>

        {/* Large Featured Item */}
        <div style={{
          borderRadius: '1.5rem',
          overflow: 'hidden',
          marginBottom: '1rem',
          height: '380px',
          position: 'relative',
          border: '1px solid rgba(255,255,255,0.08)',
          cursor: 'zoom-in',
        }}
          onClick={() => setSelected(galleryItems[0])}
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
            alt="NFC Heykel premium sergi görseli"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            onMouseOver={e => (e.target.style.transform = 'scale(1.03)')}
            onMouseOut={e => (e.target.style.transform = 'scale(1)')}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(7,7,15,0.75) 0%, transparent 50%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '1.75rem', left: '2rem',
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(124,58,237,0.85)',
              borderRadius: '9999px',
              padding: '0.3rem 1rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '0.75rem',
              backdropFilter: 'blur(8px)',
            }}>
              Öne Çıkan
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f0f0ff' }}>
              Her Mekâna Özel Tasarım
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}
          className="gallery-grid"
        >
          {galleryItems.map(item => (
            <GalleryItem key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>

        {/* CTA below gallery */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ color: '#55557a', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
            Kafe · Restoran · Otel · Kuaför · Ofis · Bar — Tüm mekânlar için üretiyoruz
          </p>
          <a href="#" className="btn-outline">
            Tüm Tasarımları Gör →
          </a>
        </div>
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-grid > div[style*="span 2"] { grid-column: span 2 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid > div[style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
