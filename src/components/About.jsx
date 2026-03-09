import { useEffect, useRef, useState } from 'react'

const ACCORDION_ITEMS = [
  {
    title: 'Performance-Based Approach',
    content:
      "We don't get paid to \"try things.\" Every system we build is designed to deliver predictable, measurable results. You'll know exactly what's working, what's not, and how much profit your marketing is generating.",
  },
  {
    title: 'Proprietary Systems, Not Generic Services',
    content:
      "The Fairway Sales System™ and Dapper IQ™ aren't off-the-shelf tools. They're engineered specifically to solve the problems other agencies ignore: recovering lost traffic, automating follow-up, and turning browsers into buyers.",
  },
  {
    title: 'Built for Business Owners, Not Marketers',
    content:
      "You didn't start your business to become a marketing expert. We handle the strategy, automation, and optimization so you can focus on what you do best: running your dealership and closing deals. No jargon. No confusion. Just clear results you can see on the books.",
  },
]

export default function About() {
  const ref = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)

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

  return (
    <section id="about" ref={ref} className="relative py-28 bg-navy overflow-hidden">
      {/* Diagonal background accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, transparent, #ffcb05)',
          clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: copy */}
          <div>
            <div className="gold-line" />
            <h2 className="reveal text-5xl md:text-6xl font-display uppercase leading-none mb-8">
              Built for Dealers Who Are<br />
              <span className="text-gold">Done Wasting Money</span><br />
              on Marketing
            </h2>
            <p className="reveal delay-200 text-white/65 leading-relaxed mb-6 font-body text-lg">
              Dapper Market Solutions specializes in one thing: turning golf cart dealerships into sales machines. While other agencies chase every industry that walks through the door, we've built proprietary systems specifically for dealers who are tired of inconsistent sales, wasted ad spend, and marketing "experts" who've never sold a cart in their life.
            </p>
            <p className="reveal delay-300 text-white/65 leading-relaxed mb-10 font-body">
              From the Fairway Sales System™ to Dapper IQ™, every tool we've built solves the exact challenges golf cart dealers face: seasonal slumps, long buying cycles, and leads that ghost you after the demo drive. We're a Michigan-based company in South Lyon, but we work with dealerships nationwide who are ready to stop guessing and start growing.
            </p>

            {/* Quick facts */}
            <div className="reveal delay-400 grid grid-cols-2 gap-4">
              {[
                { label: 'Based in', value: 'South Lyon, MI' },
                { label: 'Clients', value: 'Nationwide' },
                { label: 'Specialization', value: 'Golf Cart Dealerships' },
                { label: 'Approach', value: 'Performance-Based' },
              ].map(item => (
                <div key={item.label} className="border border-gold/15 p-4 bg-navy-deep/40 rounded-sm">
                  <div className="text-gold/60 text-xs uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-white font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            <div className="reveal delay-200">
              <p className="text-gold font-mono text-xs tracking-widest uppercase mb-6">
                — Why Choose Us
              </p>
              <div className="space-y-0">
                {ACCORDION_ITEMS.map((item, i) => (
                  <div key={i} className="accordion-item">
                    <button
                      className="w-full flex items-center justify-between py-6 text-left group"
                      onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className="text-2xl font-display font-700"
                          style={{
                            WebkitTextStroke: '1px rgba(255,203,5,0.4)',
                            color: openIndex === i ? '#ffcb05' : 'transparent',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          0{i + 1}
                        </span>
                        <span className={`text-xl font-display uppercase transition-colors ${openIndex === i ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                          {item.title}
                        </span>
                      </span>
                      <span className={`text-gold transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                    <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                      <p className="text-white/60 leading-relaxed pb-6 pr-8 font-body">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA box */}
            <div className="reveal delay-400 mt-10 p-8 border border-gold/20 bg-navy-deep/60 rounded-sm">
              <p className="text-white/70 mb-4 font-body">
                Ready to see what a purpose-built system can do for your dealership?
              </p>
              <a
                href="https://bit.ly/dmsbookacall"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3 rounded-sm text-sm inline-block"
              >
                Book Your Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
