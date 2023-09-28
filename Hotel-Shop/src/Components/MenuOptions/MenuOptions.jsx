import React from "react";

import {MdKeyboardArrowDown as IconFlecha} from 'react-icons/md'
import './MenuOptions.css'


const MenuOptions = ({mostrarMenu}) => {
    
    return <ul className={`MenuOptions ${mostrarMenu?'Show': ''}`}>
        
    </ul>
}

export default MenuOptions