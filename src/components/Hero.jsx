import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef(null)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-darkest">
      {/* Background geometric layers */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Dramatic diagonal accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/5 bg-navy hidden lg:block"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      {/* Gold accent bars */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
      <div
        className="absolute right-0 bottom-0 h-1.5 bg-gold hidden lg:block"
        style={{ width: '42%' }}
      />

      {/* Floating gold shapes */}
      <div
        className="animate-drift absolute top-24 right-1/3 w-64 h-64 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, #ffcb05 0%, transparent 70%)',
          animationDelay: '0s',
        }}
      />
      <div
        className="animate-drift absolute bottom-32 right-20 w-96 h-96 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, #ffcb05 0%, transparent 70%)',
          animationDelay: '-3s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-fade-up flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-gold" />
            <span
              className="text-gold font-mono text-xs tracking-widest uppercase"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}
            >
              Golf Cart Dealership Marketing
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-display font-700 leading-none uppercase mb-6">
            Most Agencies<br />
            Sell You <span className="text-gold">Reports.</span><br />
            We Sell You{' '}
            <span
              className="relative inline-block"
              style={{
                WebkitTextStroke: '2px #ffcb05',
                color: 'transparent',
              }}
            >
              Revenue.
            </span>
          </h1>

          {/* Sub */}
          <p className="animate-fade-up delay-300 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-body font-light">
            Most agencies sell you monthly retainers and pray something works.
            We sell systems that move inventory. The{' '}
            <strong className="text-white font-semibold">Fairway Sales System™</strong>{' '}
            delivers a steady flow of ready-to-buy customers.{' '}
            <strong className="text-white font-semibold">Dapper IQ™</strong>{' '}
            finds the opportunities other dealerships miss before they even know they exist.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn-gold animate-gold-pulse px-8 py-4 rounded-sm text-base"
            >
              Get Your Free Marketing Analysis
            </a>
            <a
              href="https://bit.ly/dmsbookacall"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-4 rounded-sm text-base"
            >
              Book a Call →
            </a>
          </div>

          {/* Trust markers */}
          <div className="animate-fade-up delay-700 flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              { num: '97%', label: 'Visitors Leave Without Converting' },
              { num: '24', label: 'Qualified Leads in 30 Days' },
              { num: '70%', label: 'Buyers Research Online First' },
            ].map(item => (
              <div key={item.num} className="flex items-center gap-3">
                <span className="text-2xl font-display font-700 text-gold">{item.num}</span>
                <span className="text-white/50 text-xs leading-tight max-w-24">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Barlow Condensed' }}>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
