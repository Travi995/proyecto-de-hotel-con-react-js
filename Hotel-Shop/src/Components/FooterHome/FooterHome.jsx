import React from "react";
import FooternavigationElement from "../FooterNavigationElement/FooterNavigationElement";
import { linksFooter } from './../../data/datosFooter'
import FooterContact from "../FooterContact/FooterContact";
import './FooterHome.css'

const FooterHome = () => {

    return <div className="FooterHome">
        <div className="ElementsFooter">
            <FooternavigationElement Title='Quick Links' elements={linksFooter} />
            <FooterContact Title='Contact Information' />
        </div>
        <div className="Copyrigth">
            <span >&copy; 2023 All Rights Reserved. Terms of Use  and Policy Privacy</span>
        </div>
    </div>
}

export default FooterHome