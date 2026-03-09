import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Websites', href: '/services/web-design' },
  { label: 'Fairway Sales System™', href: '/services/fairwaysalessystem' },
  { label: 'Dapper IQ™', href: 'https://iq.dapperms.com', external: true },
  { label: 'Dapper ID™', href: 'https://id.dapperms.com', external: true },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? '#00274c' : 'transparent',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.25)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://dapperms.com/wp-content/uploads/2024/07/DMS-Logo-White.png"
            alt="Dapper Market Solutions"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map(link => {
            const active = !link.external && location.pathname === link.href
            const style = { color: active ? '#ffcb05' : 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }
            const className = "text-sm font-medium transition-colors"
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={style}
                onMouseEnter={e => e.target.style.color = '#ffcb05'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={className}
                style={style}
                onMouseEnter={e => e.target.style.color = '#ffcb05'}
                onMouseLeave={e => e.target.style.color = active ? '#ffcb05' : 'rgba(255,255,255,0.8)'}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href="https://bit.ly/dmsbookacall"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block px-5 py-2.5 rounded text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-px"
          style={{ background: '#ffcb05', color: '#00274c' }}
        >
          Call Today (248) 494-8450
        </a>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-white my-1.5 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ background: '#001a33' }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV.map(link => link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
              className="text-white/80 hover:text-white py-1 text-sm font-medium">
              {link.label}
            </a>
          ) : (
            <Link key={link.href} to={link.href}
              className="text-white/80 hover:text-white py-1 text-sm font-medium">
              {link.label}
            </Link>
          ))}
          <a href="https://bit.ly/dmsbookacall" target="_blank" rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded text-sm font-bold text-center mt-1"
            style={{ background: '#ffcb05', color: '#00274c' }}>
            Book a Call
          </a>
        </div>
      </div>
    </header>
  )
}
