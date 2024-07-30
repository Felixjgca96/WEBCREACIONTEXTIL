import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwroll");
  if (state.succeeded) {
    return (
      <p>Gracias por contactarnos! 
        <button onClick={() => window.location.reload()}>Enviar otro mensaje</button>
      </p>
    );
  }
  return (
    <Formulario>
      <form onSubmit={handleSubmit} >
        <div className='labelyimput'>
            <label htmlFor="nombre" >Nombre</label>
            <input id="nombre" type="text" name="nombre" required />
            <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
        </div>

        <div className='labelyimput'>
            <label htmlFor="email" >Correo Electrónico</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Correo" field="email" errors={state.errors} />
        </div>

        <div className='labelyimput'>
            <label htmlFor="telefono" >Número de Teléfono</label>
            <input id="telefono" type="tel" name="telefono" required />
            <ValidationError prefix="Teléfono" field="telefono" errors={state.errors} />
        </div>

        <div className='labelyimput'>
            <label htmlFor="ciudad" >Ciudad</label>
            <input id="ciudad" type="text" name="ciudad" required />
            <ValidationError prefix="Ciudad" field="ciudad" errors={state.errors} />
        </div>

        <div className='labelyimput'>
            <label htmlFor="mensaje" >Mensaje</label>
            <textarea id="mensaje" name="mensaje" required />
            <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
        </div>
        <button type="submit" disabled={state.submitting} >Enviar</button>
      </form>
    </Formulario>
  );
}

export default ContactForm;

const Formulario = styled.div`

  form {
    width: 900px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 1000px) {
        width: 700px;
    }
    @media(max-width: 800px) {
        width: 600px;
    }
    @media(max-width: 700px) {
        width: 550px;
    }
    @media(max-width: 600px) {
        width:290px;
    }
  }
  .labelyimput {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 80%;
    padding:0;
    margin-bottom: 10px;
    @media(max-width: 800px) {
        width: 95%;
    }
    @media(max-width: 600px) {
        flex-direction: column;
        width: 100%;
        margin-bottom: 5px;
    }

  }
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    @media(max-width: 600px) {
        margin-bottom: 5px;
    }
  }
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #121315;
    color: white;

  }
  textarea {
    width: 270px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    padding:5px;
    background-color: #121315;
    color: white;


  }
  button {
    width: 230px;
    height: 40px;
    background-color: #4CAF50;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;

    &:hover 
    {background-color: #fff;
    transition: background-color 0.3s;
    color:  #4CAF50; }

    @media(max-width: 600px) {

        margin-top: 5px;
    }
  }
`
