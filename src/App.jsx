import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import ButtonWa from './components/ButtonWa'
import Hero from './components/Hero'
import Services from './components/Services'
import CarruselProductos from "./components/CarruselProductos";
import Footer from "./components/Footer"
import Contacto from "../src/paginas/Contacto"
import MediosDePago from "./paginas/MediosDePago";
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <CarruselProductos/>
      <ButtonWa/>
      <Contacto/>
      <MediosDePago/>
      <Footer/>


    </>
  )
}

export default App

