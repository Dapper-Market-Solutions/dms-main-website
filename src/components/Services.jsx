const SERVICES = [
  {
    icon: '🏌️',
    name: 'Fairway Sales System™',
    tagline: 'The Golf Cart Dealership Playbook',
    desc: 'Built specifically for golf cart dealers who are tired of relying on walk-ins and referrals. The Fairway Sales System™ gives you a repeatable process to attract buyers, nurture leads, and close deals—even during the slow season.',
    features: [
      'Purpose-built for golf cart dealerships (not generic CRM)',
      'Automated lead nurturing that runs 24/7',
      'Systematic sales process optimization',
    ],
    href: '#',
  },
  {
    icon: '🎯',
    name: 'Dapper IQ™',
    tagline: 'Turn Website Ghosts Into Paying Customers',
    desc: "97% of your website visitors leave without buying. Dapper IQ™ identifies who they are, what they looked at, and how to get them back. From recovering abandoned inquiries to building laser-targeted remarketing campaigns.",
    features: [
      'Identify anonymous visitors before your competitors do',
      'Recover abandoned inquiries automatically',
      'Build remarketing campaigns that actually convert',
    ],
    href: '#',
  },
  {
    icon: '🌐',
    name: 'Website Design & Development',
    tagline: 'Websites That Actually Sell',
    desc: "Your website shouldn't be a digital brochure—it should be a 24/7 salesperson. We build high-converting sites designed to capture leads, showcase inventory, and close deals while you sleep.",
    features: [
      'Custom design that matches your brand',
      'Mobile-first development (70% of traffic is on phones)',
      'SEO-optimized to own your local market',
    ],
    href: '#',
  },
  {
    icon: '📈',
    name: 'Paid Media (Google & Meta Ads)',
    tagline: 'Paid Ads That Actually Pay For Themselves',
    desc: "We don't run ads to \"build brand awareness.\" We run ads to put buyers on your lot. Every campaign is optimized for one thing: turning ad spend into profit.",
    features: [
      'Google Ads that capture high-intent buyers',
      'Meta campaigns that generate qualified leads',
      'ROI tracking so you always know what\'s working',
    ],
    href: '#',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20" style={{ background: '#001326' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>
            Everything you need to dominate your market.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Complete Marketing System for <strong style={{ color: '#ffcb05' }}>Golf Cart Dealerships</strong>
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#ffcb05' }}>{s.tagline}</p>
              <h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: '#00274c' }}>{s.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="mt-0.5 font-bold" style={{ color: '#ffcb05' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                style={{ color: '#ffcb05' }}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
