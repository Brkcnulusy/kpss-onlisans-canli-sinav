/* ─── Feature icons ─── */
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const BarChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const features = [
  { icon: <ClockIcon />,    title: 'Gerçek Süre',         desc: 'ÖSYM formatında 130 dk geri sayım' },
  { icon: <TargetIcon />,   title: 'Net Hesaplama',       desc: '4 yanlış 1 doğruyu götürür kuralı' },
  { icon: <BarChartIcon />, title: 'Detaylı Analiz',      desc: 'Ders bazlı başarı oranı ve P93 tahmini' },
];

export default function HeroScreen({ onStart }) {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Decorative gradient orb */}
        <div className="hero__orb" aria-hidden="true" />

        <div className="hero__content anim-slide">
          <div className="hero__badge">
            <span className="badge badge--primary">🎯 Geçmiş Yıl Soruları</span>
          </div>

          <h1 className="hero__title">
            KPSS Ön Lisans
            <span className="hero__title-highlight"> Sınav Simülatörü</span>
          </h1>

          <p className="hero__subtitle">
            2024, 2022, 2020, 2018, 2016 — Geçmiş yıl ÖSYM sorularını gerçek sınav ortamında çöz,
            netini hesapla ve tahmini P93 puanını öğren.
          </p>

          <button id="hero-start-btn" className="btn btn--primary btn--lg hero__cta" onClick={onStart}>
            Sınava Başla
            <ArrowRightIcon />
          </button>
        </div>

        <div className="hero__features anim-slide" style={{ animationDelay: '.12s' }}>
          {features.map((f, i) => (
            <div key={i} className="hero__feature-card surface">
              <span className="hero__feature-icon">{f.icon}</span>
              <div>
                <h3 className="hero__feature-title">{f.title}</h3>
                <p className="hero__feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
