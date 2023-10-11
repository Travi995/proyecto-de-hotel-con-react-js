import React from "react";
import './Tarjeta.css'


const Tarjeta = ({imagen,precio,disponibilidad, tipoHabitacion}) => {
    
    return <div className={`Tarjeta`}>
        <section className="ImagenRooms">
        <img  src={imagen} alt="" />
        </section>
        <section className="InfoRooms">
            <span className='Precio'>From {precio}$</span>
            <span className="DisponibilidadRooms">{disponibilidad} guests</span>
        </section>

        <div >
            <span className="TipoRoom">{tipoHabitacion}</span>
        </div>        

    </div>
}

export default Tarjeta