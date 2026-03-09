import { useState } from 'react'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dealership: '' })
  const [done, setDone] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <section id="contact" className="py-20" style={{ background: '#00274c' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>
              Get Your Free Marketing Strategy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Stop Guessing and Start Growing?
            </h2>
            <p className="text-white/65 leading-relaxed mb-8">
              Get your free dealership marketing analysis. We'll show you exactly where you're losing customers, how much revenue you're leaving on the table, and what a purpose-built system would do for your bottom line.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Free 30-minute strategy call with a dealership marketing specialist',
                'Custom analysis of your current online presence and lead flow',
                'Specific recommendations for your market and inventory mix',
                'No obligation — just clarity on what\'s possible',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="font-bold mt-0.5" style={{ color: '#ffcb05' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://bit.ly/dmsbookacall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded text-base font-bold transition-all hover:-translate-y-0.5"
              style={{ background: '#ffcb05', color: '#00274c' }}
            >
              Book a Call Directly →
            </a>

            <div className="mt-10 pt-8 border-t border-white/10 space-y-3">
              <a href="tel:2484948450" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <svg className="w-5 h-5" style={{ color: '#ffcb05' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                (248) 494-8450
              </a>
              <a href="mailto:info@dapperms.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <svg className="w-5 h-5" style={{ color: '#ffcb05' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@dapperms.com
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-xl p-8">
            {done ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4" style={{ color: '#ffcb05' }}>✓</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#00274c' }}>You're In!</h3>
                <p className="text-gray-500">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#00274c' }}>Get Your Free Analysis</h3>
                <p className="text-gray-400 text-sm mb-6">No obligation. No spam. Just answers.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: 'name', label: 'Your Name *', placeholder: 'John Smith', required: true },
                    { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@dealership.com', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 000-0000' },
                    { name: 'dealership', label: 'Dealership Name', placeholder: "Scott's Golf Carts" },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-gray-500">{f.label}</label>
                      <input
                        type={f.type || 'text'}
                        name={f.name}
                        value={form[f.name]}
                        onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="w-full px-4 py-3 rounded border text-sm focus:outline-none transition-colors"
                        style={{ borderColor: '#d1d5db', color: '#00274c' }}
                        onFocus={e => e.target.style.borderColor = '#ffcb05'}
                        onBlur={e => e.target.style.borderColor = '#d1d5db'}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full py-4 rounded text-base font-bold transition-all hover:-translate-y-0.5 mt-2"
                    style={{ background: '#ffcb05', color: '#00274c' }}
                  >
                    Get My Free Marketing Analysis
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
