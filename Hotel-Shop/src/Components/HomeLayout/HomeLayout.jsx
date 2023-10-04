import React from "react";
import Presentacion from "../Presentacion/Presentacion";
import ViewportInformativo from "../ViewportInformativo/ViewportInformativo";
import './HomeLayout.css'



const HomeLayout = () => {
    
    return <div className="HomeLayout">
        <Presentacion />
        <ViewportInformativo/>
    </div>
}

export default HomeLayout