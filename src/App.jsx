import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 py-8 pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
    </div>
  )
}

export default App