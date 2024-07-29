import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterSection>
      <div className="container">
        <div className="col1">
          <a href="#" className="brand">Brand</a>
          <ul className="media-icons">
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-discord" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col2">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem excepturi ipsam unde obcaecati iusto velit labore consequuntur officiis aut neque?
            </p>
          </ul>
        </div>
        <div className="col3">
          <p>Subscribe to our newslatter</p>
          <form>
            <div className="input-wrap">
              <input type="email" placeholder="ex@gmail.com" />
              <button type="submit">
                <i className="fa-solid fa-paper-plane" />
              </button>
            </div>
          </form>
          <ul className="services-icons">
            <li>
              <a href="#">
                <i className="fa-brands fa-cc-paypal" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-cc-apple-pay" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-google-pay" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-cc-amazon-pay" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="mekk">
          <p>@ndriWebDev 2023 - All Rights Reserved</p>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;

const FooterSection = styled.div`
  
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
  background: #121315;
  width: 100%;

ul {
  list-style: none;
}
p {
  color: #fff;
  max-width: 25em;
  font-size: 0.9em;
  line-height: 23px;
}
a {
  color: #fff;
  text-decoration: none;
}
.container {
  max-width: 1200px;
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
.brand {
  display: block;
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 1em;
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
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(138, 208, 153, 0.36);
  padding: 2em;
}
.menu {
  margin-bottom: 1em;
}
.menu li {
  display: inline-block;
  margin: 0 0.7em 0.7em 0;
  text-align: center;
}
.menu a {
  transition: 0.3s;
  font-weight: 600;
}
.menu a:hover {
  color: #94fbab;
}
.input-wrap {
  margin: 1em 0;
  display: flex;
}
.input-wrap input {
  padding: 0.5em;
  border: none;
  background: #20232a;
  color: #ccc;
}
.input-wrap input:focus {
  outline: none;
}
.input-wrap button {
  padding: 0.8em;
  background: #94fbab;
  border: none;
  color: #217634;
  transition: 0.3s;
}
.input-wrap button:hover {
  background: #fff;
  color: #111;
}
/* == responsive == */


  
`