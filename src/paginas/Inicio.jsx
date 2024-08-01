import React from 'react'
import styled from "styled-components";

import Services from '../components/Services'
import Hero from '../components/Hero'
import CarruselProductos from '../components/CarruselProductos';

function Inicio  ()  {
  return (
    <InicioSection>
        <Hero/>
        <Services/>
        <CarruselProductos/>
    </InicioSection>
  );
}

export default Inicio

const InicioSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`