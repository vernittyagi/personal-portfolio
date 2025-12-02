import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import Skills from './components/Skills'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <div className='flex justify-center'>
        <Skills />
      </div>
      <ProjectSection />
      <div className='flex justify-center'>
        <CallToAction />
      </div>
      <Footer />
    </>
  )
}

export default App
