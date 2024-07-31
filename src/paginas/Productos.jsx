// // // import React, { useState } from 'react';
// // // import styled from 'styled-components';

// // // const Productos = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isNextDisabled, setIsNextDisabled] = useState(false);
// // //   const [isPrevDisabled, setIsPrevDisabled] = useState(true);
// // //     const productos = [
// // //     { id: 1, titulo: "Conjunto Deportivo", categoria: "hombre", imagen: "./conjuntodeportivo.png", },
// // //     { id: 2, titulo: "Franelillas", categoria: "hombre", imagen: "./franelilla.png", },
// // //     { id: 3, titulo: "Franela 100% Algodon", categoria: "hombre", imagen: "./franela100.png", },
// // //     { id: 4, titulo: "Camisa Poliester", categoria: "hombre", imagen: "./camisapoliester.png", },
// // //     { id: 5, titulo: "Calza Dama", categoria: "dama", imagen: "./calzadama.png", },
// // //     { id: 6, titulo: "Remera Dama", categoria: "dama", imagen: "./remeradama.png", },
// // //     { id: 7, titulo: "Top Dama", categoria: "dama", imagen: "./topdama.png", },
// // //     { id: 8, titulo: "Campera Dama", categoria: "dama", imagen: "./camperadama.png", },
// // //     { id: 9, titulo: "Campera Niño", categoria: "niño", imagen: "./camperaniño.png", },
// // //     { id: 10, titulo: "Jogger Dama", categoria: "dama", imagen: "./joggerdama.png", },
// // //     { id: 11, titulo: "Mochila Dama", categoria: "dama", imagen: "./mochiladama.png", },
// // //     { id: 12, titulo: "Chaqueta Impermeable", categoria: "hombre", imagen: "./chaquetaimpermeable.png", },
// // //     { id: 13, titulo: "Uniforme Deportivo", categoria: "hombre", imagen: "./uniformedeportivo.png", },
// // //     { id: 14, titulo: "Jogger Caballero", categoria: "hombre", imagen: "./jogger.png", },
// // //     { id: 15, titulo: "Mochila Niño", categoria: "niño", imagen: "./mochilaniño.png", },
// // //     { id: 16, titulo: "Buzo Niño", categoria: "niño", imagen: "./buzoniño.png", },
// // //     { id: 17, titulo: "Jogger Niño", categoria: "niño", imagen: "./joggerniño.png", },
// // //     { id: 18, titulo: "Musculosa Niño", categoria: "niño", imagen: "./musculosaniño.png", },
// // //     { id: 19, titulo: "Gorra Niño", categoria: "niño", imagen: "./gorraniño.png", },
// // //     { id: 20, titulo: "Remeron Dama", categoria: "dama", imagen: "./remerondama.png", },
// // //     { id: 21, titulo: "Buzo Dama", categoria: "dama", imagen: "./buzodama.png", },
// // //     { id: 22, titulo: "Lenceria Dama", categoria: "dama", imagen: "./lenceriadama.png", },
// // //     { id: 23, titulo: "Musculosa Dama", categoria: "dama", imagen: "./musculosadama.png", },
// // //     { id: 24, titulo: "Boxers", categoria: "hombre", imagen: "./ropainteriorhombre.png", },
// // //   ];
  

// // //   const handleNext = () => {
// // //     if (currentIndex < productos.length - 1) {
// // //       setCurrentIndex(currentIndex + 4);
// // //       setIsPrevDisabled(false);
// // //       if (currentIndex === productos.length - 2) {
// // //         setIsNextDisabled(true);
// // //       }
      
// // //     }
// // //   };
  
// // //   const handlePrev = () => {
// // //     if (currentIndex > 0) {
// // //       setCurrentIndex(currentIndex - 1);
// // //       setIsNextDisabled(false);
// // //       if (currentIndex === 1) {
// // //         setIsPrevDisabled(true);
// // //       }
// // //     }
// // //   };
  

