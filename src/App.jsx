import React from "react";


import './App.css'
import Navbar from './components/Navbar'
import ButtonWa from './components/ButtonWa'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Productos/Products';
import Prueba from "./components/Prueba";


function App() {

  return (
    <>
      <Navbar/>
        <Hero/>
        <Services/>
        <Prueba/>


        <Hero/>
        <Hero/>
        <Hero/>
      <ButtonWa/>
      
    </>
  )
}

export default App

