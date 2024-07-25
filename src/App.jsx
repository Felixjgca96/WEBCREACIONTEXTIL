import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import ButtonWa from './components/ButtonWa'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {

  return (
    <>
      <Navbar/>
        <Hero/>
        <Services/>
        <Hero/>
        <Hero/>
        <Hero/>
      <ButtonWa/>
      
    </>
  )
}

export default App

