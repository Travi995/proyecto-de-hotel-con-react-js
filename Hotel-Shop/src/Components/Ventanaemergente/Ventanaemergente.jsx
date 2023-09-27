import React from "react";
import Textnavbar from "../Textnavbar/Textnavbar";

import Input from "../Input/Input";
import './Ventanaemergente.css'



const Ventanaemergente = ({isOpen ,close}) => {
    
    return <div  onMouseOut={()=>close()}  className={`Ventanaemergente ${isOpen?'show':''} `}>
        <Textnavbar text='Book now' claseComp='TextComp' clase='Titulo' />
        
        {/* <Input ClaseComp='InputComponentPosition' TextLabel='Check in'/> */}
        

    </div>
}

export default Ventanaemergente