// // //   return (
// // //     <ProductoContainer>
// // //       <h2>Productos</h2>
// // //       <ProductoWrapper>
// // //         {productos.slice(currentIndex, currentIndex + 4).map((producto) => (
// // //           <ProductoItem key={producto.id}>
// // //             <Imagen src={producto.imagen} alt={producto.titulo} />
// // //             <Titulo>{producto.titulo}</Titulo>
// // //           </ProductoItem>
// // //         ))}
// // //       </ProductoWrapper> 
// // //       <Botones>
// // //       <BotonPrev onClick={handlePrev} disabled={isPrevDisabled}>{'<Menos'}</BotonPrev>
// // //       <BotonNext onClick={handleNext} disabled={isNextDisabled}>{'Mas>'}</BotonNext>
// // //       </Botones>
// // //     </ProductoContainer>
// // //   );
// // // };
// // // export default Productos;



// // import React, { useState } from 'react';
// // import styled from 'styled-components';

// // const Productos = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isNextDisabled, setIsNextDisabled] = useState(false);
// //   const [isPrevDisabled, setIsPrevDisabled] = useState(true);

// //   const productos = [
// //     { id: 1, titulo: "Conjunto Deportivo", categoria: "hombre", imagen: "./conjuntodeportivo.png", },
// //     { id: 2, titulo: "Franelillas", categoria: "hombre", imagen: "./franelilla.png", },
// //     { id: 3, titulo: "Franela 100% Algodon", categoria: "hombre", imagen: "./franela100.png", },
// //     { id: 4, titulo: "Camisa Poliester", categoria: "hombre", imagen: "./camisapoliester.png", },
// //     { id: 5, titulo: "Calza Dama", categoria: "dama", imagen: "./calzadama.png", },
// //     { id: 6, titulo: "Remera Dama", categoria: "dama", imagen: "./remeradama.png", },
// //     { id: 7, titulo: "Top Dama", categoria: "dama", imagen: "./topdama.png", },
// //     { id: 8, titulo: "Campera Dama", categoria: "dama", imagen: "./camperadama.png", },
// //     { id: 9, titulo: "Campera Niño", categoria: "niño", imagen: "./camperaniño.png", },
// //     { id: 10, titulo: "Jogger Dama", categoria: "dama", imagen: "./joggerdama.png", },
// //     { id: 11, titulo: "Mochila Dama", categoria: "dama", imagen: "./mochiladama.png", },
// //     { id: 12, titulo: "Chaqueta Impermeable", categoria: "hombre", imagen: "./chaquetaimpermeable.png", },
// //     { id: 13, titulo: "Uniforme Deportivo", categoria: "hombre", imagen: "./uniformedeportivo.png", },
// //     { id: 14, titulo: "Jogger Caballero", categoria: "hombre", imagen: "./jogger.png", },
// //     { id: 15, titulo: "Mochila Niño", categoria: "niño", imagen: "./mochilaniño.png", },
// //     { id: 16, titulo: "Buzo Niño", categoria: "niño", imagen: "./buzoniño.png", },
// //     { id: 17, titulo: "Jogger Niño", categoria: "niño", imagen: "./joggerniño.png", },
// //     { id: 18, titulo: "Musculosa Niño", categoria: "niño", imagen: "./musculosaniño.png", },
// //     { id: 19, titulo: "Gorra Niño", categoria: "niño", imagen: "./gorraniño.png", },
// //     { id: 20, titulo: "Remeron Dama", categoria: "dama", imagen: "./remerondama.png", },
// //     { id: 21, titulo: "Buzo Dama", categoria: "dama", imagen: "./buzodama.png", },
// //     { id: 22, titulo: "Lenceria Dama", categoria: "dama", imagen: "./lenceriadama.png", },
// //     { id: 23, titulo: "Musculosa Dama", categoria: "dama", imagen: "./musculosadama.png", },
// //     { id: 24, titulo: "Boxers", categoria: "hombre", imagen: "./ropainteriorhombre.png", },
// //   ];
// //   const handleNext = () => {
// //     if (currentIndex < productos.length - 4) {
// //       setCurrentIndex(currentIndex + 4);
// //       setIsPrevDisabled(false);
// //       if (currentIndex >= productos.length - 8) {
// //         setIsNextDisabled(true);
// //       }
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (currentIndex > 0) {
// //       setCurrentIndex(currentIndex - 4);
// //       setIsNextDisabled(false);
// //       if (currentIndex === 4) {
// //         setIsPrevDisabled(true);
// //       }
// //     }
// //   };

// //   return (
// //     <ProductoContainer>
// //       <h2>Productos</h2>
// //       <ProductoWrapper>
// //         {productos.slice(currentIndex, currentIndex + 4).map((producto) => (
// //           <ProductoItem key={producto.id}>
// //             <Imagen src={producto.imagen} alt={producto.titulo} />
// //             <Titulo>{producto.titulo}</Titulo>
// //           </ProductoItem>
// //         ))}
// //       </ProductoWrapper>
// //       <Botones>
// //         <BotonPrev onClick={handlePrev} disabled={isPrevDisabled}>
// //           {'<Menos'}
// //         </BotonPrev>
// //         <BotonNext onClick={handleNext} disabled={isNextDisabled}>
// //           {'Mas>'}
// //         </BotonNext>
// //       </Botones>
// //     </ProductoContainer>
// //   );
// // };

// // export default Productos;


// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Productos = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isNextDisabled, setIsNextDisabled] = useState(false);
//   const [isPrevDisabled, setIsPrevDisabled] = useState(true);



//   const handleNext = () => {
//     if (currentIndex < productos.length - 4) {
//       setCurrentIndex(currentIndex + 4);
//       setIsPrevDisabled(false);
//       if (currentIndex >= productos.length - 8) {
//         setIsNextDisabled(true);
//       }
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 4);
//       setIsNextDisabled(false);
//       if (currentIndex === 4) {
//         setIsPrevDisabled(true);
//       }
//     }
//   };

