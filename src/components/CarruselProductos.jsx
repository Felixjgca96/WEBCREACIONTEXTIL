import React, { useState } from 'react';
import styled from 'styled-components';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productos = [
    { id: 1, titulo: "Conjunto Deportivo", categoria: "hombre", imagen: "./conjuntodeportivo.png", },
    { id: 2, titulo: "Franelillas", categoria: "hombre", imagen: "./franelilla.png", },
    { id: 3, titulo: "Franela 100% Algodon", categoria: "hombre", imagen: "./franela100.png", },
    { id: 4, titulo: "Camisa Poliester", categoria: "hombre", imagen: "./camisapoliester.png", },
    { id: 5, titulo: "Calza Dama", categoria: "dama", imagen: "./calzadama.png", },
    { id: 6, titulo: "Remera Dama", categoria: "dama", imagen: "./remeradama.png", },
    { id: 7, titulo: "Top Dama", categoria: "dama", imagen: "./topdama.png", },
    { id: 8, titulo: "Campera Dama", categoria: "dama", imagen: "./camperadama.png", },
    { id: 9, titulo: "Campera Niño", categoria: "niño", imagen: "./camperaniño.png", },
    { id: 10, titulo: "Jogger Dama", categoria: "dama", imagen: "./joggerdama.png", },
    { id: 11, titulo: "Mochila Dama", categoria: "dama", imagen: "./mochiladama.png", },
    { id: 12, titulo: "Chaqueta Impermeable", categoria: "hombre", imagen: "./chaquetaimpermeable.png", },
    { id: 13, titulo: "Uniforme Deportivo", categoria: "hombre", imagen: "./uniformedeportivo.png", },
    { id: 14, titulo: "Jogger Caballero", categoria: "hombre", imagen: "./jogger.png", },
    { id: 15, titulo: "Mochila Niño", categoria: "niño", imagen: "./mochilaniño.png", },
    { id: 16, titulo: "Buzo Niño", categoria: "niño", imagen: "./buzoniño.png", },
    { id: 17, titulo: "Jogger Niño", categoria: "niño", imagen: "./joggerniño.png", },
    { id: 18, titulo: "Musculosa Niño", categoria: "niño", imagen: "./musculosaniño.png", },
    { id: 19, titulo: "Gorra Niño", categoria: "niño", imagen: "./gorraniño.png", },
    { id: 20, titulo: "Remeron Dama", categoria: "dama", imagen: "./remerondama.png", },
    { id: 21, titulo: "Buzo Dama", categoria: "dama", imagen: "./buzodama.png", },
    { id: 22, titulo: "Lenceria Dama", categoria: "dama", imagen: "./lenceriadama.png", },
    { id: 23, titulo: "Musculosa Dama", categoria: "dama", imagen: "./musculosadama.png", },
    { id: 24, titulo: "Boxers", categoria: "hombre", imagen: "./ropainteriorhombre.png", },
  ];
  

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % productos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + productos.length) % productos.length);
  };

  return (
    <CarruselContainer>
      <Boton onClick={handlePrev}>Prev</Boton>
      <CarruselWrapper>
        {productos.slice(currentIndex, currentIndex + 4).map((producto) => (
          <CarruselItem key={producto.id}>
            <Imagen src={producto.imagen} alt={producto.titulo} />
            <Titulo>{producto.titulo}</Titulo>
          </CarruselItem>
        ))}
      </CarruselWrapper> 
      <Boton onClick={handleNext}>Next</Boton>

    </CarruselContainer>
  );
};
export default Carrusel;

const CarruselContainer = styled.div`
  position: relative;
  width: 99%;
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  max-width: 1300px;
  border: 2px solid yellow;

`;

const CarruselWrapper = styled.div`
  /* display: flex;
  *justify-content: center;
  *align-items: center;
  *width: 99%;
  *max-width: 1300px;
  *overflow: hidden; */

  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 304px;
  padding: 10px 0px;
  margin: 0px auto;
  max-width: 1300px;
  overflow: hidden;
  border: 2px solid green;
  gap: 10px;
  transition: transform 0.5s ease-in-out;


  

  

`;

const CarruselItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('./fondo8.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
  border-radius: 15px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 102);
  border: 2px solid blue;
  width: 270px;
  height: 270px;




`;

const Imagen = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  padding: 0px;
  margin: 0px;
  border: 2px solid purple;

`;

const Titulo = styled.h2`
  font-size:18px;
  color: #fff;
  padding: 0px;
  margin: 0px;
  text-align: center;
  border: 2px solid red;

`;

const Botones = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const Boton = styled.button`
  background-color: #222;
  border: none;
  cursor: pointer;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid red;

  :after {
    color: #222;
    background-color: white;
  }
`;


