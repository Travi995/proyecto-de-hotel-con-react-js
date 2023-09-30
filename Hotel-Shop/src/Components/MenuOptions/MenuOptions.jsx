import React from "react";

import { MdKeyboardArrowDown as IconFlecha } from 'react-icons/md'
import ElementMenuOptions from "../ElementMenuOptions/ElementMenuOptions";
import './MenuOptions.css'



const MenuOptions = ({ mostrarMenu }) => {
    
    const roomsElements = ['Single Room']
    const blogElements  = ['Grid Blog', 'Sidebar BLog', 'Single Blog Post'] 
    const pagesElements = ['']
    
    return <ul className={`MenuOptions ${mostrarMenu?'Show': ''}`}>
        <ElementMenuOptions Text='Home'    />
        <ElementMenuOptions Text='About'   />
        <ElementMenuOptions Text='Rooms'   Icon={IconFlecha} items={roomsElements}  classVentanaEmergente = 'RoomsElements' TextClass='RoomsText'/>
        <ElementMenuOptions Text='Blog' Icon={IconFlecha} items={blogElements}
            classVentanaEmergente = 'BlogElements' TextClass='BlogText' />
        <ElementMenuOptions Text='Pages'   Icon={IconFlecha}/>
        <ElementMenuOptions Text='Contact' />
    </ul>
}

export default MenuOptions