//   return (
//     <ProductoContainer>
//       <h2>Productos</h2>
//       <ProductoWrapper>
//         {productos.slice(currentIndex, currentIndex + 4).map((producto) => (
//           <ProductoItem key={producto.id}>
//             <Imagen src={producto.imagen} alt={producto.titulo} />
//             <Titulo>{producto.titulo}</Titulo>
//           </ProductoItem>
//         ))}
//       </ProductoWrapper>
//       <Botones>
//         <BotonPrev onClick={handlePrev} disabled={isPrevDisabled}>
//           {'<Menos'}
//         </BotonPrev>
//         <BotonNext onClick={handleNext} disabled={isNextDisabled}>
//           {'Mas>'}
//         </BotonNext>
//       </Botones>
//     </ProductoContainer>
//   );
// };

// export default Productos;

import React, { useState } from 'react';
import styled from 'styled-components';

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

const Productos = () => {
  const [productosMostrados, setProductosMostrados] = useState(productos.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const handleNext = () => {
    const nuevosProductos = productos.slice(productosMostrados.length, productosMostrados.length + 4);
    setProductosMostrados([...productosMostrados, ...nuevosProductos]);
    setCurrentIndex(currentIndex + 4);
    setIsPrevDisabled(false);
    if (productosMostrados.length + 4 >= productos.length) {
      setIsNextDisabled(true);
    }
  };

  const handlePrev = () => {
    const nuevosProductos = productos.slice(Math.max(productosMostrados.length - 8, 0), productosMostrados.length - 4);
    setProductosMostrados(nuevosProductos);
    setCurrentIndex(currentIndex - 4);
    setIsNextDisabled(false);
    if (productosMostrados.length - 4 <= 0) {
      setIsPrevDisabled(true);
    }
  };

  return (
    <ProductoContainer>
      <h2>Productos</h2>
      <ProductoWrapper>
        {productosMostrados.map((producto) => (
          <ProductoItem key={producto.id}>
            <Imagen src={producto.imagen} alt={producto.titulo} />
            <Titulo>{producto.titulo}</Titulo>
          </ProductoItem>
        ))}
      </ProductoWrapper>
      <Botones>
        <BotonPrev onClick={handlePrev} disabled={isPrevDisabled}>
          {'<Ver Menos'}
        </BotonPrev>
        <BotonNext onClick={handleNext} disabled={isNextDisabled}>
          {'Ver Mas>'}
        </BotonNext>
      </Botones>
    </ProductoContainer>
  );
};

export default Productos;
const ProductoContainer = styled.div`
  width: 99%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  /* border: 2px solid yellow; */

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