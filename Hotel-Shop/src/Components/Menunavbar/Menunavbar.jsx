import React from "react";

import Iconimg from './../../assets/Iconolapiz.png'
// import Cellicon from './../../assets/iconcell.png'
// import { MdSmartphone as Cell } from 'react-icons/md';
import { HiSearch as Searchicon } from 'react-icons/hi'
import {MdOutlinePhoneAndroid as Cellicon} from'react-icons/md'
import './Menunavbar.css'
import Btnnavbar from "../Btnnavbar/Btnnavbar";


const Menunavbar = () => {
    // console.log(Pencil)
    return <ul className="Menunavbar">
                <Btnnavbar  Srcimg={Iconimg}     text='BOOK NOW' claseicon = 'Icondetalles'        clasebtn='Borderright' /> 
                
      
            </ul>
}

export default Menunavbar