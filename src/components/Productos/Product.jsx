import React from 'react'
import styled from 'styled-components'

function Product  (props)  {
  return (
    <ProductoRenderizados>
        <img src={props.img} />
        <h2>{props.title}</h2>
    </ProductoRenderizados>
  )
}

export default Product

const ProductoRenderizados = styled.div `

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
  width: 250px;
  height: 250px;
}
h2 {
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
}
`