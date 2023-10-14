import React from "react";
import Navbar from '../Navbar/Navbar'
import Presentacion from "../Presentacion/Presentacion";
import ViewportInformativo from "../ViewportInformativo/ViewportInformativo";
import ViewportRooms from "../ViewportRooms/ViewportRooms";
import ViewportGallery from "../ViewportGallery/ViewportGallery"; 
import Viewportservices from "../ViewportServices/ViewportServices";
import ViewportRelacional from "../ViewportRelacional/ViewportRealcional";
import ViewportNews from "../ViewportNews/ViewportNews";
import FooterHome from "../FooterHome/FooterHome";

import './HomeLayout.css'



const HomeLayout = () => {
    
    return <div className="HomeLayout">
        <Navbar  />
        <Presentacion />
        <ViewportInformativo />
        <ViewportRooms />
        <ViewportGallery />
        <Viewportservices/> 
        <ViewportRelacional /> 
        <ViewportNews />
        <FooterHome/>
    </div>
}

export default HomeLayout