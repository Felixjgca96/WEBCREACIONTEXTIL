import React from 'react';
import styled from 'styled-components'

function Services ( ) {
  return (
    <ServicesSection>
        <section className="services-section">
            <article className="services__cards container">
                <div className="services__cards-info">
                    <h2>Acerca de Nuestros Servicios</h2>
                    <p>Misión, garantía y servicios de alta calidad para ti.</p>
                </div>   
                <div className="services__cards-card">
                    <div className="service__card">
                        <i className="bi bi-brightness-alt-high-fill"></i>
                        <h3>Nuestra Misión</h3>
                        <p>Nos enfocamos en ofrecer soluciones de alta calidad en costura y tapizado, personalizadas para satisfacer las necesidades específicas de cada cliente. Contáctanos para explorar nuestros servicios</p>
                    </div>
                    <div className="service__card">
                        <i className="bi bi-bicycle"></i>
                        <h3>Garantía de Entrega</h3>
                        <p>Ofrecemos un servicio de logística eficiente y segura, con transporte especializado y embalaje experto, para garantizar la entrega puntual y en perfectas condiciones de nuestros productos de costura y tapizado.</p>
                    </div>
                    <div className="service__card">
                        <i className="bi bi-rainbow"></i>
                        <h3>Nuestros Servicios</h3>
                        <p>Ofrecemos prendas a medida, tapizado de muebles, bordados personalizados, estampados en textiles y materiales, e impresión de imágenes en productos.</p>
                    </div>
                </div>  
            </article>        
        </section>
    </ServicesSection>
  )  
}
export default Services

const ServicesSection = styled.div`

.services-section {
  display: flex;
  justify-content: center;
  padding: 50px 0;
  margin-bottom:0px;
padding-bottom: 0px;

}

.services__cards {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.services__cards-info {
  max-width: 900px;

}

.services__cards-info h2 {
  font-size: 2rem;
  font-weight: 900;
  color: white;
  margin-bottom: 0rem;
  @media(max-width: 768px){
    font-size: 1.7rem;
  }

}

.services__cards-info p {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0;
  font-weight: bold;
  @media(max-width: 768px){
    font-size: 1rem;
  }


}

.services__cards-card {
  display: flex;
  justify-content: center;
  max-width: 1500px;

}

.service__card {
  max-width: 25%;
  border: 1px solid white;
  margin: 3rem 1rem;
  padding: 1rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.service__card:hover {
  background-color: #222;
}

.service__card i {
  font-size: 56px;
  color: white;
}


.service__card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0px 0px 10px 0px;
  padding:0px;
}

.service__card p {
  font-size: 1.1rem;
  color: white;
  margin: 0px;
  padding:0px;

}

@media only screen and (max-width: 850px) {
  .services__cards-card {
    flex-direction: column;
    align-items: center;
    max-width: 500px;
  }

  .service__card {
    max-width: 100%;
    margin: 1rem 1rem;
  }

  .services__cards .button {
    margin-top: 2rem;
  }
} 


`