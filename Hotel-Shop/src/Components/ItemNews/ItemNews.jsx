import React from "react";
import './ItemNews.css'

const ItemNews = ({imagen,title,descriptionNews}) => {
    
    return <div className="ItemNews">
        <section>
            <img src={imagen} alt="" />
        </section>
        <section className="TitleNewElement">
            <span >{ title}</span>
        </section>
        <section className="ItemNewsInfo">
            <span className="">by Mike Barnes</span>
            <span>Apr 25, 2018 at 3:13 pm</span>
            <span>News</span>
        </section>
        <section className="ItemNewsDescription">
            <p>{descriptionNews }</p>
        </section>
    </div>
}

export default ItemNews