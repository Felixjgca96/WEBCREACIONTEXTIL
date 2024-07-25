import React from 'react';
import styled from 'styled-components'

function Hero ( ) {


  return (

    <HeroSection>
      <div class="hero__background">
        
      </div>
      <div class="hero__contenido">
        <h1 class="hero__titulo">Tu centro de confianza</h1>
        <div class="hero__descripcion">
          <p >Trabajo responsable y rápido, con buena capacidad de finalizacion en cada detalle.
          </p>
        <p>Excelente atención y buena presencia.</p>
        </div>
        <button class="hero__boton">Contáctanos</button>
      </div>

    </HeroSection>
  )  
}
export default Hero

const HeroSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
width: 100%;
height: 500px;
max-width: 1500px;
background-image: url('./fondo.gif');
background-repeat: no-repeat;
background-size:100% 100%;


  .hero__background {
    display: flex;
    width: 100px;

  }

  .hero__contenido {

    text-align: center;
  }

  .hero__titulo {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .hero__descripcion {
    margin-bottom: 40px;
  }
  .hero__descripcion p {
    font-size: 18px;
  }

  .hero__boton {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 10px;

  }

  .hero__boton:hover {
    background-color: #555;

  }






`
