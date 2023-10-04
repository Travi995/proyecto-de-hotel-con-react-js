import React from "react";
import Textnavbar from "../Textnavbar/Textnavbar";
import Input from "../Input/Input";
import Btn from "../Btn/Btn";
import './Ventanaemergente.css'


const Ventanaemergente = ({isOpen }) => {

    const validarCampo = (event) => {
        const elemento = event.target
        
        if (elemento.value === '') {
            console.log('la cadena de texto esta vacia')
        }

    }


    return <div  className={`Ventanaemergente ${isOpen?'show':''} `}>
        <Textnavbar text='Book now' claseComp='TextComp' clase='Titulo' />
         <Input  TextInt='Check in' evento={(event)=>{validarCampo(event)}} /> 
         <Input  TextInt='Check out' evento={(event)=>{validarCampo(event)}} /> 
         <Input  TextInt='Check in' evento={(event)=>{validarCampo(event)}} /> 
         <Btn  ClaseBTn='BtnEmergente' TextBtn='Book Now'/> 
    </div>
}

export default Ventanaemergente