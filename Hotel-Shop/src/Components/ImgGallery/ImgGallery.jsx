import React from "react";
import './ImgGallery.css'

const ImgGallery = ({ img,classItem,titleImage ,descriptionImage }) => {
    
    return <div className={`ImgGallery ${classItem}`}>
        <img className="ImagenGall" src={img} alt="" />
        <div className='TextImageGallery'>
            <span className="TitleImageGallery">{ titleImage}</span>
            <span className="DescriptionImageGallery">{descriptionImage }</span>
        </div>
        </div>
}

export default ImgGallery