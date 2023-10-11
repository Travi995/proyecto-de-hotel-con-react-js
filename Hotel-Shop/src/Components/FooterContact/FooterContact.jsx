import React from "react";
import './FooterContact.css'
import {FaLocationDot as IconLocation} from 'react-icons/fa6'
import {IoCall as IconCall} from 'react-icons/io5'
import {HiOutlineMail as IconEmail} from 'react-icons/hi'

const FooterContact = ({Title}) => {
    
    return <div className="FooterContact">
        <h2 className="TitleFooter">{Title}</h2>
        <section className="ContactElements">
            <div>
                <span><IconLocation /></span>
                <span className="InfoFooterContact">2130 Fulton Street San Diego, </span>
                <span>CA  94117-1080 USA</span>
            </div>

            <div>
                <span><IconCall /></span>
                <span className="InfoFooterContact">1-800-1234-678</span>
                <span className="">1-800-8765-098</span>
            </div>

            <div>
                <span><IconEmail /></span>
                <span className="InfoFooterContact">info@demolink.org</span>
                
            </div>

        </section>
    </div>
}

export default FooterContact