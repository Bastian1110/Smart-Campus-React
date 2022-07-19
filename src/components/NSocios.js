import React from "react";
import EscuelaDeNegocios from "../assets/images/EscuelaDeNegocios.jpg";
import exactec from "../assets/images/exactec.jpg";
import Sigsa from "../assets/images/Sigsa.jpg";
import EscuelaDeArte from "../assets/images/EscuelaDeArte.jpg";
import EscuelaDeIngenieria from "../assets/images/EscuelaDeIngenieria.jpg";
import TheClimate from "../assets/images/TheClimate.jpg";
import AtizapanDeZaragoza from "../assets/images/AtizapanDeZaragoza.png";
import EscuelaDeMedicina from "../assets/images/EscuelaDeMedicina.jpg";
import canacintra from "../assets/images/canacintra.jpg";
import EscuelaDeHumanidades from "../assets/images/EscuelaDeHumanidades.jpg";


function Nuevo(){
    return (
        <div>
            <div className="mb-15 mt-15 my-20 mx-20">
            <img src={EscuelaDeMedicina} className="img-responsive w-15 inline-block mx-20"/>
            <img src={EscuelaDeHumanidades} className="img-responsive w-15 inline-block mx-20"/>
            <img src={EscuelaDeIngenieria} className="img-responsive w-15 inline-block mx-20"/>
            </div>
            <div className="my-30 mx-20">
                <img src={EscuelaDeNegocios} className="img-responsive w-15 inline-block"/>
                <img src={EscuelaDeArte} className="img-responsive w-15 inline-block"/>
                <img src={exactec} className="img-responsive w-15 inline-block"/>
                <img src={AtizapanDeZaragoza} className="img-responsive w-15 inline-block"/>
            </div>
            <div className="place-items-center">
                <img src={Sigsa} className="img-responsive w-10 inline-block"/>
                <img src={TheClimate} className="img-responsive w-10 inline-block"/>
                <img src={canacintra} className="img-responsive w-10 inline-block"/>
            </div>
        </div>
    );
}

export default Nuevo;
