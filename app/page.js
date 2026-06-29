import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}