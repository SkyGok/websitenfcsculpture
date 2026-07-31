import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
    alt: 'NexAura watch on wrist showing health dashboard',
    label: 'Lifestyle',
    span: 'col-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80',
    alt: 'NexAura watch close-up detail shot',
    label: 'Detail',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80',
    alt: 'NexAura watch on marble surface',
    label: 'Design',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1574353110946-7e3b4e3a5b10?w=800&q=80',
    alt: 'NexAura watch during outdoor fitness activity',
    label: 'Fitness',
    span: '',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    alt: 'NexAura watch displaying watch face',
    label: 'Classic',
    span: '',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80',
    alt: 'NexAura watch product photography dark background',
    label: 'Premium',
    span: '',
  },
]

function GalleryItem({ item, onClick }) {
  return (
    <div
      className="gallery-img"
      onClick={() => onClick(item)}
      style={{
        gridColumn: item.span ? 'span 2' : 'span 1',
        cursor: 'zoom-in',
      }}
    >
      <img src={item.src} alt={item.alt} loading="lazy" />
      <div className="gallery-img-overlay" />
      {/* Label chip */}
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
        background: 'rgba(0,0,0,0.9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(10px)',
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
        aria-label="Close lightbox"
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
    <section id="gallery" style={{ padding: '7rem 0', position: 'relative' }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <div>
            <div className="section-label">Gallery</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0',
              color: '#f0f0ff',
            }}>
              Crafted to be{' '}
              <span className="gradient-text">admired</span>
            </h2>
          </div>
          <p style={{ color: '#8888aa', maxWidth: '340px', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>
            Every angle, every finish — NexAura is designed to turn heads.
            Click any image to see it in full detail.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}
          className="gallery-grid"
        >
          {galleryItems.map(item => (
            <GalleryItem key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: 'center',
          color: '#55557a',
          fontSize: '0.85rem',
          marginTop: '1.5rem',
        }}>
          6 colorways available · Interchangeable bands · Custom engraving
        </p>
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />

      <style>{`
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-grid > div[style*="span 2"] {
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </section>
  )
}
