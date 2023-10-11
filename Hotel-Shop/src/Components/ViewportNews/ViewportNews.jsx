import React from "react";
import ItemNews from "../ItemNews/ItemNews";
import './ViewportNews.css'


const ViewportNews = () => {
    
    return <div className="ViewportNews">
        <h2 className="TitleNews">Latest News</h2>
        <div className="ElementNews">
            <ItemNews imagen='./src/assets/latest-news-1-571x353.jpg'
                title='6 Tips to Book the Best Hotel for You' descriptionNews='Travelers today are spoiled for choice when it comes to booking a hotel. Booking the best hotel goes beyond just booking the cheapest, or the most centrally located. Heres how to...'
            />
            <ItemNews imagen='./src/assets/latest-news-2-571x353.jpg'
                title='6 Tips to Book the Best Hotel for You' descriptionNews='These days, travel is no Sunday picnic and when you finally stumble into the lobby of your hotel, you may be tired, dirty, and in a hurry to get cleaned up, get some sleep, or get to the first...'
            />
        </div>
    </div>
}

export default ViewportNews
