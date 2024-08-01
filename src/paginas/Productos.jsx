import React, { useState } from 'react';
import styled from 'styled-components';
import { productos } from '../Arrays/ArrayProductos';
import { Categorias } from '../Arrays/ArrayCategorias';

const Productos = () => {


  const [productosMostrados, setProductosMostrados] = useState(productos.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(""); // Agregué este estado

  const handleNext = () => {
    const productosFiltrados = productos.filter((producto) => producto.categoria === categoriaSeleccionada || categoriaSeleccionada === "");
    const nuevosProductos = productosFiltrados.slice(productosMostrados.length, productosMostrados.length + 4);
    setProductosMostrados([...productosMostrados, ...nuevosProductos]);
    setCurrentIndex(currentIndex + 4);
    setIsPrevDisabled(false);
    if (productosMostrados.length + 4 >= productosFiltrados.length) {
      setIsNextDisabled(true);
    }
  };
  
  const handlePrev = () => {
    if (productosMostrados.length > 4) {
      const productosFiltrados = productos.filter((producto) => producto.categoria === categoriaSeleccionada || categoriaSeleccionada === "");
      setProductosMostrados(productosFiltrados.slice(0, 4));
      setCurrentIndex(0);
      setIsPrevDisabled(true);
      setIsNextDisabled(false);
    }
  };
  

  const handleCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    const productosFiltrados = productos.filter((producto) => producto.categoria === categoria || categoria === "");
    setProductosMostrados(productosFiltrados.slice(0, 4));
    setCurrentIndex(0);
    setIsPrevDisabled(true);
    setIsNextDisabled(false);
  };

  return (
    <ProductoContainer>
      <h2>Productos</h2>
      <CategoriasProductos>
        {Categorias.map((categoria) => (
          <CategoriaItem key={categoria.id} onClick={() => handleCategoria(categoria.categoria)}>
            <Imagen src={categoria.imagen} alt={categoria.titulo} />
            <Titulo>{categoria.titulo}</Titulo>
          </CategoriaItem>
        ))}
      </CategoriasProductos>
      <ProductoWrapper>
        {productosMostrados.map((producto) => (
          <ProductoItem key={producto.id}>
            <ImagenProductos src={producto.imagen} alt={producto.titulo} />
            <TituloProductos>{producto.titulo}</TituloProductos>
          </ProductoItem>
        ))}
      </ProductoWrapper>
      <Botones>
        <BotonPrev onClick={handlePrev} disabled={isPrevDisabled}> {'<Ver Menos'} </BotonPrev>
        <BotonNext onClick={handleNext} disabled={isNextDisabled}> {'Ver Mas>'} </BotonNext>
      </Botones>
    </ProductoContainer>
  );
};

export default Productos;

const CategoriasProductos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 450px) {
    gap: 3px;
    
  }
`;

const CategoriaItem = styled.div`
  cursor: pointer;
  background-color: #121315;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  border:2px solid #ccc;
  &:hover {
    background-color: black;
  }
  @media (max-width: 600px) {
    width: 70px;
    height: 110px;
    padding: 0;
    flex-direction: column;
    
  }


`;

const Imagen = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 600px) {
    margin: 0px;
  }

`;

const Titulo = styled.h3`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;


  @media (max-width: 600px) {
    margin: 0px;
  }
`;

const ProductoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid yellow; */
  margin-top: 130px;
  margin-bottom:30px ;



`;

const ProductoWrapper = styled.div`
  /* display: flex;
  *justify-content: center;
  *align-items: center;
  *width: 99%;
  *max-width: 1300px;
  *overflow: hidden; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  margin: 0px auto;
  max-width: 90%;
  /* border: 2px solid green; */
  
  gap: 20px;
  transition: transform 0.5s ease-in-out;
`;

const ProductoItem = styled.div`
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
  @media (max-width: 650px) {
    flex-direction: row;
    width: 230px;
    height: 150px;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 150px;
  }

  @media (max-width: 510px) {
    width: 120px;
    height: 160px;
    flex-direction:column;
    justify-content: center;
    gap: 10px;

  }

`;

const ImagenProductos = styled.img`
  width: 220px;
  height: 220px;
  @media (max-width: 650px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 600px) {
    width: 110px;
    height: 110px;
  }
  @media (max-width: 510px) {
    width: 120px;
    height: 120px;
    padding: 0;
    margin: 0;
  }
   /* border: 2px solid purple; */
`;

const TituloProductos = styled.h2`
  font-size:18px;
  color: #fff;
  padding: 0px;
  margin: 0px;
  text-align: center;
  /* border: 2px solid red; */
  @media (max-width: 650px) {
    font-size:13px;
  }
  @media (max-width: 510px) {
    font-size:12px;
    padding: 0;
    margin: 0;
    
    

  }

`;

const Botones = styled.div`
display: flex;
gap: 20px;

`;

const BotonPrev = styled.button`
  background-color: white;
  font-size:14px;
  font-weight: 700;  
  border: none;
  cursor: pointer;
  width: 95px;
  height: 35px;
  border-radius: 10px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 2px solid red; */

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
  font-size:14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  width: 85px;
  height: 35px;
  border-radius: 10px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  
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
