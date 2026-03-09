export default function TopBar() {
  return (
    <div style={{ background: '#ffcb05' }} className="py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm font-semibold" style={{ color: '#00274c' }}>
          <a href="tel:2484948450" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            (248) 494-8450
          </a>
          <span className="hidden md:inline">·</span>
          <a href="mailto:info@dapperms.com" className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity">
            info@dapperms.com
          </a>
        </div>
        <span className="hidden md:block text-sm font-medium" style={{ color: '#00274c' }}>
          Mon–Fri 9AM–5PM EST · South Lyon, MI
        </span>
      </div>
    </div>
  )
}
