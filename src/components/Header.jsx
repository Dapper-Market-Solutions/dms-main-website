import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fairway Sales System™', href: '#fairway' },
  { label: 'Dapper IQ™', href: '#dapper-iq' },
  { label: 'Paid Search', href: '#paid-search' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-navy-deep/98 backdrop-blur-md shadow-2xl py-3 border-b border-gold/10'
          : 'bg-transparent py-5'
      }`}
      style={{ top: scrolled ? 0 : '36px' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="https://dapperms.com/wp-content/uploads/2024/07/DMS-Logo-White.png"
            alt="Dapper Market Solutions"
            className="h-10 w-auto transition-opacity group-hover:opacity-80"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://bit.ly/dmsbookacall"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-3 rounded-sm text-sm"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-navy-deep border-t border-gold/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-gold transition-colors py-2 border-b border-white/5 font-medium uppercase tracking-widest text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://bit.ly/dmsbookacall"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-3 rounded-sm text-sm text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  )
}
