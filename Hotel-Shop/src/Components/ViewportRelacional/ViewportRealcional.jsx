import React from "react";
import './ViewportRelacional.css'
import Btn from "../Btn/Btn";


const ViewportRelacional = () => {

    return <div className="ViewportRelacional">
        <div className="TitleViewportRelacional">
            <span className="TitleRelacional">Relax and Enjoy</span>
            <span className="TitleRelacional SecondTitle">Your Holiday</span>
        </div>
        <div className="DescriptionRelacional">
        <p >With a variety of activities and amenities available at our hotel, you will surely have a great stay at our city and enjoy your holiday.</p>
        </div>
        <Btn TextBtn='Read More' ClaseBTn='BtnRelacional'/>
    </div>
}

export default ViewportRelacional