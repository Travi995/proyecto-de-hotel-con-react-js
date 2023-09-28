import React, { useState } from "react";
import Iconimg from "./../../assets/Iconolapiz.png";
import { MdPhoneAndroid as Cell } from "react-icons/md";
import { HiSearch as Iconsearch } from "react-icons/hi";

import Btnnavbar from "../Btnnavbar/Btnnavbar";
import Ventanaemergente from "../Ventanaemergente/Ventanaemergente";
import "./Menunavbar.css";

const Menunavbar = ({ classmenu,  mostrarse,eventoSearch }) => {
  const [showVentana, setShowVentana] = useState(false);
  

  const cambiarEstadoVentana = (event) => {
    let elemento = event.target
    const value = showVentana 

    if (elemento.classList.contains('active')) {
       
      elemento.classList.remove('active')
      } else {
        
        elemento.classList.add('active')
        }

    
    setShowVentana(!value)
   
    }

    
  return (
    <ul className={`${classmenu} ${!mostrarse?'ShowMenu': ''}`}>
      <div>
              <Btnnavbar Srcimg={Iconimg} text="BOOK NOW"
                  evento={(event)=>cambiarEstadoVentana(event)}
                  clasebtn="Borderright" />
              <Ventanaemergente  isOpen={showVentana} />
      </div>
      <Btnnavbar
        Srcimg={Cell}
        text="+1-800-1234-567"
        claseicon={"Iconcell"}
        clasetext="Numbercell"
        evento={()=>alert('+1-800-1234-567')}
      />
      <Btnnavbar Srcimg={Iconsearch} claseicon="Iconsearch" evento = {()=>eventoSearch()} />
    </ul>
  );
};

export default Menunavbar;
