import React from "react";

import logoInverse from '../../assets/logo-inverse-165x38.png'
import Icononavbar from "../Icononavbar/Icononavbar";
import Menunavbar from "../Menunavbar/Menunavbar";
import './Interiornavbar.css'

const Interiornavbar = () => {
    

    return <div className="Interiornavbar">
        <Icononavbar srcImagen={logoInverse} />
        <Menunavbar/>
    </div>
}

export default Interiornavbar