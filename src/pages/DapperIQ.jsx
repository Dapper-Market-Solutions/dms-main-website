import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

const CAPABILITIES = [
  {
    icon: '👁️',
    title: 'Visitor Identification',
    body: 'See which companies are checking you out (B2B), track what they\'re interested in, and know when they\'re ready to buy. Stop marketing to ghosts. Start marketing to real prospects with names, emails, and buying intent.',
    bullets: ['Company-level identification for B2B', 'Behavioral tracking across sessions', 'Intent signal detection'],
  },
  {
    icon: '🛒',
    title: 'Abandoned Cart Recovery',
    body: 'Automatically capture and follow up with visitors who abandon their carts. Deploy personalized email and SMS campaigns to recover lost revenue and improve conversion rates.',
    bullets: ['Automated recovery sequences', 'Dynamic incentive optimization', 'Multi-channel outreach'],
  },
  {
    icon: '📊',
    title: 'Campaign Data Infusion',
    body: 'Enrich your marketing campaigns with first-party behavioral data. Create highly targeted segments and personalized messaging that resonates with each prospect\'s unique journey.',
    bullets: ['Real-time data synchronization', 'Advanced segmentation capabilities', 'Cross-platform integration'],
  },
  {
    icon: '🎯',
    title: 'Advanced Remarketing',
    body: 'Deploy sophisticated remarketing campaigns across email, social media, and display networks. Target prospects based on specific behaviors, pages viewed, and engagement levels.',
    bullets: ['Behavior-triggered campaigns', 'Lookalike audience building', 'Multi-touch attribution'],
  },
]

const STEPS = [
  { step: '01', title: 'Identify', body: 'Dapper IQ™ tracks every visitor to your site — even if they don\'t fill out a form or call you. We identify which companies (B2B) or individuals (B2C) visited, what pages they viewed, and how long they stayed.' },
  { step: '02', title: 'Capture', body: 'Once we know who\'s visiting, we automatically capture their behavior and intent signals — cart abandonment, product interest, return visits — and add them to targeted remarketing lists.' },
  { step: '03', title: 'Convert', body: 'Deploy personalized email, SMS, and ad campaigns that bring visitors back to your site and convert them into paying customers. All automated, all tracked, all optimized for maximum ROI.' },
]

const INCLUDED = [
  'Visitor Identification — identify anonymous website visitors before your competitors do',
  'Behavioral Tracking — track what they view, how long they stay, and when they return',
  'Cart Recovery Automation — recover abandoned inquiries automatically (no manual follow-up)',
  'Smart Remarketing Lists — build laser-targeted audiences based on visitor behavior',
  'Email & SMS Campaigns — deploy personalized recovery campaigns that convert',
  'ROI Dashboard — see exactly how much revenue you\'re recovering from lost traffic',
  'Platform Integration — syncs with your CRM, email platform, and ad accounts',
  'GDPR Compliant — first-party data only, fully compliant with privacy regulations',
]

const FAQS = [
  { q: 'Is Dapper IQ™ GDPR and privacy-compliant?', a: 'Yes. Dapper IQ™ is fully compliant with GDPR, CCPA, and other privacy regulations. We only use first-party data and anonymized tracking to identify visitors — no shady tactics, no privacy violations.' },
  { q: 'How is Dapper IQ different from Google Analytics?', a: 'Google Analytics tells you WHAT happened (page views, bounce rate, etc.). Dapper IQ tells you WHO visited and gives you the tools to bring them back. We turn anonymous traffic into identified leads you can actually market to.' },
  { q: 'Can Dapper IQ integrate with my existing tools?', a: 'Yes. Dapper IQ™ integrates with most major marketing platforms including Mailchimp, HubSpot, Salesforce, Klaviyo, and more. We sync your visitor data directly into your existing workflows.' },
  { q: 'What\'s the minimum traffic required to see results?', a: 'We recommend at least 3,000 monthly visitors to see meaningful ROI. For businesses with 10,000+ visitors per month, the results can be transformative.' },
  { q: 'How long does it take to set up?', a: 'Initial setup takes 1–2 weeks. Once installed, Dapper IQ™ starts identifying visitors immediately. Full campaign optimization typically takes 30 days to dial in.' },
]

export default function DapperIQ() {
  return (
    <>
      <PageHero
        eyebrow="Dapper IQ™"
        title="97% of Your Website Visitors Leave Without Buying. We Get Them Back."
        subtitle="Most businesses only convert 2–3% of their traffic. Dapper IQ™ identifies who visited your site, what they looked at, and how to bring them back — so you can turn lost traffic into found revenue."
        cta="Calculate Your ROI"
        ctaHref="https://bit.ly/dmsbookacall"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Stop losing 97% of your traffic.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00274c' }}>
            Comprehensive Data Solutions That Drive Measurable Results
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            You're paying for traffic that leaves without a trace. Dapper IQ™ gives you the intelligence to identify those visitors, recover lost leads automatically, and convert them with precision campaigns — all without adding more work to your plate.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20" style={{ background: '#efefef' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Core Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>Four Tools. One Unified Revenue Engine.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map((c, i) => (
              <div key={i} className="reveal bg-white rounded-xl p-8 shadow-md" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#00274c' }}>{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.body}</p>
                <ul className="space-y-1.5">
                  {c.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-bold flex-shrink-0" style={{ color: '#ffcb05' }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="py-20" style={{ background: '#00274c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">A Simple Three-Step Process. Powerful Results.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="reveal rounded-xl p-8 border border-white/10 bg-white/5 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-sm font-mono font-semibold mb-3" style={{ color: '#ffcb05' }}>Step {s.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Everything Included</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight" style={{ color: '#00274c' }}>
                What's Included in Dapper IQ™
              </h2>
              <ul className="space-y-3">
                {INCLUDED.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: '#ffcb05' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal delay-200 p-10 rounded-2xl text-center" style={{ background: '#00274c' }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Real Results</p>
              <div className="text-6xl font-extrabold text-white mb-1">15–30%</div>
              <p className="text-white/70 text-lg mb-8">of abandoned inquiries recovered automatically</p>
              <div className="border-t border-white/15 pt-8">
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  "Dapper IQ™ helped Scott's Golf Carts identify 24 qualified leads in 30 days — turning anonymous website traffic into real sales conversations."
                </p>
                <a
                  href="https://bit.ly/dmsbookacall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded text-base font-bold"
                  style={{ background: '#ffcb05', color: '#00274c' }}
                >
                  Get Your Free ROI Analysis →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#efefef' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>Common Questions About Dapper IQ™</h2>
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

      <CTA />
    </>
  )
}
