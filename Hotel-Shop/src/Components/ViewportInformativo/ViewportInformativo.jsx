import React from "react";
import './ViewportInformativo.css'


const ViewportInformativo = () => {
    
    return <div className="ViewportInformativo">
        <div className="ContenedorVisual">
            <img src="./src/assets/viewpor2.jpg" alt="" />
        </div>
        <div className="ContenedorInformativo">
            <span className="TitleInfo"><b>Relax at Our</b> <i>Hotel</i> </span>
            <p className="Description">Lux Hotel and Suites is a family-owned Boutique Hotel that desires to cater and provide guests with personalized hospitality based on what they prefer.</p>
            <p className="Description">Whether the guest is looking for quiet time and lots of privacy or seeking energetic, friendly environment in the most delightful place away from home, we can provide it.</p>

            <div className="FirmaDigital">
                <img src="./src/assets/logo-painting-136x61.png" />
                <section className="PersonBoss">
                    <span className="NameBoss">Oliver Morgan</span>
                    <span className="CargoBoss">General Manager, Lux Hotel</span>
                </section>

            </div>
        </div>
    </div>
}

export default ViewportInformativo