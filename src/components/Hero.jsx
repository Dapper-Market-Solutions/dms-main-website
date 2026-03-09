export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://dapperms.com/wp-content/uploads/gemini-2_5-flash-image_This_is_an_image_of_a_hole_of_Augusta_National_Golf_Course_named_Magnolia__I_nee-2_127857a2-3f3b-434c-b690-760f9d894d3c.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,20,40,0.72)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: '#ffcb05', letterSpacing: '0.2em', animation: 'fadeUp 0.7s ease forwards 0.1s', opacity: 0 }}
          >
            The Only Marketing System Built Specifically for Golf Cart Dealerships
          </p>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ animation: 'fadeUp 0.7s ease forwards 0.3s', opacity: 0 }}
          >
            Most Agencies Sell You Reports.{' '}
            <span style={{ color: '#ffcb05' }}>We Sell You Revenue.</span>
          </h1>

          {/* Body */}
          <p
            className="text-lg text-white/75 leading-relaxed mb-10 font-light"
            style={{ animation: 'fadeUp 0.7s ease forwards 0.5s', opacity: 0 }}
          >
            Most agencies sell you monthly retainers and pray something works. We sell
            systems that move inventory. The{' '}
            <strong className="text-white font-semibold">Fairway Sales System™</strong>{' '}
            delivers a steady flow of ready-to-buy customers.{' '}
            <strong className="text-white font-semibold">Dapper IQ™</strong>{' '}
            finds the opportunities other dealerships miss before they even know they exist.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.7s ease forwards 0.7s', opacity: 0 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded text-base font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#ffcb05', color: '#00274c', boxShadow: '0 4px 16px rgba(255,203,5,0.3)' }}
            >
              Get Your Free Dealership Marketing Analysis
            </a>
            <a
              href="https://bit.ly/dmsbookacall"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded text-base font-bold transition-all hover:-translate-y-0.5"
              style={{ border: '2px solid rgba(255,255,255,0.4)', color: 'white' }}
            >
              Book a Call →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
        style={{ animation: 'bounce-arrow 1.5s ease-in-out infinite' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
