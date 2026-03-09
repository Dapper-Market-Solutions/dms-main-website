export default function PageHero({ eyebrow, title, subtitle, cta, ctaHref = '#contact' }) {
  return (
    <section
      className="relative py-28 flex items-center"
      style={{ background: 'linear-gradient(135deg, #001326 0%, #00274c 60%, #003a6e 100%)' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,203,5,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,203,5,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            {subtitle}
          </p>
        )}
        {cta && (
          <a
            href={ctaHref}
            className="inline-block px-8 py-4 rounded text-base font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: '#ffcb05', color: '#00274c' }}
          >
            {cta}
          </a>
        )}
      </div>
    </section>
  )
}
