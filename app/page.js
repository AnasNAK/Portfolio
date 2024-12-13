import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Journey from './components/journey'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

