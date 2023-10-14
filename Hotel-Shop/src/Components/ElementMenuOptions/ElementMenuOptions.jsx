import React, { useContext, useState } from "react";
import './ElementMenuOptions.css'
import { GlobalContext } from "../../Contexts/GlobalContext/GlobalContext";



const ElementMenuOptions = ({ Text, Icon, classVentanaEmergente, items,TextClass, evento,eventoMenu }) => {

    const [viewEmergente, setViewEmergente] = useState(false)
    const cambiarEmergente = (arg) => {
        
        setViewEmergente(arg)
    }
    

    return <section
        className="ElementMenu"
        onMouseEnter={() => cambiarEmergente(true)}
        onMouseLeave={() => cambiarEmergente(false)}>

        <span className="TextElementMenu" onClick={()=>eventoMenu()}>{Text}</span>

        {Icon != undefined ? <div className="IconFlecha"><Icon /></div> : ''}

        {items != undefined ? (
            <div className={`VentanaItemsNav ${classVentanaEmergente} 
                ${viewEmergente == true ? 'ShowElements' : ''}`}
                onMouseEnter={() => cambiarEmergente(true)}>

                {items.map((element, index) => {
                    
                    return <div key={index} className={TextClass} onClick={()=>evento()}>{element}</div>;
                })}

            </div>
        ) : (
            ''
        )}
    </section>


}

export default ElementMenuOptions