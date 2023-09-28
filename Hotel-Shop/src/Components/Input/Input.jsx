import React from "react";
import './Input.css'

const Input = ({ClaseComp,ClassInput,TextInt, evento}) => {
    
    return <div className={ClaseComp}>
        <input type="text" className={`InputComp ${ClassInput}`} placeholder={TextInt} onClick={(event)=>evento(event)}/>
        
        </div>
        
}

export default Input