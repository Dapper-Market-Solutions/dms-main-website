import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

const CASE_STUDIES = [
  {
    client: "Scott's Golf Carts",
    industry: 'Golf Cart Dealership',
    service: 'Fairway Sales System™',
    serviceColor: '#ffcb05',
    headline: '24 Qualified Leads in 30 Days',
    stats: [
      { value: '24', label: 'Qualified Leads', period: 'in 30 days' },
      { value: '5', label: 'New Sales', period: 'from the pipeline' },
      { value: '30', label: 'Days', period: 'to see results' },
    ],
    summary: 'Scott\'s Golf Carts was relying on walk-ins and word of mouth. The Fairway Sales System™ changed that — combining Dapper IQ™ and Dapper ID™ to identify and target high-intent buyers, a built-in CRM to manage the pipeline, and automated email and text sequences that nurture leads without any manual work. 24 qualified opportunities in the first month.',
    tags: ['Dapper IQ™', 'Dapper ID™', 'CRM', 'Email & SMS Automation'],
  },
  {
    client: 'Aura Health and Spa',
    industry: 'Wellness & Medical Aesthetics',
    service: 'Full Digital Strategy',
    serviceColor: '#00274c',
    headline: '300%+ Impression Growth in 5 Months',
    stats: [
      { value: '300%+', label: 'Impression Growth', period: 'in under 5 months' },
      { value: '↓', label: 'Paid Media Spend', period: 'reduced significantly' },
      { value: '#1', label: 'Local Search', period: 'dominating their market' },
    ],
    summary: 'Aura Health and Spa was burning budget on paid ads with inconsistent results. We rebuilt their website from scratch, grew their Google presence by 300%+ in 5 months, and layered in Dapper IQ™ and Dapper ID™ high-intent consumer data to power their ad targeting — driving great results across every channel.',
    tags: ['Website Design', 'SEO', 'Dapper IQ™', 'Dapper ID™'],
  },
  {
    client: 'EverNew Roofing',
    industry: 'Roofing & Home Services',
    service: 'SEO + Display Advertising',
    serviceColor: '#00274c',
    headline: '36 New Quotes in 6 Weeks',
    stats: [
      { value: '16K+', label: 'Monthly Impressions', period: 'in 5 months' },
      { value: '2,600+', label: 'Users', period: 'reached per month' },
      { value: '36', label: 'New Quotes', period: 'in just 6 weeks' },
    ],
    summary: 'EverNew Roofing launched with zero online presence. In 5 months we built them to 16,000+ monthly impressions and 2,600+ users. A targeted display campaign then generated 36 qualified quote requests in only 6 weeks — a strong foundation for long-term growth.',
    tags: ['SEO', 'Display Advertising', 'Lead Generation'],
  },
  {
    client: 'Moke America — Virginia Beach',
    industry: 'Golf Cart Dealership',
    service: 'Dapper IQ™ + Dapper ID™',
    serviceColor: '#ffcb05',
    headline: '1,000 Leads. One Week. Zero Ad Spend.',
    stats: [
      { value: '1,000', label: 'Leads Identified', period: 'via Dapper ID™' },
      { value: '1 week', label: 'To Fill the Pipeline', period: 'from day one' },
      { value: '5+', label: 'Sales Closed', period: 'in the first week' },
    ],
    summary: 'This owner didn\'t need someone to run his ads — he needed more leads. He already had a proven sales process that closed deals. We plugged Dapper IQ™ and Dapper ID™ directly into it, identifying 1,000 high-intent prospects in a single week. His team took it from there.',
    tags: ['Dapper IQ™', 'Dapper ID™', 'Outbound System Integration'],
  },
  {
    client: 'Golf Cart World',
    industry: 'Golf Cart Dealership',
    service: 'Fairway Sales System™',
    serviceColor: '#ffcb05',
    headline: 'Consistent Pipeline. Year-Round.',
    stats: [
      { value: '↑', label: 'Qualified Leads', period: 'month over month' },
      { value: '↑', label: 'Deals Closed', period: 'from the pipeline' },
      { value: '↓', label: 'Walk-In Dependency', period: 'systematic lead gen' },
    ],
    summary: 'Golf Cart World came to us relying on seasonal foot traffic and hoping the phones would ring. The Fairway Sales System™ gave them a repeatable engine for attracting qualified buyers, nurturing them automatically, and closing deals consistently — even in the off-season.',
    tags: ['Fairway Sales System™', 'Lead Generation', 'Email Automation'],
  },
  {
    client: 'Medical Supply Company',
    industry: 'Medical Supply (14+ Locations)',
    service: 'SEO',
    serviceColor: '#00274c',
    headline: '2× Sales Increase Across 14 Locations',
    stats: [
      { value: '2×', label: 'Sales Increase', period: 'company-wide' },
      { value: '59%', label: 'More Traffic', period: 'in organic visits' },
      { value: '14+', label: 'Locations', period: 'unified strategy' },
    ],
    summary: 'With 14+ locations and no cohesive digital strategy, this medical supply brand was leaving significant revenue on the table. We cut through the noise with a unified digital approach that doubled sales and drove 59% more qualified traffic across every location.',
    tags: ['SEO'],
  },
  {
    client: 'Memory Lane Assisted Living',
    industry: 'Senior Living',
    service: 'Website + Reputation + SEO',
    serviceColor: '#00274c',
    headline: 'From 40% Occupancy to a Waitlist',
    stats: [
      { value: '40%', label: 'Starting Occupancy', period: 'when we started' },
      { value: '15%', label: 'Revenue Saved', period: 'from referral portals' },
      { value: '↑', label: 'Inquiries', period: 'from working lead forms' },
    ],
    summary: 'New owners inherited a dated website, broken inquiry forms, a damaged online reputation, and just 40% occupancy — while referral portals claimed 15% of revenue. We rebuilt everything from the ground up and turned it into a community with a real waitlist.',
    tags: ['Website Redesign', 'Reputation Management', 'SEO'],
  },
  {
    client: 'Pine Haven Assisted Living',
    industry: 'Senior Living',
    service: 'Website + Lead Generation',
    serviceColor: '#00274c',
    headline: 'Empty Rooms Turned Into a Full House',
    stats: [
      { value: '↑', label: 'Online Visibility', period: 'from nearly zero' },
      { value: '↑', label: 'Inquiry Volume', period: 'month over month' },
      { value: '↓', label: 'Empty Rooms', period: 'costing thousands/month' },
    ],
    summary: 'Pine Haven\'s website was outdated, hard to navigate, and nearly invisible online. Inquiries were rare, and empty rooms were costing thousands each month. Their previous marketing vendor offered little transparency or measurable results. We fixed all of it.',
    tags: ['Website Redesign', 'SEO', 'Lead Generation'],
  },
]

