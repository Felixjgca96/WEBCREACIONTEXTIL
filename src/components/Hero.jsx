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
	            Contáctanos
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
margin-top: 70px;


  .hero__contenido {
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
    
  }

  .hero__titulo {
    font-size: 48px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
  }

  .hero__descripcion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
    gap: 15px;
  }
  .hero__descripcion__puno {
    font-size: 26px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0;

  }
  .hero__descripcion__pdos {
    font-size: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0;

  }
`

const ButtonContactanos = styled.div`
  .hero__boton {
    padding: 10px 20px; 

    border-radius: 5px;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    margin: 10px;
    color: white;
    background-color: #222;

  }

  .hero__boton:hover {
    background-color: white;
    transition: background-color 0.3s;
    color: black;  
  }

`



