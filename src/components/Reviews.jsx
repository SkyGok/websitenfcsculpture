const reviews = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Kafe Sahibi · İstanbul',
    avatar: 'https://i.pravatar.cc/56?img=11',
    text: 'Heykelimizi koyduktan sonra ilk hafta içinde Google yorumlarımız ikiye katlandı. Müşteriler çok merak ediyor, her biri dokunmak istiyor. Kesinlikle tavsiye ederim.',
    stars: 5,
    platform: 'Google',
    highlight: true,
  },
  {
    name: 'Selin Demir',
    role: 'Restoran İşletmecisi · Ankara',
    avatar: 'https://i.pravatar.cc/56?img=25',
    text: 'QR kod denerken kimse taramıyordu. NFC heykel gelince her şey değişti. Müşteriler "bu ne?" diye sorup kendileri dokunutuyor. Büyük fark.',
    stars: 5,
    platform: 'Google',
    highlight: false,
  },
  {
    name: 'Murat Kaya',
    role: 'Kuaför · İzmir',
    avatar: 'https://i.pravatar.cc/56?img=33',
    text: 'Tasarım çok şık, salonuma çok yakıştı. Müşterilerim sürekli soruyor nereden aldığımı. 3 aydır kullanıyorum, tek sorun yok.',
    stars: 5,
    platform: 'Google',
    highlight: false,
  },
  {
    name: 'Zeynep Arslan',
    role: 'Butik Otel Sahibi · Bodrum',
    avatar: 'https://i.pravatar.cc/56?img=48',
    text: 'Resepsiyona koyduk, her check-in\'den sonra misafirler kendiliğinden yorum bırakıyor. Operasyona hiç dokunmadan yorum sayımız 3 katına çıktı.',
    stars: 5,
    platform: 'Google',
    highlight: false,
  },
  {
    name: 'Emre Şahin',
    role: 'Bar & Lounge · İstanbul',
    avatar: 'https://i.pravatar.cc/56?img=15',
    text: 'Geceleri çok karanlık ortamda bile müşteriler buluyor ve kullanıyor. iPhone ile Android\'de sorunsuz çalışıyor. Mükemmel bir ürün.',
    stars: 5,
    platform: 'Google',
    highlight: false,
  },
  {
    name: 'Fatma Çelik',
    role: 'Güzellik Salonu · Bursa',
    avatar: 'https://i.pravatar.cc/56?img=44',
    text: 'Personelimiz artık yorum istemek zorunda kalmıyor. Müşteri ödeme yaparken heykele gözü takılıyor ve dokunuyor. Tam anlamıyla pasif yorum sistemi.',
    stars: 5,
    platform: 'Google',
    highlight: false,
  },
  {
    name: 'Tolga Erdoğan',
    role: 'Oto Servis Sahibi · Bursa',
    avatar: 'https://i.pravatar.cc/56?img=52',
    text: 'Bekleme salonuna koyduk. Müşteriler araç beklerken telefonu dokunduruyor. Aylık ortalama yorum sayımız 5\'ten 40\'a çıktı. İnanılmaz.',
    stars: 5,
    platform: 'Google',
    highlight: false,
  },
  {
    name: 'Ayşe Kırmızı',
    role: 'Pastane · Eskişehir',
    avatar: 'https://i.pravatar.cc/56?img=38',
    text: 'Hem çok şık hem çok pratik. Kasaya koyduk, müşteriler "bu ne?" diye sorduğunda açıklıyoruz. O sohbet başlı başına müşteri bağlılığı yaratıyor.',
    stars: 5,
    platform: 'Google',
    highlight: false,
  },
]

function StarRow({ count }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#f59e0b' : '#333355', fontSize: '0.95rem' }}>★</span>
      ))}
    </div>
  )
}

