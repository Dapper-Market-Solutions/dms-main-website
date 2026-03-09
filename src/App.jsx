import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Guide from './components/Guide'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Global reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    targets.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Guide />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
