import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import BurguerButton from './BurguerButton';
import Hero from './Hero';



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
      <NavHero>
      <NavContainer>
        <a href="">
          <img src="./logo.png" alt="" className='logo'/>
        </a>
          
        <div className= {`links ${clicked ? 'active' : ''}`}>
            <a href="/">Inicio</a>
            <a href="/">Productos</a>
            <a href="/">Quienes Somos</a>
            <a href="/">Medios de Pago</a>
            <a href="/">Contacto</a>
        </div>
        <div className='burguer'>
        <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>
      </NavHero>
  )  
}
export default Navbar

const NavHero = styled.nav`
  display: flex;
  flex-direction:column;
  width: 100%;
  max-width: 1500px;
  z-index: 0;




`
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1500px;
  position: fixed; 
  top: 0;
  background: #222;
 

  





  /* border: 2px solid red; */

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
    margin: 5px;

  }
  img.logo {

    margin-left:0.5rem;

  }

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
      font-size:2.5rem;
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
        display: inline;
        color: white;
        padding: 5px 10px; 
        border-radius: 5px;
        font-weight: 700;


        

      }
      a:hover {
          background-color: white;
          transition: background-color 0.3s;
          color: black; 
      }

    }
  }

  .links.active{
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 120px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2;
    


    a{        
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
      border-radius: 5px;
      width: 270px;

      
    }
    a:hover {
          background-color: white;
          transition: background-color 0.3s;
          color: black; 

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
z-index: 0;
transition: all .6s ease ;
border: 2px solid gray;


&.active{
  border-radius: 0 0 60% 0;
  top: 100px;
  left: 0;
  width: 100%;
  height: 450px;

  
}

`