export default function Results() {
  return (
    <>
      <PageHero
        eyebrow="Client Results"
        title="Real Results. Real Growth."
        subtitle="These are more than case studies — they're proof that modern marketing works when guided by insight, not guesswork. Powered by AI. Proven by performance."
        cta="Get Results Like These"
        ctaHref="https://bit.ly/dmsbookacall"
      />

      {/* Intro stats bar */}
      <section className="py-14" style={{ background: '#ffcb05' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '7+', label: 'Client Success Stories' },
              { value: '300%+', label: 'Max Impression Growth' },
              { value: '2×', label: 'Sales Doubled (Med Supply)' },
              { value: '36', label: 'Quotes in 6 Weeks (Roofing)' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold" style={{ color: '#00274c' }}>{s.value}</div>
                <p className="text-sm font-medium mt-1" style={{ color: '#00274c', opacity: 0.7 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="py-20" style={{ background: '#efefef' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs, i) => (
              <div
                key={i}
                className="reveal bg-white rounded-2xl overflow-hidden shadow-md"
                style={{ transitionDelay: `${(i % 2) * 100}ms` }}
              >
                {/* Card header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#ffcb05' }}>{cs.industry}</p>
                      <h3 className="text-xl font-bold" style={{ color: '#00274c' }}>{cs.client}</h3>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#00274c', color: '#ffcb05' }}>
                      {cs.service}
                    </span>
                  </div>
                  <h4 className="text-2xl font-extrabold mb-4" style={{ color: '#00274c' }}>{cs.headline}</h4>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x mx-6 mb-5 rounded-xl overflow-hidden border border-gray-100">
                  {cs.stats.map((stat, j) => (
                    <div key={j} className="py-4 px-3 text-center" style={{ background: '#f8f8f8' }}>
                      <div className="text-2xl font-extrabold leading-none mb-1" style={{ color: '#00274c' }}>{stat.value}</div>
                      <div className="text-xs font-semibold text-gray-600">{stat.label}</div>
                      <div className="text-xs text-gray-400">{stat.period}</div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="px-6 pb-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{cs.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-medium px-3 py-1 rounded-full border" style={{ borderColor: '#e5e7eb', color: '#6b7280' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>What Clients Say</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>Straight From Our Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { quote: "Dapper Market Solutions revamped my website and has vastly improved my business awareness.", name: 'Morgan Merrill', company: 'Uplift Image Aesthetics & Weight Loss' },
              { quote: "Very knowledgeable business man. Hard working. I am 100% sure he will show you what's appropriate for your business.", name: 'Ratna Pasricha', company: 'Perfect Impressions Graphic Solutions' },
            ].map((r, i) => (
              <div key={i} className="reveal rounded-2xl p-8" style={{ background: '#00274c', transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="#ffcb05" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{r.quote}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{r.name}</p>
                  <p className="text-white/50 text-xs">{r.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
