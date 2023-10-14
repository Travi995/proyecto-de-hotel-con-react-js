import React, { useContext } from "react";

import { MdKeyboardArrowDown as IconFlecha } from 'react-icons/md'
import ElementMenuOptions from "../ElementMenuOptions/ElementMenuOptions";
import { roomsElements, blogElements, pagesElements } from './../../data/Datosnavbar'
import './MenuOptions.css'
import { GlobalContext } from "../../Contexts/GlobalContext/GlobalContext";



const MenuOptions = ({ mostrarMenu }) => {
    
    const {setViewportLayout} = useContext(GlobalContext)
    

    return <ul className={`MenuOptions ${mostrarMenu ? 'Show' : ''}`}>
        <ElementMenuOptions Text='Home' eventoMenu ={()=>setViewportLayout(0)} />
        
        <ElementMenuOptions Text='About' />
        
        <ElementMenuOptions Text='Rooms'  Icon={IconFlecha} items={roomsElements} classVentanaEmergente='RoomsElements' TextClass='RoomsText' />
        
        <ElementMenuOptions Text='Blog' Icon={IconFlecha} items={blogElements}
            classVentanaEmergente='BlogElements' TextClass='BlogText'                />
        
        <ElementMenuOptions Text='Pages' Icon={IconFlecha} items={pagesElements}            classVentanaEmergente='PagesElements' TextClass='PagesText' evento ={()=>setViewportLayout(1)}   />
        
        <ElementMenuOptions Text='Contact' />
    </ul>
}

export default MenuOptions