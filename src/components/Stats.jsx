import { useEffect, useRef, useState } from 'react'

const STATS = [
  {
    value: 97,
    suffix: '%',
    label: 'of website visitors leave without filling out a form or calling',
    sub: 'Every day without a system is money out the door',
  },
  {
    value: 70,
    suffix: '%',
    label: 'of golf cart buyers research online before visiting a dealership',
    sub: "Not showing up in search means you're invisible",
  },
  {
    value: 60,
    suffix: '%',
    label: 'revenue drop during slow season without systematic lead generation',
    prefix: 'up to ',
  },
  {
    value: 24,
    suffix: '',
    label: 'qualified leads in 30 days for Scott\'s Golf Carts',
    sub: "The Fairway Sales System™ works fast",
  },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({ stat, index, inView }) {
  const count = useCountUp(stat.value, 1600, inView)

  return (
    <div
      className="reveal text-center p-8 border border-gold/10 bg-navy/40 rounded-sm"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="stat-number text-6xl md:text-7xl font-display mb-3">
        {stat.prefix && <span className="text-4xl">{stat.prefix}</span>}
        {count}{stat.suffix}
      </div>
      <p className="text-white/60 text-sm leading-relaxed max-w-48 mx-auto">{stat.label}</p>
      {stat.sub && (
        <p className="text-gold/70 text-xs mt-2 italic">{stat.sub}</p>
      )}
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Trigger reveal animations
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 bg-navy-darkest texture-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-display uppercase text-white mb-4">
            Why Golf Cart Dealers Can't Afford to<br />
            <span className="text-gold">Ignore Data-Driven Marketing</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
