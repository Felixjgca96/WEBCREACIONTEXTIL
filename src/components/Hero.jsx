import React from 'react';
import styled from 'styled-components'

function Hero ( ) {
  
  return (
    <HeroContainerStyled id="hero">
        <HeroTextContainerStyled>
            <h1>CREACION TEXTIL</h1>
            <p>
                Nos dedicamos a la producción y comercialización de prendas de vestir;
                mayormente en el rubro deportivo para damas y caballeros.
            </p>

            <BeneficiosCardStyled>
                <ImgStyled>
                    <img src="./1.jpg" alt="imagen" />
                    <img src="./2.jpg" alt="imagen" />
                    <img src="./3.jpg" alt="imagen" />
                </ImgStyled>
                <TextStyled>
                    <p>
                        Trabajo responsable y rápido, con buena capacidad de finalizacion
                        en cada detalle.
                    </p>
                    <p>
                        Empresa apasionada por la costura, muy profesional, detallista y
                        con buena reputacion.
                    </p>
                    <p>Excelente atención y buena presencia.</p>
                </TextStyled>
            </BeneficiosCardStyled>
        </HeroTextContainerStyled>
    </HeroContainerStyled>
    
  )  
}
export default Hero

const HeroContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 0px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 100px;
  width: 100%;
  color: black;
  z-index: -2;


  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 860px) {
    border-radius: 50px;
  }
`;

 const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-right: 30px;
  margin-left: 30px;
  text-align: center;
  align-items: center;
  border-radius: 20px;

  @media (max-width: 650px) {
    width: 100%;
    margin-right: 5px;
    margin-left: 5px;
  }

  h1 {
    font-size: 4rem;
    margin: 10px 0;
    text-align: center;
    color: white;

    @media (max-width: 900px) {
      font-size: 2.7rem;
    }
    @media (max-width: 470px) {
      font-size: 1.6rem;
      margin: 5px 0;
    }
    border: 2px solid white;

  }
  h2 {
    font-size: 2.5rem;
    margin: 10px 0;
    text-align: center;
    color: #00030a;
    border: 2px solid white;


    @media (max-width: 900px) {
      font-size: 2rem;
    }
    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.2rem;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
    color: white;
    border: 2px solid white;

  }
    border: 2px solid white;

`;
 const BeneficiosCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  gap: 5px;
  border: 2px solid white;

`;
const ImgStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    padding:0;
    margin: 0;
  }
  border: 2px solid white;

`;
 const TextStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  gap: 10px;

  p {
    font-size: 1.2rem;
    padding:0;
    margin: 0;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }
  border: 2px solid white;
`;