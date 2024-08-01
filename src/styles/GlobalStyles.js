import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
    --orange-bg: #2f2618;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
    --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
    --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }

  html{
    scroll-behavior: smooth;
  }

  body {
  margin: 0;
  padding: 0;
  background: #131415;
  background-image: url(./fondo8.jpg);
  background-repeat:no-repeat;
  background-size:100%;
  background-position:top center;
  background-attachment:fixed;
  border-radius: 10px;
  box-shadow:0 2px 5px 0 rgba(0, 0, 0, 105);
  transition: .3s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  color: white;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden


  
  }

  a {
  text-decoration: none;
  }

  a:visited {
  color: white;
  }

  li {
  list-style: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 0s 600000s, color 0s 600000s;
  }

`
