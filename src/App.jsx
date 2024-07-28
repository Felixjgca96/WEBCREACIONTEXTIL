import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import ButtonWa from './components/ButtonWa'
import Hero from './components/Hero'
import Services from './components/Services'
import CarruselProductos from "./components/CarruselProductos";


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <CarruselProductos/>
      <ButtonWa/>
      <Hero/>

      <Hero/>
      <Hero/>
      <Hero/>

    </>
  )
}

export default App

