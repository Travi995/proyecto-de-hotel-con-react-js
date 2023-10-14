import React from "react";
import './FooternavigationElement.css'

const FooternavigationElement = ({ Title, elements }) => {

    return <div className="FooterNavigationElement">
        
            <h2 className="TitleFooter">{Title}</h2>

        <div className="LinksFooter">
            {elements.map((element, index) => {
                return  <span key={index}>{ element}</span>
            })}
        </div>

    </div>
}

export default FooternavigationElement