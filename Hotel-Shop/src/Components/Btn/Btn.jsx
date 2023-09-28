import React from "react";
import './Btn.css'


const Btn = ({ClaseBTn,TextBtn}) => {
    return <div className={`Button ${ClaseBTn}`}>
        {TextBtn}
    </div>
}

export default Btn