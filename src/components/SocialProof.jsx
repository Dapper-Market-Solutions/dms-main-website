import { Link } from 'react-router-dom'

const WINS = [
  { value: '24', suffix: '', label: 'Qualified leads in 30 days', client: "Scott's Golf Carts", tag: 'Fairway Sales System™' },
  { value: '300', suffix: '%+', label: 'Impression growth in 5 months', client: 'Aura Health & Spa', tag: 'SEO' },
  { value: '2×', suffix: '', label: 'Sales increase across 14 locations', client: 'Medical Supply Co.', tag: 'Full Digital Strategy' },
  { value: '36', suffix: '', label: 'New quotes in just 6 weeks', client: 'EverNew Roofing', tag: 'Display Advertising' },
]

const REVIEWS = [
  { quote: "Dapper Market Solutions revamped my website and has vastly improved my business awareness.", name: 'Morgan Merrill', company: 'Uplift Image Aesthetics' },
  { quote: "Very knowledgeable. Hard working. I am 100% sure he will show you what's appropriate for your business.", name: 'Ratna Pasricha', company: 'Perfect Impressions Graphic Solutions' },
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Proven Results</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>Numbers Don't Lie</h2>
        </div>

        {/* Win cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {WINS.map((w, i) => (
            <div
              key={i}
              className="reveal rounded-2xl p-7 text-center border border-gray-100 shadow-sm"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-5xl font-extrabold leading-none mb-2" style={{ color: '#00274c' }}>
                {w.value}{w.suffix}
              </div>
              <p className="text-gray-500 text-sm leading-snug mb-3">{w.label}</p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs font-bold" style={{ color: '#00274c' }}>{w.client}</p>
                <span className="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: '#ffcb05', color: '#00274c' }}>{w.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {REVIEWS.map((r, i) => (
            <div key={i} className="reveal rounded-2xl p-7" style={{ background: '#00274c', transitionDelay: `${i * 100}ms` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4" fill="#ffcb05" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5 italic">"{r.quote}"</p>
              <div>
                <p className="font-bold text-white text-sm">{r.name}</p>
                <p className="text-white/50 text-xs">{r.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full results */}
        <div className="text-center reveal">
          <Link
            to="/results"
            className="inline-block px-8 py-4 rounded text-base font-bold transition-all hover:-translate-y-0.5"
            style={{ background: '#00274c', color: '#ffcb05' }}
          >
            View All Case Studies →
          </Link>
        </div>

      </div>
    </section>
  )
}
