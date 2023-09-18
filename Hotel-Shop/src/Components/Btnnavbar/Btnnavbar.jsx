import React from 'react'
import Textnavbar from './../Textnavbar/Textnavbar.jsx'
import Imgnavbar from '../Imgnavbar/Imgnavbar.jsx'
import './Btnnavbar.css'


const Btnnavbar = ({Srcimg,text , evento, clasebtn,claseicon,clasetext}) => {
    
    return <li className={`Btnnavbar ${clasebtn}`} onClick={evento}>
            <Imgnavbar srcimg={Srcimg}/>
        {/* <Srcimg className={`Iconnavbar ${claseicon}`} /> */}
        <Textnavbar text={text} />
    </li>
}


export default Btnnavbar
