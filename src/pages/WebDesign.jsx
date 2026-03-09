import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

const BENEFITS = [
  { icon: '📣', title: 'Boost Brand Awareness', body: 'Create a positive first impression and showcase who you are as a company. Your website is the first thing buyers see — make it count.' },
  { icon: '✅', title: 'Enhance Credibility', body: 'Present a polished, professional appearance that reflects your commitment to quality and earns trust before a buyer ever picks up the phone.' },
  { icon: '📈', title: 'Increase Conversion Rates', body: 'Encourage user engagement with easy navigation and clear calls to action — so visitors become leads and leads become customers.' },
  { icon: '🔄', title: 'Stay Relevant', body: 'Keep your online presence aligned with your audience\'s expectations and industry trends. A modern site signals a modern, trustworthy business.' },
]

const PROCESS = [
  { step: '01', title: 'Discovery', body: 'We learn your brand, your customers, your market, and your goals. No templates — every site starts with a strategy tailored to your dealership.' },
  { step: '02', title: 'Design', body: 'Custom design that reflects your brand identity. Clean, conversion-focused layouts built to guide visitors toward contacting you or submitting a lead.' },
  { step: '03', title: 'Development', body: 'Fast, mobile-first development. Your site loads quickly on any device and is built to rank in local search from day one.' },
  { step: '04', title: 'Launch & Optimize', body: 'We launch, monitor performance, and keep improving. Your site is never set-and-forget — it\'s a living, optimizing sales tool.' },
]

const FAQS = [
  { q: 'Do I need a website or just a landing page?', a: 'For a golf cart dealership, a full website is essential — it builds trust, showcases inventory, and captures leads across multiple touch points. A landing page is great for specific campaigns but can\'t replace a full site.' },
  { q: 'What is website marketing?', a: 'Website marketing combines SEO, conversion optimization, and lead capture to make your site actively generate customers — not just sit there looking pretty.' },
  { q: "What's the difference between a professionally crafted website and one I've created myself?", a: 'Speed, SEO, mobile performance, and conversion rate. A professionally built site is engineered to rank, load fast, and turn visitors into leads. DIY tools often sacrifice all three.' },
]

export default function WebDesign() {
  return (
    <>
      <PageHero
        eyebrow="Website Design & Development"
        title="Websites That Actually Sell"
        subtitle="Your website shouldn't be a digital brochure — it should be a 24/7 salesperson. We build high-converting sites designed to capture leads, showcase inventory, and close deals while you sleep."
        cta="Schedule a Free Quote"
        ctaHref="https://bit.ly/dmsbookacall"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Elevate the User Experience</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: '#00274c' }}>
                Comprehensive Website Design for Lead Generation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                You've worked hard to create a thriving business — hiring like-minded professionals, establishing client relationships, and managing every intricate detail. But when your website doesn't align with the business you conduct daily, customers become confused and uninterested.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                With Dapper Market Solutions, your website reflects your brand through engaging design and development. Using persuasive writing and clean architecture, we drive customers to take action.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our professional website design services will let customers know that your business is professional, knowledgeable, and more than capable of meeting their needs.
              </p>
            </div>
            <div className="reveal delay-200 grid grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <div key={i} className="p-6 rounded-xl shadow-md bg-white" style={{ border: '1px solid #e5e7eb' }}>
                  <div className="text-2xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#00274c' }}>{b.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: '#00274c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Innovative Approaches to Website Development</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p, i) => (
              <div key={i} className="reveal bg-white/5 rounded-xl p-7 border border-white/10" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-4xl font-extrabold mb-4" style={{ color: 'rgba(255,203,5,0.3)' }}>{p.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20" style={{ background: '#efefef' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>What's Included</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>Maximize Your Impact Through Website Design</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Custom Design', items: ['Brand-aligned visual identity', 'Unique layouts (no templates)', 'Conversion-optimized structure', 'Professional copywriting support'] },
              { title: 'Mobile-First Development', items: ['Responsive on all devices', 'Fast load times (Core Web Vitals)', 'Seamless user navigation', 'ADA accessibility standards'] },
              { title: 'SEO & Lead Generation', items: ['Local SEO optimization', 'Google Business integration', 'Lead capture forms', 'Analytics & tracking setup'] },
            ].map((col, i) => (
              <div key={i} className="reveal bg-white rounded-xl p-7 shadow-md" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#00274c' }}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="font-bold mt-0.5" style={{ color: '#ffcb05' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>FAQ</p>
            <h2 className="text-3xl font-bold" style={{ color: '#00274c' }}>Frequently Asked Website Design Questions</h2>
          </div>
          <div className="space-y-5">
            {FAQS.map((faq, i) => (
              <div key={i} className="reveal p-6 rounded-xl bg-white shadow-md" style={{ border: '1px solid #e5e7eb', transitionDelay: `${i * 80}ms` }}>
                <h3 className="font-bold mb-3" style={{ color: '#00274c' }}>{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
