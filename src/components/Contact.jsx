import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', dealership: '', message: '' })

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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // In production, wire to a form endpoint or n8n webhook
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="relative py-28 bg-navy-darkest overflow-hidden">
      {/* Geometric bg */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse at left, #ffcb05 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left: copy */}
          <div>
            <div className="gold-line" />
            <h2 className="reveal text-5xl md:text-6xl font-display uppercase leading-none mb-6">
              Ready to Stop Guessing<br />
              and Start <span className="text-gold">Growing?</span>
            </h2>
            <p className="reveal delay-200 text-white/60 text-lg leading-relaxed mb-10 font-body">
              Get your free dealership marketing analysis. We'll show you exactly where you're losing customers, how much revenue you're leaving on the table, and what a purpose-built system would do for your bottom line.
            </p>

            {/* What you get */}
            <div className="reveal delay-300 space-y-4 mb-10">
              {[
                'Free 30-minute strategy call with a dealership marketing specialist',
                'Custom analysis of your current online presence and lead flow',
                'Specific recommendations for your market and inventory mix',
                'No obligation — just clarity on what\'s possible',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold text-lg mt-0.5">✓</span>
                  <span className="text-white/70 font-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Book call CTA */}
            <div className="reveal delay-400">
              <a
                href="https://bit.ly/dmsbookacall"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold animate-gold-pulse px-8 py-4 rounded-sm text-base inline-block"
              >
                Book a Call Directly →
              </a>
              <p className="text-white/30 text-sm mt-4 font-body">
                Or fill out the form and we'll reach out within one business day.
              </p>
            </div>

            {/* Contact info */}
            <div className="reveal delay-500 mt-12 pt-10 border-t border-white/10 space-y-3">
              <a href="tel:2484948450" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors group">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                (248) 494-8450
              </a>
              <a href="mailto:info@dapperms.com" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors group">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                info@dapperms.com
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                South Lyon, MI 48178
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal delay-200">
            <div className="border border-gold/15 bg-navy/60 rounded-sm p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-gold text-5xl mb-6">✓</div>
                  <h3 className="text-3xl font-display uppercase text-white mb-3">You're In!</h3>
                  <p className="text-white/60 font-body">
                    We'll be in touch within one business day to schedule your free marketing analysis.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-display uppercase text-white mb-2">Get Your Free Analysis</h3>
                  <p className="text-white/40 text-sm mb-8 font-body">No obligation. No spam. Just answers.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Smith', required: true },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@dealership.com', required: true },
                      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 000-0000' },
                      { name: 'dealership', label: 'Dealership Name', type: 'text', placeholder: "Scott's Golf Carts" },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                          {field.label}{field.required && ' *'}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full bg-navy-deep border border-gold/15 text-white placeholder-white/25 px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50 transition-colors font-body"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                        What's your biggest marketing challenge?
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="E.g. slow season leads, website traffic, closing rate..."
                        className="w-full bg-navy-deep border border-gold/15 text-white placeholder-white/25 px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50 transition-colors resize-none font-body"
                      />
                    </div>

                    <button type="submit" className="btn-gold w-full px-8 py-4 rounded-sm text-base mt-2">
                      Get My Free Marketing Analysis
                    </button>
                    <p className="text-white/25 text-xs text-center font-body">
                      By submitting, you agree to be contacted by Dapper Market Solutions.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
