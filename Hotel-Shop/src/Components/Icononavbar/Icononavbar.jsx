import React from "react";
import './Icononavbar.css'

const Icononavbar = ({ srcImagen, mostrarse }) => {
    console.log('el texto de mostrar es: ' + mostrarse)
    return <div className={`Espacioicono ${(mostrarse)?'Show':''} `}>
        <img src={srcImagen} className="Icono" />
    </div>
}

export default Icononavbar