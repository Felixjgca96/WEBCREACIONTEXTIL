import React, { useState } from 'react';
import styled from 'styled-components';
import { productos } from '../Arrays/ArrayProductos';

const CarruselProductos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    
  

  const handleNext = () => {
    if (currentIndex < productos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsPrevDisabled(false);
      if (currentIndex === productos.length - 2) {
        setIsNextDisabled(true);
      }
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsNextDisabled(false);
      if (currentIndex === 1) {
        setIsPrevDisabled(true);
      }
    }
  };
  

  return (
    <CarruselContainer>
      <BotonPrev onClick={handlePrev} disabled={isPrevDisabled}>{'<'}</BotonPrev>
      <CarruselWrapper>
        {productos.slice(currentIndex, currentIndex + 4).map((producto) => (
          <CarruselItem key={producto.id}>
            <Imagen src={producto.imagen} alt={producto.titulo} />
            <Titulo>{producto.titulo}</Titulo>
          </CarruselItem>
        ))}
      </CarruselWrapper> 
      <BotonNext onClick={handleNext} disabled={isNextDisabled}>{'>'}</BotonNext>
    </CarruselContainer>
  );
};
export default CarruselProductos;

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
  /* border: 2px solid yellow; */

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
  max-width: 90%;
  overflow: hidden;
  /* border: 2px solid green; */
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
  /* border: 2px solid blue; */
  width: 270px;
  height: 270px; 
  margin-left: 2px;
  margin-right: 2px;



  
`;

const Imagen = styled.img`
  width: 220px;
  height: 220px;

   /* border: 2px solid purple; */
`;

const Titulo = styled.h2`
  font-size:18px;
  color: #fff;
  padding: 0px;
  margin: 0px;
  text-align: center;
  /* border: 2px solid red; */

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

const BotonPrev = styled.button`
  background-color: white;
  font-size:30px;
  font-weight: 700;  border: none;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 2px solid red; */
  position: absolute;
  z-index: 2;
  left:0px; 
  padding:auto;

  &:hover {
    color: white;
    background-color: black;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    color: black;
    background-color: white;
  }

`;

const BotonNext = styled.button`
  background-color: white;
  font-size:30px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 2px solid red; */
  position: absolute;
  right:0px; 
  
  
  &:hover {
    color: white;
    background-color: black;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    color: black;
    background-color: white;
  }


`;
