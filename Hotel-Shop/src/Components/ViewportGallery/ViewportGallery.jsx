import React from "react";
import ImgGallery from "../ImgGallery/ImgGallery";
import './ViewportGallery.css'


const ViewportGallery = () => {

    return <div className="ViewportGallery">
        <h1 className="GalleryTitle">Gallery</h1>
        <div className="CuerpoGallery">
            <div className="GalleryImages">
                <ImgGallery classItem='item1' img='./src/assets/gallery-masonry-condensed-1-390x576.jpg'
                    titleImage='Pool & Spa' descriptionImage='Health & Relaxation' />
                
                <ImgGallery classItem='item2' img='./src/assets/gallery-masonry-condensed-2-390x288.jpg'
                    titleImage='Breathtaking Exterior' descriptionImage='Modern & Vibrant Design' />
                
                <ImgGallery classItem='item3' img='./src/assets/gallery-masonry-condensed-3-390x576.jpg'
                    titleImage='Friendly Atmosphere' descriptionImage='Everything for a Great Stay'/>

                <ImgGallery classItem='item4' img='./src/assets/gallery-masonry-condensed-4-390x288.jpg'
                    titleImage='Spectacular Interior' descriptionImage='Unique Room Appearance' />
                
                <ImgGallery classItem='item5' img='./src/assets/gallery-masonry-condensed-5-390x576.jpg'
                    titleImage='Comfortable Rooms' descriptionImage='Experience the True Hospitality' />

                <ImgGallery classItem='item6' img='./src/assets/gallery-masonry-condensed-6-390x288.jpg'
                    titleImage='Hotel Venues' descriptionImage='Perfect for Any Events'/>
            </div>
        </div>
    </div>
}

export default ViewportGallery 