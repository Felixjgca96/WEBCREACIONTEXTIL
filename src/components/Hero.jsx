import React from 'react';
import styled from 'styled-components'


function Hero ( ) {
  return (
    <HeroSection>
      <div class="hero__contenido">
        <h1 class="hero__titulo">Tu centro de confianza</h1>
        <div class="hero__descripcion">
          <p class="hero__descripcion__puno">Trabajo responsable y rápido, con buena capacidad de finalizacion en cada detalle.
          </p>
        <p class="hero__descripcion__pdos">Excelente atención y buena presencia.</p>
        </div>
        <ButtonContactanos>
            <a href="https://api.whatsapp.com/send?phone=584248098877" class="hero__boton" target="_blank">
	            <i>Contáctanos</i>
	        </a>
        </ButtonContactanos>


      </div>
    </HeroSection>
  )  
}
export default Hero



const HeroSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: #fff;
height: 500px;
border: 5px solid red;


  .hero__contenido {
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
    border: 5px solid yellow;
  }

  .hero__titulo {
    font-size: 48px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 20px;
    border: 5px solid red;
    text-align: center;
  }

  .hero__descripcion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 5px solid green;
    margin-bottom: 20px;
    gap: 15px;
  }
  .hero__descripcion__puno {
    font-size: 24px;
    display: flex;
    justify-content: center;
    text-align: center;
    border: 5px solid red;
    margin: 0;
  }
  .hero__descripcion__pdos {
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    border: 5px solid red;
    margin: 0;
  }
`

const ButtonContactanos = styled.div`

  .hero__boton {
    padding: 10px 28px; 
    outline: none;
  border: none;
  border-radius: 5px;
  background-image: linear-gradient(to right, #6c757d, #adb5bd);  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  border: none;  
  display: inline-block;
  margin: 10px;

  }

  .hero__boton:hover {
    background-image: linear-gradient(to right, #2e2f30, #838485);
  }

`


