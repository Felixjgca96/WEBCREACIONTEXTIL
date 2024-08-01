import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function PaginaError  ()  {
  return (

    <ErrorSection>
        <section className="contenido">
            <img className='contenido__img--espanta' src="./error.webp" alt="pagina error" width="300" height="400" />
        </section>

        <section className='contenido'>
            <div className="header__titulo">
                <h4>404 NOT FOUND</h4>
            </div>
            <section className="section">
                <div className="section__texto">
                    <div className="section__texto--parrafo">
                        <p>La página que estás buscando podría haber sido eliminada o se encuentra momentáneamente fuera de
                            servicio.</p>
                    </div>
                </div>
                <div className="section__botones--contenido">
                    <Link className='section__botones--contenido__btn' to="/inicio">Regresa al Inicio</Link>
                </div>
            </section>

        </section>

        


    </ErrorSection>
  )
}

export default PaginaError

const ErrorSection = styled.div`
margin-top:120px ;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
gap: 20px;
background-color: #121315;
padding:20px;
max-width:1500px;
max-width: 99%;
@media (max-width: 630px) {
    
    flex-direction: column;
    gap: 0;
    
  }


  .contenido {
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;


}
.header__titulo {


}


/** Tamaño de la imagen */
.contenido__img--espanta {
    width: 280px;
    height: 280px;


}

/** Estilo de la sección principal */
.section {

    gap: 20px;

}

.section__texto { 
    margin-bottom:30px;

    
}


.section__texto--titulo {


}

.section__texto--parrafo {
    text-align: justify;

}

/* Estilo de los botones */
.section__botones {

}

.section__botones--contenido {
    margin-top: 30px;


}

.section__botones--contenido__btn {
    width: 250px;
    height: 40px;
    background-color: #4CAF50;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
    padding: 8px;
    border: 2px solid #ccc;
    margin: 10px;

    &:hover 
    {background-color: #fff;
    transition: background-color 0.3s;
    color:  #4CAF50; }

    @media(max-width: 630px) {

        margin-top: 15px;
    }

}

.section__botones--contenido__btn:hover {

}

  /* .section__botones--contenido__btn {

  } */
`