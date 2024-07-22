import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import BurguerButton from './BurguerButton';



function Navbar ( ) {
  const [clicked, setClicked]= useState (false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setClicked(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <>
      <NavContainer>
        <a href="">
          <img src="./logo.png" alt="" className='logo'/>
        </a>
          
          <div className= {`links ${clicked ? 'active' : ''}`}>
              <a onClick={handleClick} href="/">Inicio</a>
              <a onClick={handleClick} href="/">Productos</a>
              <a onClick={handleClick} href="/">Quienes Somos</a>
              <a onClick={handleClick} href="/">Medios de Pago</a>

              <a onClick={handleClick}href="/">Contacto</a>
          </div>
          <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick}/>
          </div>
          <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
          
      </NavContainer>
      </>
  )  
}
export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  .logo {
    height: 90px;
    width:90px;

    display: flex;
  }
  img.logo {

    margin-left:0.5rem;

  }

  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  border-radius:5px;
  width: 100%;
  max-width: 1300px;
  /* border: 2px solid red; */




  a {
    color:white;
    text-decoration: none;
    margin-right:1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size:2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    @media(min-width: 768px){
      position: initial;
      margin:0px;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }

    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  
  .burguer {
    @media(min-width: 768px){
      display: none;
    }
  }

`

const BgDiv = styled.div`
position: absolute;
background-color: #222;
top: -700;
left: -1000;
z-index: -1;
transition: all .6s ease ;


&.active{
  border-radius: 0 0 60% 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

`