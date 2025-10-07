import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe.Jsx'

function App() {
  return (
    <>
      <div className="wrapper flex flex-col justify-center items-center p-4">
        <Hero />
        <AboutMe />
      </div>
    </>
  )
}

export default App
