import React from "react";
import ItemServices from "../ItemServices/ItemServices";
import { BiSwim     as IconNadar }  from 'react-icons/bi'
import { GrWifi     as IconWifi }   from 'react-icons/gr'
import { TbChefHat  as IconChef }   from 'react-icons/tb'
import {IoMdBicycle as IconBicycle} from 'react-icons/io'
import './Viewportservices.css'


const Viewportservices = () => {
    
    return <div className="ViewportServices">
        
        <h2 className="ServicesTitle"><i>Right Services </i>for Great Customers</h2>
        <div className="ElementServices">
            <ItemServices Icon={IconNadar} TitleItem='Swimming Pool' TextItem='One of the main attractions at the hotel is our extensive, luxurious 20-metre indoor swimming pool.' /> 
            
            <ItemServices Icon={IconWifi} TitleItem='Free Wi-Fi' TextItem='We provide our guests with free high-speed Wi-Fi connection throughout the whole hotel area.' /> 
            
            <ItemServices Icon={IconChef} TitleItem='Restaurants' TextItem='Restaurants at Lux Hotel offer a vast choice of great dishes that can satisfy even the most exquisite tastes.' /> 
            
            <ItemServices Icon={IconBicycle } TitleItem='Bike Rentals' TextItem='Our hotel also offers bike rental services to our guests and visitors. We provide bikes at very affordable prices.'/> 
        </div>
 </div>
}

export default Viewportservices
