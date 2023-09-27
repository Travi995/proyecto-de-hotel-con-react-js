import React, { useState } from "react";
import Iconimg from "./../../assets/Iconolapiz.png";
import { MdPhoneAndroid as Cell } from "react-icons/md";
import { HiSearch as Iconsearch } from "react-icons/hi";

import Btnnavbar from "../Btnnavbar/Btnnavbar";
import Ventanaemergente from "../Ventanaemergente/Ventanaemergente";
import "./Menunavbar.css";

const Menunavbar = ({ classmenu }) => {
  const [showVentana, setShowVentana] = useState(false);
  const [showSearch, setShowSearch] = useState(false)

    const cambiarEstadoVentana = () => {
        const value = showVentana 
        setShowVentana(!value)
    }

    const cierreForzado = (event) => {
        // Obtenemos el elemento relacionado al evento (elemento que está debajo del cursor)
        const relatedTarget = event.relatedTarget;
    
        // Comprobamos si el elemento relacionado es nulo (cursor saliendo del componente padre)
        if (!event.currentTarget.contains(relatedTarget)) {
          // El cursor está saliendo del componente padre
         
        }
      };
    
  //estado de la barra de busqueda
  const cambiarEstadoSearch = () => {
    const value = showSearch
    setShowSearch(!value)
    
  }
  
  
  return (
    <ul className={classmenu}>
      <div>
              <Btnnavbar Srcimg={Iconimg} text="BOOK NOW"
                  evento={cambiarEstadoVentana}
                  clasebtn="Borderright" outEvent={(arg)=>cierreForzado(arg)} />
              <Ventanaemergente close={()=>cambiarEstadoVentana()} isOpen={showVentana} />
      </div>
      <Btnnavbar
        Srcimg={Cell}
        text="+1-800-1234-567"
        claseicon={"Iconcell"}
        clasetext="Numbercell"
        evento={()=>cambiarEstadoSearch()}
      />
      <Btnnavbar Srcimg={Iconsearch} claseicon="Iconsearch" />
    </ul>
  );
};

export default Menunavbar;