function ReviewCard({ r, style = {} }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300px',
        maxWidth: '360px',
        flex: '0 0 auto',
        ...(r.highlight ? {
          border: '1px solid rgba(124,58,237,0.4)',
          background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.06))',
        } : {}),
        ...style,
      }}
    >
      <StarRow count={r.stars} />

      {/* Quote mark */}
      <div style={{
        fontSize: '2.5rem',
        lineHeight: 0.8,
        color: 'rgba(168,85,247,0.3)',
        fontFamily: 'Georgia, serif',
        marginBottom: '0.5rem',
      }}>
        "
      </div>

      <p style={{
        color: '#aaaacc',
        lineHeight: 1.7,
        fontSize: '0.92rem',
        margin: '0 0 1.5rem',
        flexGrow: 1,
      }}>
        {r.text}
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img
          src={r.avatar}
          alt={`${r.name} profil fotoğrafı`}
          style={{
            width: 42, height: 42, borderRadius: '50%', objectFit: 'cover',
            border: '2px solid rgba(124,58,237,0.3)',
            flexShrink: 0,
          }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#f0f0ff' }}>{r.name}</div>
          <div style={{ fontSize: '0.75rem', color: '#8888aa' }}>{r.role}</div>
        </div>
        {/* Google badge */}
        <div style={{
          marginLeft: 'auto',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '0.5rem',
          padding: '0.2rem 0.55rem',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: '#8888aa',
          letterSpacing: '0.04em',
          flexShrink: 0,
        }}>
          G
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  // Split into two rows for the marquee
  const row1 = reviews.slice(0, 4)
  const row2 = reviews.slice(4)

  return (
    <section id="yorumlar" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 500,
        background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div className="section-label">Müşteri Yorumları</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#f0f0ff',
            margin: '0 0 1rem',
          }}>
            İşletmeler{' '}
            <span className="gradient-text">seviyor</span>
          </h2>
          <p style={{
            color: '#8888aa',
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: '460px',
            margin: '0 auto 3.5rem',
          }}>
            Türkiye genelinde 500+ işletme NFC Heykel ile Google yorumlarını
            artırıyor. İşte onların sözleri.
          </p>
        </div>

        {/* Summary stat strip */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          marginBottom: '4rem',
        }}>
          {[
            { value: '500+', label: 'Mutlu İşletme' },
            { value: '4.9 / 5', label: 'Ortalama Puan' },
            { value: '%300', label: 'Daha Fazla Yorum' },
            { value: '10K+', label: 'Toplam Yorum' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f0f0ff', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#8888aa', marginTop: '0.3rem', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee Row 1 — scrolls left ── */}
      <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          animation: 'marquee-left 30s linear infinite',
          width: 'max-content',
        }}>
          {[...row1, ...row1].map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>

      {/* ── Marquee Row 2 — scrolls right ── */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          animation: 'marquee-right 35s linear infinite',
          width: 'max-content',
        }}>
          {[...row2, ...row2].map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>

      {/* ── Static grid below (all reviews, desktop) ── */}
      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1, marginTop: '4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}
          className="reviews-grid"
        >
          {reviews.map((r, i) => (
            <div key={i} className="glass-card" style={{
              padding: '1.5rem',
              ...(r.highlight ? {
                border: '1px solid rgba(124,58,237,0.4)',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.06))',
              } : {}),
            }}>
              <StarRow count={r.stars} />
              <p style={{
                color: '#aaaacc',
                lineHeight: 1.65,
                fontSize: '0.88rem',
                margin: '0 0 1.25rem',
              }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <img
                  src={r.avatar}
                  alt={`${r.name} profil`}
                  style={{
                    width: 38, height: 38, borderRadius: '50%', objectFit: 'cover',
                    border: '2px solid rgba(124,58,237,0.25)', flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#f0f0ff' }}>{r.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#8888aa' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ color: '#55557a', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            Google'da 4.9 yıldız · 500+ gerçek işletme yorumu
          </p>
          <a href="#" className="btn-glow">
            Siz de Katılın →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        @media (max-width: 1100px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
