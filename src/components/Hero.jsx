
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroes = [
    {
      imagen: './hero1.jpg',
      titulo: 'Bordados con calidad',
      descripcion: 'Trabajo responsable y rápido. ',
    },
    {
      imagen: './hero2.jpg',
      titulo: 'Atención personalizada',
      descripcion: 'Excelente atención y buena presencia.',
    },
    {
        imagen: './hero3.jpg',
        titulo: 'Detalles perfectos',
        descripcion: 'Buena capacidad de finalizacion en cada detalle.',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % heroes.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, heroes.length]); // Agregué currentIndex como dependencia

  return (
    <PruebaHero>
      <div className="hero-image" style={{ backgroundImage: `url(${heroes[currentIndex].imagen})` }}>
        <div className="hero-content">
          <h1>{heroes[currentIndex].titulo}</h1>
          <p>{heroes[currentIndex].descripcion}</p>
          <ButtonContactanos>
            <a href="https://api.whatsapp.com/send?phone=584248098877" class="hero__boton" target="_blank">
	            Contáctanos
	        </a>
          </ButtonContactanos>
        </div>
      </div>
    </PruebaHero>
  );
};

export default Hero;

const PruebaHero = styled.div`
  height: 500px;
  width: 95%;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:110px ;
  .hero-image {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
  .hero-content {
    color: #fff;
    text-align: center;
  }
`;


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
    opacity: 80%;

  }

  .hero__boton:hover {
    background-color: black;
    transition: background-color 0.3s;
    opacity: 100%;
  }

`