import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function ButtonWa () {
    return (

        <ButtonWaChat>
            <a href="https://api.whatsapp.com/send?phone=584248098877&text=Hola,%20somos%20Creación%20Textil.%20Estamos%20para%20ayudarte:" className="btn-wsp" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </ButtonWaChat>
    )
}
export default ButtonWa

const ButtonWaChat = styled.div`
.btn-wsp{
    position:fixed;
    width:60px;
    height:60px;
    line-height: 63px;
    bottom:25px;
    right:25px;
    background:#25d366;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:35px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.3);
    z-index:100;
    transition: all 300ms ease;
}
.btn-wsp:hover{
    background: #272727;
}
@media only screen and (min-width:320px) and (max-width:768px){
    .btn-wsp{
        width:63px;
        height:63px;
        line-height: 66px;
	}
}
`