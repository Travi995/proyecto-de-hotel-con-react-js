import React from "react";
import './Input.css'

const Input = ({ClaseComp,ClassInput,TextLabel}) => {
    
    return <div className={ClaseComp}>
        <input type="text" className={`InputComp ${ClassInput}`} />
        <label for="InputComp" className="LabelInput">{ TextLabel}</label>
        </div>
        
}

export default Input