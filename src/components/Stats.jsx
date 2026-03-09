import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 97, suffix: '%', label: 'Of website visitors leave without filling out a form or calling—losing you sales every single day' },
  { value: 70, suffix: '%', label: 'Of golf cart buyers research online before visiting a dealership—if you\'re not showing up in search, you\'re invisible' },
  { value: '40-60', suffix: '%', label: 'Revenue drop during slow season for dealers without a systematic lead generation system', static: true },
  { value: 24, suffix: '', label: "Qualified leads generated in 30 days for Scott's Golf Carts—proving the Fairway Sales System™ works fast" },
]

function useCountUp(target, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start || typeof target !== 'number') return
    let startTime = null
    const step = ts => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / 1800, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, start])
  return count
}

function StatCard({ stat, inView, delay }) {
  const count = useCountUp(stat.static ? 0 : stat.value, inView)

  return (
    <div
      className="reveal bg-white rounded-md p-7 text-center shadow-lg"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl font-bold mb-3 leading-none" style={{ color: '#00274c' }}>
        {stat.static ? stat.value : count}{stat.suffix}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{stat.label}</p>
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
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20" style={{ background: '#efefef' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>
            The Facts
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>
            Why Golf Cart Dealers Can't Afford to Ignore{' '}
            <strong>Data-Driven Marketing</strong>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} inView={inView} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
