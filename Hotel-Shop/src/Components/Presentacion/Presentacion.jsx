import React from "react";
import Input from "../Input/Input";
import Btn from "../Btn/Btn";
import './Presentacion.css'


const Presentacion = () => {
    

    return <div className="PresentacionHome">
        <div className="ElementPresentacionHome">
            <span className="Intro" >DISCOVER COSY ROOMS</span>
            <span className="IntroInfo">PERFECT FOR ANY TRIPS</span>
            
        </div>
        <div className='FormHome'>
            <Input  TextInt='Check in' ClassInput='InputHome' /> 
            <Input  TextInt='Check out' ClassInput='InputHome'  /> 
            <Input  TextInt='Guests'  ClassInput='InputHome'/> 
            <Btn  ClaseBTn='BtnHome' TextBtn='Book Now'/>
            </div>
    </div>
}

export default Presentacion