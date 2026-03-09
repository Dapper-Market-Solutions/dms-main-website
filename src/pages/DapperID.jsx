const STATS = [
  { value: '97%', label: 'of visitors leave without filling out a form' },
  { value: '280M+', label: 'US consumer profiles matched' },
  { value: '95%', label: 'identity match accuracy' },
  { value: '<24hr', label: 'lead delivery turnaround' },
]

const STEPS = [
  {
    step: '01',
    title: 'One Line of Code',
    body: 'You paste a single pixel onto your website. That\'s it. No complex integrations. No developer needed. Setup takes under five minutes. The moment it\'s live, it starts working.',
  },
  {
    step: '02',
    title: 'Visitor Identity Resolution',
    body: 'When someone lands on your site, our technology matches their browser cookie to a pre-built identity graph of 280 million+ US consumer profiles. Deterministic matching — not guessing, not IP lookups. Actual identity resolution.',
  },
  {
    step: '03',
    title: 'A Warm Lead Lands in Your Lap',
    body: 'Within hours, you have a name, a personal email, a phone number, and demographic data on the person who just visited your website. They\'re already warm. They already know you. Now go close them.',
  },
]

const PROFILE_FIELDS = [
  'First & Last Name',
  'Personal Email',
  'Mobile Phone',
  'Home Address',
  'Age & Gender',
  'Income Range',
  'Net Worth',
  'Homeowner Status',
  'Marital Status',
  'Match Confidence Score',
]

const INDUSTRIES = [
  { icon: '🏠', title: 'Roofing & Home Services', body: 'Someone just visited your estimate page and left. That\'s not a bounce — that\'s a hot lead who got distracted. Call them within the hour.' },
  { icon: '⚖️', title: 'Legal & Personal Injury', body: 'A potential client researched your firm but didn\'t fill out a form. Cases worth $50K–$500K are walking out your digital door. Stop letting them.' },
  { icon: '💰', title: 'Financial Services', body: 'High-net-worth prospects don\'t fill out forms. They research quietly. Dapper ID™ tells you exactly who\'s looking at your services page right now.' },
  { icon: '🏡', title: 'Real Estate', body: 'Buyers browse for months before reaching out. Know who\'s looking at your listings before your competition gets to them with a Zillow lead.' },
  { icon: '☀️', title: 'Solar', body: 'Your cost-of-energy calculator page is your highest-intent page. The people using it and leaving are worth thousands per closed deal. Go get them.' },
  { icon: '🛡️', title: 'Insurance', body: 'Quote comparison shoppers visit five sites and call zero. Be the one that calls them. First mover wins the sale in insurance — every time.' },
]

const FAQS = [
  { q: 'Is this legal?', a: 'Yes. The identity resolution process is built on cookie-based consent. The data is sourced and processed in compliance with applicable privacy laws. You\'re responsible for how you use it — which means honoring opt-outs and following CAN-SPAM. Same rules you already follow.' },
  { q: 'How is this different from Google Analytics or my CRM?', a: 'Your analytics tells you how many people visited. Your CRM tells you about people who already said yes. Dapper ID™ fills the gap in between — it tells you who the silent majority is. The 97% your tools currently see as anonymous traffic.' },
  { q: 'What\'s the match rate — how many visitors actually get identified?', a: 'Resolution rates vary by site and traffic source but are typically significant enough to generate a consistent pipeline of warm contacts daily. We\'ll show you real numbers based on your site traffic in a demo before you commit to anything.' },
  { q: 'How fast does the data come through?', a: 'Near real-time. Identified visitors can appear in your dashboard or be delivered to your CRM within hours of the visit. Speed matters — a lead followed up within the first hour is dramatically more likely to convert than one followed up the next day.' },
]

