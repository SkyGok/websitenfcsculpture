import { useState } from 'react'

const faqs = [
  {
    q: 'Telefon uygulaması gerekli mi?',
    a: 'Hayır. Herhangi bir uygulama indirmenize gerek yoktur. NFC özelliği tüm modern telefonlarda yerleşik olarak gelir.',
  },
  {
    q: 'iPhone\'larda çalışıyor mu?',
    a: 'Evet. iPhone 7 ve üzeri tüm modellerde sorunsuz çalışır. iOS\'un yerleşik NFC okuyucusu otomatik devreye girer.',
  },
  {
    q: 'Android\'lerde çalışıyor mu?',
    a: 'Evet. NFC desteği olan tüm Android cihazlarda çalışır. Ekranı açmanız ve telefonu yaklaştırmanız yeterlidir.',
  },
  {
    q: 'Google dışında kullanılabilir mi?',
    a: 'Evet. Menü, Instagram, web sitesi, rezervasyon sistemi gibi istediğiniz herhangi bir bağlantıya yönlendirilebilir. Bağlantıyı istediğiniz zaman güncelleyebilirsiniz.',
  },
  {
    q: 'Kurulum zor mu?',
    a: 'Hayır, çok kolay. Heykeli alır, masanıza ya da kasanıza koyarsınız — hazır. Herhangi bir teknik bilgi veya kurulum gerektirmez.',
  },
  {
    q: 'Heykel ne kadar sürede gelir?',
    a: 'Siparişiniz onaylandıktan sonra üretim 5–7 iş günü, kargo ise 2–3 iş günü sürer. Toplam 7–10 iş günü içinde elinizde olur.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      style={{
        borderRadius: '1rem',
        border: `1px solid ${isOpen ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.07)'}`,
        background: isOpen
          ? 'rgba(124,58,237,0.07)'
          : 'rgba(255,255,255,0.02)',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.35rem 1.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          color: '#f0f0ff',
          fontFamily: 'inherit',
        }}
        aria-expanded={isOpen}
      >
        <span style={{
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.4,
          color: isOpen ? '#c084fc' : '#f0f0ff',
          transition: 'color 0.2s ease',
        }}>
          {item.q}
        </span>
        <span style={{
          flexShrink: 0,
          width: 28, height: 28,
          borderRadius: '50%',
          background: isOpen
            ? 'linear-gradient(135deg, #7c3aed, #a855f7)'
            : 'rgba(255,255,255,0.07)',
          border: `1px solid ${isOpen ? 'transparent' : 'rgba(255,255,255,0.12)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.9rem',
          color: isOpen ? '#fff' : '#8888aa',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'all 0.3s ease',
          fontWeight: 700,
        }}>
          +
        </span>
      </button>

      <div style={{
        maxHeight: isOpen ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{
          margin: '0',
          padding: '0 1.5rem 1.35rem',
          color: '#8888aa',
          lineHeight: 1.75,
          fontSize: '0.95rem',
        }}>
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="sss" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400,
        background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }}
          className="faq-grid"
        >
          {/* Left — heading */}
          <div style={{ position: 'sticky', top: '7rem' }} className="faq-sticky">
            <div className="section-label">SSS</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 1rem',
              color: '#f0f0ff',
              lineHeight: 1.1,
            }}>
              Sık Sorulan{' '}
              <span className="gradient-text">Sorular</span>
            </h2>
            <p style={{
              color: '#8888aa',
              lineHeight: 1.7,
              fontSize: '0.95rem',
              margin: '0 0 2rem',
            }}>
              Aklınızdaki sorular burada yanıt buluyor.
              Cevap bulamazsanız bize ulaşın.
            </p>
            <a href="#footer" className="btn-outline" style={{ fontSize: '0.9rem', padding: '0.7rem 1.5rem' }}>
              Bize Yazın →
            </a>
          </div>

          {/* Right — accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
          .faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  )
}
