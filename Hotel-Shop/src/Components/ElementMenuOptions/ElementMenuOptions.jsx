import React, { useState } from "react";
import './ElementMenuOptions.css'


const ElementMenuOptions = ({ Text, Icon, classVentanaEmergente, items,TextClass }) => {

    const [viewEmergente, setViewEmergente] = useState(false)
    const cambiarEmergente = (arg) => {
        
        setViewEmergente(arg)
    }


    return <section
        className="ElementMenu"
        onMouseEnter={() => cambiarEmergente(true)}
         onMouseLeave={() => cambiarEmergente(false)}
    >

        <span className="TextElementMenu">{Text}</span>

        {Icon != undefined ? <div className="IconFlecha"><Icon /></div> : ''}

        {items != undefined ? (
            <div className={`VentanaItemsNav ${classVentanaEmergente} 
                ${viewEmergente == true ? 'ShowElements' : ''}`}
                onMouseEnter={() => cambiarEmergente(true)}
            // onMouseLeave={() => cambiarEmergente(false)}
            >

                {items.map((element, index) => {
                    return <span key={index} className={`TextClass ${TextClass+index}`}>{element}</span>;
                })}

            </div>
        ) : (
            ''
        )}
    </section>


}

export default ElementMenuOptions