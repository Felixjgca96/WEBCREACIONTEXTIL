import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <FooterSection>
      <div className="container">
        <div className="col1">
          <a href="#" className="Nombre">Creación Textil</a>
          <ul className="media-icons">
            <li>
              <a href="https://api.whatsapp.com/send?phone=584248098877" target="_blank">
                <i className="fa-brands fa-whatsapp" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/es/" target="_blank">
                <i className="fa-brands fa-tiktok" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col2">
          <div className="menu">
          <Link to="/productos">Productos</Link>
          <Link to="/mediosdepago">Medios de Pago</Link>
          <Link to="/contacto">Contacto</Link>

          </div>

          <p>
            Empresa especializada en personalización de textiles y muebles mediante bordado, estampado, sublimación y tapizado. Su equipo de expertos ofrece soluciones personalizadas y únicas.
            </p>
        </div>
        <div className="col3">

          <ul className="services-icons">
            <li>
              <a href="#">
                <i className="fa-brands fa-cc-paypal" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-dollar-sign" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-google-pay" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-cc-visa" />
              </a>
            </li>
            

          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="mekk">
          <p>Creación Textil 2010 - Todos los derechos reservados.</p>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;

const FooterSection = styled.div`
  
  box-sizing: border-box;
  margin: 0 0 0 0;
  padding: 20px 0 0 0;
  color: #fff;
  background: #121315;
  width: 100%;
  border-top: 1px solid rgba(138, 208, 153, 0.36);


ul {
  list-style: none;

}
p {
  color: #fff;
  max-width: 25em;
  font-size: 0.9em;
  line-height: 23px;
  text-align: justify;
}
a {
  color: #fff;
  text-decoration: none;
}
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 2em;
}
.container {
  display: flex;
  justify-content: space-between;
  gap: 2em;

  @media(max-width: 900px) {
    flex-direction: column;
    
}
}
.Nombre {
  display: block;
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 1em;
}
.media-icons, 
.services-icons {
    margin: 0;
    padding: 0;
}
.media-icons li,
.services-icons li {
  display: inline-block;
  margin: 0.5em 0.5em 0.5em 0;


}
.media-icons a {
  font-size: 1.1em;
  width: 2em;
  height: 2em;
  border: 1px #fff solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

}
.media-icons a:hover {
  background: #fff;
  color: #111;
}
.services-icons a {
  font-size: 1.6em;
}
.services-icons a:hover {
  color: #94fbab;
}
.footer-bottom {

  border-top: 1px solid rgba(138, 208, 153, 0.36);
  padding: 1em;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

}
.col2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 900px) {
    align-items: flex-end;
  }
}
.menu {
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-bottom: 1em;
  gap: 10px;
  @media(max-width: 400px) {
    font-size: 13px;
  }
}

.menu li a {
  transition: 0.3s;
  font-weight: 600;
  @media(max-width: 450px) {
        font-weight: 600;
        font-size: 13px;
    }
}
.menu a:hover {
  color: #94fbab;
}

.mekk p {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media(max-width: 450px) {
    font-size:10px
        
    }
}

`