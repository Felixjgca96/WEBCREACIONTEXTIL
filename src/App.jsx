import React from "react";


import './App.css'
import Navbar from './components/Navbar'
import ButtonWa from './components/ButtonWa'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Productos/Products';


function App() {

  return (
    <>
      <Navbar/>
        <Hero/>
        <Services/>
        <Products/>


        <Hero/>
        <Hero/>
        <Hero/>
      <ButtonWa/>
      
    </>
  )
}

export default App

