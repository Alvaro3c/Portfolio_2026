import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Curriculum from './components/Curriculum'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Curriculum />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
