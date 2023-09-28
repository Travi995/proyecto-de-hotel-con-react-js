import React from "react";
import Textnavbar from "../Textnavbar/Textnavbar";

import Input from "../Input/Input";
import './Ventanaemergente.css'
import Btn from "../Btn/Btn";



const Ventanaemergente = ({isOpen }) => {

    const validarCampo = (event) => {
        const elemento = event.target
        
        if (elemento.value === '') {
            console.log('la cadena de texto esta vacia')
        }

    }


    return <div  className={`Ventanaemergente ${isOpen?'show':''} `}>
        <Textnavbar text='Book now' claseComp='TextComp' clase='Titulo' />
         <Input ClaseComp='InputComponentPosition1' TextInt='Check in' evento={(event)=>{validarCampo(event)}} /> 
         <Input ClaseComp='InputComponentPosition2' TextInt='Check out' evento={(event)=>{validarCampo(event)}} /> 
         <Input ClaseComp='InputComponentPosition3' TextInt='Check in' evento={(event)=>{validarCampo(event)}} /> 
        <Btn  ClaseBTn='BtnEmergente' TextBtn='Book Now'/>
    </div>
}

export default Ventanaemergente