import React from "react";
import './Icononavbar.css'

const Icononavbar = ({srcImagen}) => {
    return <div className="Espacioicono">
        <img src={srcImagen} className="Icono"></img>
    </div>
}

export default Icononavbar