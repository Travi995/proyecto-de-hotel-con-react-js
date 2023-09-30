import React, { useState }        from "react";
import Hamburger                  from 'hamburger-react'
import { HiSearch as Iconsearch } from "react-icons/hi";
import { MdClear as IconCerrar }  from 'react-icons/md'

import logoInverse from '../../assets/logo-inverse-165x38.png'
import Icononavbar from "../Icononavbar/Icononavbar";
import MenuOptions from "../MenuOptions/MenuOptions";
import Menunavbar  from "../Menunavbar/Menunavbar";
import Btnnavbar   from "../Btnnavbar/Btnnavbar";
import Input       from "../Input/Input";

import './Interiornavbar.css'



const Interiornavbar = () => {
    const [viewNav, setviewNav] =   useState(true)
    const [viewMenu, setViewMenu] = useState(false)
    const [viewMenuOptions, setViewMenuOptions] = useState(false)

    const cambiarVistaNav = () => {
        let valor = viewNav
        setviewNav(!viewNav)
        ocultarMenuInicial()
    }

    const ocultarMenuInicial = () => {
        let valor = viewMenu
        setViewMenu(!valor)
    }

    const showMenuOptions = () => {
        let elemento = viewMenuOptions
        
        ocultarMenuInicial()
        setViewMenuOptions(!elemento)
    }


    return <div className={`Interiornavbar ${!viewNav ? 'JusiticarInterior' : ''}`}>
        <div className={`BarraBusqueda ${!viewNav ? 'ShowBarra' : ''}`}>
            <Btnnavbar Srcimg={Iconsearch} claseicon="Iconsearch" />
            <div className="BarraSearchGeneral">
                <Input ClassInput='InputSearch' TextInt='Search...' />
            </div>
            <div className="IconCerrar" onClick={() => { cambiarVistaNav() }}>
                <IconCerrar className="Cerrar" />
            </div>
        </div>

        <Icononavbar srcImagen={logoInverse} mostrarse={viewNav} />
        <div className={`AgrupNav ${!viewNav ? 'TamannoAuto' : ''} `}>
            <Menunavbar classmenu='Menunavbarini' mostrarse={viewMenu} eventoSearch={() => cambiarVistaNav()} />

            {/* menu desplegable */}
            <MenuOptions mostrarMenu={ viewMenuOptions} />

            <div className="Iconoption" onClick={()=>{showMenuOptions()}}>
                <Hamburger />
            </div>
        </div>



    </div>
}

export default Interiornavbar