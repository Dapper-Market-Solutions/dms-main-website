import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    id: 'fairway',
    number: '01',
    name: 'Fairway Sales System™',
    tagline: 'The Golf Cart Dealership Playbook',
    description:
      'Built specifically for golf cart dealers who are tired of relying on walk-ins and referrals. The Fairway Sales System™ gives you a repeatable process to attract buyers, nurture leads, and close deals—even during the slow season. No guessing. Just a proven system that works.',
    features: [
      'Purpose-built for golf cart dealerships (not generic CRM)',
      'Automated lead nurturing that runs 24/7',
      'Systematic sales process optimization',
    ],
    href: '#fairway',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm9.75-9.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0112.75 19.5V3.375zm-6.75 6c0-.621.504-1.125 1.125-1.125h2.25C9.746 8.25 10.25 8.754 10.25 9.375v10.5c0 .621-.504 1.125-1.125 1.125H7.875A1.125 1.125 0 016.75 19.875v-10.5z" />
      </svg>
    ),
  },
  {
    id: 'dapper-iq',
    number: '02',
    name: 'Dapper IQ™',
    tagline: 'Turn Website Ghosts Into Paying Customers',
    description:
      "97% of your website visitors leave without buying. Dapper IQ™ identifies who they are, what they looked at, and how to get them back. From recovering abandoned inquiries to building laser-targeted remarketing campaigns, we turn lost traffic into found money.",
    features: [
      'Identify anonymous visitors before your competitors do',
      'Recover abandoned inquiries automatically',
      'Build remarketing campaigns that actually convert',
    ],
    href: '#dapper-iq',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
  },
  {
    id: 'websites',
    number: '03',
    name: 'Website Design',
    tagline: 'Websites That Actually Sell',
    description:
      "Your website shouldn't be a digital brochure—it should be a 24/7 salesperson. We build high-converting sites designed to capture leads, showcase inventory, and close deals while you sleep. Fast, mobile-optimized, and built to dominate local search.",
    features: [
      'Custom design that matches your brand',
      'Mobile-first development (70% of traffic is on phones)',
      'SEO-optimized to own your local market',
    ],
    href: '#websites',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    id: 'paid-search',
    number: '04',
    name: 'Paid Media',
    tagline: 'Paid Ads That Actually Pay For Themselves',
    description:
      "We don't run ads to \"build brand awareness.\" We run ads to put buyers on your lot. Every campaign is optimized for one thing: turning ad spend into profit. Google, Meta, Facebook, Instagram—whatever platform your customers are on, we're there.",
    features: [
      'Google Ads that capture high-intent buyers (not tire-kickers)',
      'Meta campaigns that generate qualified leads',
      'ROI tracking so you always know what\'s working',
    ],
    href: '#paid-search',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="relative py-28 bg-navy-deep">
      {/* Background accent */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20">
          <div className="gold-line" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="reveal text-5xl md:text-6xl font-display uppercase leading-none">
                Everything You Need to<br />
                <span className="text-gold">Dominate Your Market.</span>
              </h2>
            </div>
            <p className="reveal delay-200 text-white/50 max-w-sm font-body">
              The complete marketing system for golf cart dealerships — built from the ground up to move inventory and generate predictable revenue.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`reveal service-card bg-navy-darkest/60 rounded-sm overflow-hidden ${i % 2 === 0 ? '' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-start gap-4">
                    <span
                      className="text-7xl font-display font-700 leading-none"
                      style={{
                        WebkitTextStroke: '1px rgba(255,203,5,0.3)',
                        color: 'transparent',
                      }}
                    >
                      {service.number}
                    </span>
                    <div className="text-gold">{service.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2 text-gold/60 text-xs font-mono tracking-widest uppercase">
                      {service.tagline}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display uppercase mb-4 text-white">
                      {service.name}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6 max-w-2xl font-body">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-3 text-white/70 text-sm">
                          <span className="text-gold mt-0.5 flex-shrink-0">▸</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0 flex items-center">
                    <a
                      href="#contact"
                      className="btn-outline px-6 py-3 rounded-sm text-sm whitespace-nowrap"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
