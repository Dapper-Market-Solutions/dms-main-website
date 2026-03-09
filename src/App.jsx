import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import WebDesign from './pages/WebDesign'
import Fairway from './pages/Fairway'
import DapperIQ from './pages/DapperIQ'
import DapperID from './pages/DapperID'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageWrapper({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    // Small delay to let DOM settle after route change
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible')
        observer.observe(el)
      })
    }, 50)
    return () => { clearTimeout(timer); observer.disconnect() }
  })
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <TopBar />
        <Header />
        <main>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/web-design" element={<WebDesign />} />
              <Route path="/services/fairwaysalessystem" element={<Fairway />} />
              <Route path="/services/dapper-iq" element={<DapperIQ />} />
              <Route path="/dapper-id" element={<DapperID />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
