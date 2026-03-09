import { useEffect, useRef } from 'react'

export default function Guide() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-20 bg-gold overflow-hidden">
      {/* Dark diagonal accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/5 bg-navy-deep/90 hidden md:block"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-navy-deep text-gold text-xs font-mono uppercase tracking-widest px-3 py-1 mb-4">
              Free Resource
            </span>
            <h2 className="reveal text-4xl md:text-5xl font-display uppercase text-navy-deep leading-none mb-4">
              The Fairway Sales Playbook
            </h2>
            <p className="reveal delay-100 text-navy-deep/70 text-lg font-body">
              How to Generate 5–10 New Sales Per Month — even during the slow season. The exact playbook we use with our dealership clients.
            </p>
          </div>
          <div className="reveal delay-200 flex-shrink-0">
            <a
              href="#contact"
              className="inline-block bg-navy-deep text-gold font-display uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-navy transition-colors text-sm"
            >
              Get the Free Playbook →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
