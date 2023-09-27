import React from "react";

import './Textnavbar.css'


const Textnavbar = ({ text, claseComp,clase }) => {
    
    return<div className={claseComp}>
    <span className={`Textnavbar ${clase}`}>
        {text}
    </span>
    </div>
}

export default Textnavbar 