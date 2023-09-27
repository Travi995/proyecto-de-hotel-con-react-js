import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import logoInverse from '../../assets/logo-inverse-165x38.png'
import Icononavbar from "../Icononavbar/Icononavbar";
import Menunavbar from "../Menunavbar/Menunavbar";
import './Interiornavbar.css'

const Interiornavbar = () => {
    const { viewnav, setViewnav } = useState(false)

    return <div className="Interiornavbar">
        <Icononavbar srcImagen={logoInverse} />
        <div className="Agrupnav">
            <Menunavbar classmenu='Menunavbarini' />
            <div className="Iconoption">
                <Hamburger />
            </div>
        </div>
    </div>
}

export default Interiornavbar