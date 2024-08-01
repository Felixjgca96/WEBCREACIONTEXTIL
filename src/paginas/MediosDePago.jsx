import React from "react";
import styled from "styled-components";

function MediosDePago()  {
  return (
    <MediosDePagoSection>
        <div className="Container">
            <h2 className="MediosTitulo">
                Medios de Pago
            </h2>
            <div className="MediosContainer">
                <div className="PagoContainer">
                    <img src="./zelle.png" alt="" />
                    <h3>Zelle</h3>
                </div>
                <div className="PagoContainer">
                    <img src="./paypal.png" alt="" />
                    <h3>PayPal</h3>
                </div>
                <div className="PagoContainer">
                    <img src="./binance.png" alt="" />
                    <h3>Binance</h3>
                </div>
                <div className="PagoContainer">
                    <img src="./banco.png" alt="" />
                    <h3>Tranferencia</h3>
                </div>
                <div className="PagoContainer">
                    <img src="./efectivo.png" alt="" />
                    <h3>Efectivo</h3>
                </div>
                <div className="PagoContainer">
                    <img src="./pagomovil.png" alt="" />
                    <h3>Pago Movil</h3>
                </div>

            </div>



        </div>


    </MediosDePagoSection>
  );
}

export default MediosDePago

const MediosDePagoSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 170px;
margin-bottom:30px ;


@media(max-width: 400px) {

width: 99%;
}


.Container {
    position: relative;
    border: 2px solid #ccc;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media(max-width: 400px) {
    width: 80%;
    }
.MediosTitulo {
    font-size: 38px;
    font-weight:700 ;
    text-align: center;
    margin: 30px;
    position: absolute;
    top: -65px;
    z-index: 2;
    background-color: black;
    padding-left: 5px;
    padding-right: 5px;
    border-radius:10px ;
    border: 2px solid #ccc;

    @media(max-width: 600px) {

    font-size: 28px;
    top: -55px;
    }
    @media(max-width: 400px) {

    font-size: 22px;
    top: -50px;
    }



}

.MediosContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 50px;
    @media(max-width: 400px) {

    flex-direction:column;
    margin-top:30px;
    gap: 10px;
    padding-bottom:10px;

    }

}

.PagoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color:#ccc ;
    border-radius:70px;
    width: 30%;
    min-width: 140px;
    height: 160px;
    margin-bottom: 20px;
    &:hover 
    {background-color: #fff;
    transition: background-color 0.3s;

    }
    @media(max-width: 400px) {

    flex-direction:row;
    min-width: 220px;
    height: 60px;
    justify-content: space-evenly;
    padding-left:5px;
    padding-right:5px;
    margin-bottom: 0px;

    }

}

.PagoContainer img {
    width: 90px;
    height: 80px;
    @media(max-width: 400px) {

    width: 45px;
    height: 45px;
    margin:5px;

    }
}

.PagoContainer h3 {
    color: black;

    @media(max-width: 400px) {

    margin:5px;
    font-size: 17px;

    }


}

}
`