export default function DapperID() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001326 0%, #00274c 60%, #003a6e 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffcb05 1px, transparent 1px), linear-gradient(90deg, #ffcb05 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Dapper ID™</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Your Website Is Leaking Money.<br />
            <span style={{ color: '#ffcb05' }}>We Plug the Hole.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            97% of your website visitors leave without filling out a form. They came. They looked. They left. And you had no idea who they were. Dapper ID™ changes that — we tell you exactly who visited, their name, email, and phone number, so your team can follow up before your competitor even knows they exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://id.dapperms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded text-base font-bold transition-all hover:-translate-y-0.5"
              style={{ background: '#ffcb05', color: '#00274c' }}
            >
              See It In Action →
            </a>
            <a
              href="https://bit.ly/dmsbookacall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded text-base font-bold border-2 text-white transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12" style={{ background: '#ffcb05' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold" style={{ color: '#00274c' }}>{s.value}</div>
                <p className="text-sm font-medium mt-1" style={{ color: '#00274c', opacity: 0.75 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>The Problem Nobody Talks About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00274c' }}>
            You're Paying for Traffic You'll Never Close
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            You're spending thousands every month on ads. SEO. Content. Maybe a sales team. All of it designed to get people to your website. And then 97% of them ghost you.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            They didn't bounce because they weren't interested. They bounced because you gave them no reason to stay — and you had no way to reach them after they left. That's not a traffic problem. That's a follow-up problem. And it's costing you a fortune.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ background: '#00274c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Three Steps. Zero Guesswork.</h2>
            <p className="text-white/60 mt-4 text-lg">We don't guess who's on your site. We know.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="reveal rounded-xl p-8 border border-white/10 bg-white/5" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-sm font-mono font-semibold mb-3" style={{ color: '#ffcb05' }}>{s.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="py-20" style={{ background: '#efefef' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Not Just a Name</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: '#00274c' }}>
                A Full Dossier on Every Identified Visitor
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every identified visitor comes with a complete profile — everything your sales team needs to have a real, personalized follow-up conversation.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {PROFILE_FIELDS.map((field, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-bold flex-shrink-0" style={{ color: '#ffcb05' }}>◆</span>
                    {field}
                  </div>
                ))}
              </div>
            </div>
            {/* Sample profile card */}
            <div className="reveal delay-200">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-sm mx-auto">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: '#00274c' }}>JD</div>
                  <div>
                    <div className="font-bold" style={{ color: '#00274c' }}>James Donovan</div>
                    <div className="text-xs text-gray-400">Visited: Pricing Page — 4 min ago</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  {[
                    ['Email', 'j.donovan@gmail.com'],
                    ['Mobile', '(734) 555-0182'],
                    ['Address', '4821 Maple Dr, Ann Arbor, MI'],
                    ['Age', '42'],
                    ['Income', '$150K – $200K'],
                    ['Net Worth', '$500K – $750K'],
                    ['Homeowner', 'Yes'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-gray-400">{k}</span>
                      <span className="font-medium" style={{ color: '#00274c' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg p-3 text-center text-sm font-bold" style={{ background: '#ffcb05', color: '#00274c' }}>
                  MATCH CONFIDENCE: 94%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Built for Revenue-Driven Teams</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>If Someone Visits Your Site, You Should Know Who.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="reveal rounded-xl p-6 border border-gray-100 shadow-sm" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: '#00274c' }}>{ind.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#efefef' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Straight Answers</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>The Questions You're Thinking</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <div key={i} className="reveal bg-white rounded-xl p-6 shadow-sm" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="font-bold mb-2" style={{ color: '#00274c' }}>{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: '#00274c' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Ready to Stop Leaving Money on the Table?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Book a Free ROI Analysis
          </h2>
          <p className="text-white/65 leading-relaxed mb-8">
            We'll show you exactly how much revenue Dapper ID™ can recover from your existing traffic. No obligation. No sales pitch. Just clear numbers showing what's possible.
          </p>
          <ul className="space-y-3 mb-10 text-left max-w-md mx-auto">
            {[
              'Free traffic audit — how much revenue you\'re currently losing',
              'Projected recovery rate based on your traffic and industry',
              'Custom implementation roadmap tailored to your business',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: '#ffcb05' }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bit.ly/dmsbookacall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded text-base font-bold transition-all hover:-translate-y-0.5"
              style={{ background: '#ffcb05', color: '#00274c' }}
            >
              Get Your Free ROI Analysis →
            </a>
            <a
              href="https://id.dapperms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded text-base font-bold border-2 text-white transition-all hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Visit id.dapperms.com →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
