import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

const STEPS = [
  { step: '01', emoji: '🏌️', title: 'Drive — Attract', body: 'Build awareness and attract qualified buyers through targeted marketing strategies specific to the golf cart market. We put your dealership in front of buyers at the exact moment they\'re ready to shop.' },
  { step: '02', emoji: '🎯', title: 'Approach — Qualify', body: 'Capture contact information and separate serious buyers from browsers. Our system tracks what they\'re looking at, how often they return, and when they\'re ready to buy — so you\'re never wasting time chasing dead leads.' },
  { step: '03', emoji: '⛳', title: 'Putt — Convert', body: 'Engage prospects with personalized communication, automated follow-ups, and targeted offers that move them toward a purchase decision. Close high-value deals and optimize based on data insights for continuous improvement.' },
]

const BENEFITS = [
  { icon: '💰', title: 'Predictable Monthly Revenue', body: 'Stop relying on walk-ins and referrals. The Fairway Sales System™ creates a consistent pipeline of qualified leads so you know what to expect each month — even in the off-season.' },
  { icon: '🤖', title: 'Automated Lead Nurturing', body: 'Personalized email sequences that build trust and stay top-of-mind without manual work. Your marketing runs 24/7 whether you\'re on the lot or on the golf course.' },
  { icon: '❄️', title: 'Built for Seasonal Businesses', body: 'Golf cart sales have peaks and valleys. Our system front-loads your pipeline before slow season so you\'re never scrambling. Consistent leads all year, not just spring.' },
  { icon: '👁️', title: 'Complete Transparency', body: 'Track every lead, every conversion, and every dollar of revenue generated. No black box reporting — just clear numbers tied directly to what the system is doing for your business.' },
]

const INCLUDED = [
  'Multi-Touch Attribution — track every interaction across the buyer\'s journey',
  'Smart Lead Scoring — prioritize prospects based on engagement and fit',
  'Automated Nurturing — personalized email sequences that build trust',
  'Lead Qualification System — separate buyers from browsers automatically',
  'Automated Follow-Up — no lead falls through the cracks',
  'Seasonal Campaign Management — front-load your pipeline before slow season',
  'Customer Database Management — organized, searchable, always up to date',
  'ROI Dashboard — see exactly what your marketing is generating',
]

export default function Fairway() {
  return (
    <>
      <PageHero
        eyebrow="Fairway Sales System™"
        title="The System That Turns Browsers Into Buyers — Built for Golf Cart Dealerships"
        subtitle="Tired of relying on walk-ins and hoping for referrals? The Fairway Sales System™ gives you a repeatable process to attract qualified buyers, nurture leads automatically, and close deals consistently — even when it's slow."
        cta="Get Your Free Dealership Analysis"
        ctaHref="https://bit.ly/dmsbookacall"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Stop gambling on walk-ins.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00274c' }}>
            A Complete Marketing System Built for Your Success
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            The Fairway Sales System™ handles everything from attracting buyers to closing deals — so you can focus on running your dealership, not managing marketing chaos. No more guessing. Just a proven playbook that delivers 5–10 new sales every month.
          </p>
        </div>
      </section>

      {/* 3 steps */}
      <section className="py-20" style={{ background: '#00274c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Three Steps. One System. Consistent Sales.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="reveal rounded-xl p-8 border border-white/10 bg-white/5 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl mb-4">{s.emoji}</div>
                <div className="text-sm font-mono font-semibold mb-2" style={{ color: '#ffcb05' }}>Step {s.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ background: '#efefef' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Core Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>Why This System Works for Golf Cart Dealers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <div key={i} className="reveal bg-white rounded-xl p-7 shadow-md" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold mb-3" style={{ color: '#00274c' }}>{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Everything in the Box</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight" style={{ color: '#00274c' }}>
                What's Included in the Fairway Sales System™
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
              <div className="text-7xl font-extrabold text-white mb-2">24</div>
              <p className="text-white/70 text-lg mb-8">Qualified leads in 30 days for Scott's Golf Carts</p>
              <div className="border-t border-white/15 pt-8">
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  "The Fairway Sales System™ isn't a marketing promise — it's a proven playbook that golf cart dealerships are using right now to generate consistent, predictable revenue."
                </p>
                <a
                  href="https://bit.ly/dmsbookacall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded text-base font-bold"
                  style={{ background: '#ffcb05', color: '#00274c' }}
                >
                  Get Your Free Dealership Analysis →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
