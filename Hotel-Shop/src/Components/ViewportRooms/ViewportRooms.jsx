import React from 'react'
import Tarjeta from '../Tarjeta/Tarjeta'
import Btn from '../Btn/Btn'
import './ViewportRooms.css'



const ViewportRooms = () => {
    
    return <div className='ViewportRooms'>
        <h2 className='TitleRooms'> Our <b>Rooms</b></h2>
        <div className='ContenidoRooms'>
            <Tarjeta imagen='./src/assets/job-portal-2-370x264.jpg' precio='25' disponibilidad='1' tipoHabitacion='Single Room' />
            <Tarjeta imagen='./src/assets/job-portal-3-370x264.jpg' precio='35' disponibilidad='2' tipoHabitacion='Double Room' />
            <Tarjeta imagen='./src/assets/job-portal-4-370x264.jpg' precio='45' disponibilidad='3' tipoHabitacion='Family Room'/>
        </div>
        <section className='ViewAllRooms'>
            <Btn TextBtn='VIEW ALL ROOMS' ClaseBTn='BtnRooms'/>
        </section>

    </div>
}

export default ViewportRooms