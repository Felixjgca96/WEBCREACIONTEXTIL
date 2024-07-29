import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import ButtonWa from './components/ButtonWa'
import Hero from './components/Hero'
import Services from './components/Services'
import CarruselProductos from "./components/CarruselProductos";
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <CarruselProductos/>
      <ButtonWa/>
      <Footer/>


    </>
  )
}

export default App

