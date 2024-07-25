import React from 'react';
import styled from 'styled-components'

function Services ( ) {
  return (
    <ServicesSection>
        <section class="services-section">
            <article class="services__cards container">
                <div class="services__cards-info">
                    <h2>Nuestros servicios</h2>
                    <p>En PureFruit, nos esforzamos por brindarte servicios excepcionales que complementen la frescura y calidad de nuestras frutas. Explora lo que ofrecemos para hacer tu experiencia de compra aún más satisfactoria</p>
                </div>   
                <div class="services__cards-card">
                    <div class="service__card">
                        <i class="bi bi-brightness-alt-high-fill"></i>
                        <h3>Nuestra Misión</h3>
                        <p>Nos enfocamos en ofrecer soluciones de alta calidad en costura y tapizado, personalizadas para satisfacer las necesidades específicas de cada cliente. Contáctanos para explorar nuestros servicios</p>
                    </div>
                    <div class="service__card">
                        <i class="bi bi-bicycle"></i>
                        <h3>Garantía de Entrega</h3>
                        <p>Ofrecemos un servicio de logística eficiente y segura, con transporte especializado y embalaje experto, para garantizar la entrega puntual y en perfectas condiciones de nuestros productos de costura y tapizado.</p>
                    </div>
                    <div class="service__card">
                        <i class="bi bi-rainbow"></i>
                        <h3>Nuestros Servicios</h3>
                        <p>Ofrecemos prendas a medida, tapizado de muebles, bordados personalizados, estampados en textiles y materiales, e impresión de imágenes en productos.</p>
                    </div>
                </div>  
                <a href="#" class="button button-primary">Saber más</a>
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
  margin-bottom: 1rem;

}

.services__cards-info p {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 1rem;
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
  padding: 2rem 1rem;
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
}

.service__card p {
  font-size: 1.1rem;
  color: white;
  margin-top: 1rem;

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

.button {
    font-size: 1.1rem;
    padding: 10px 20px;
    font-weight: 700;    
    cursor: pointer;
    border-radius: 5px;
}

.button-primary {
    color: white;
    background-color: #222;
}

.button-primary:hover {
    background-color: white;
    transition: background-color 0.3s;
    color: black;
}

.button-secondary {
    color: white;
    background-color: purple;
}

.button-secondary:hover {
    background-color: pink;
    color: purple;
    transition: background-color 0.3s;
}

.input {
    border: none;
    font-size: 1.1rem;
    background-color: white;
    padding: 10px;
    outline: none;
    color: purple;
    border-radius: 5px;
}

`