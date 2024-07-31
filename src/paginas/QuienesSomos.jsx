import React from 'react';
import styled from 'styled-components';

const QuienesSomos = () => {
  return (
    <Container>
      <h2>Quienes Somos</h2>
      <MisionVision>
        <h3>Misión</h3>
        <p>Ofrecer servicios de personalización de textiles de alta calidad.</p>
        <h3>Visión</h3>
        <p>Liderar la personalización de textiles en la región.</p>
        <img src="misionvision.png" alt="Misión y Visión" />
      </MisionVision>
      <Valores>
        <h3>Valores</h3>
        <p>Calidad, Innovación, Diseño, Servicio al cliente</p>
        <img src="valores.avif" alt="Valores" />
      </Valores>


      <Servicios>
        <h3>Servicios</h3>
        <p>Bordado, Estampado, Tapizado, Sublimación</p>
        <img src="servicios.jpg" alt="Servicios" />
      </Servicios>

      <Equipo>
        <h3>Equipo</h3>
        <p>Profesionales experimentados y diseñadores innovadores.</p>
        <img src="equipo.jpg" alt="Equipo" />
      </Equipo>
      <Estilos>
        <h3>Estilos</h3>
        <p>Minimalista, Vintage, Moderno, Clásico, Rústico, Elegante</p>
        <img src="estilos.avif" alt="Estilos" />
    </Estilos>

    </Container>
  );
};

export default QuienesSomos;


const Container = styled.div`
  max-width: 1500px;
  margin: 40px auto;
  padding: 20px;
  background-color:  #121315;
  border-radius:15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  img {
  width: 100%;
  height: 200px;
  object-fit: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 150px;
  }

  }
  h2 {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h3, p {
    margin: 0;
    padding:0;
    text-align: center;
    color: black;
  }
`;

const MisionVision = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 20px;
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 5px;
  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

const Valores = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 5px;


`;

const Servicios = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 5px;


`;

const Equipo = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 5px;


`;

const Estilos = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 5px;


`;
