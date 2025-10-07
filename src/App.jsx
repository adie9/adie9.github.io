import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe.Jsx'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className="wrapper flex flex-col justify-center items-center gap-6 p-4">
        <Hero />
        <AboutMe />
        <Contact />
      </div>
    </>
  )
}

export default App
