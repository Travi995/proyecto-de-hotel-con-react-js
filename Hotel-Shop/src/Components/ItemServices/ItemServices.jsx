import React from "react";
import './ItemServices.css'

const ItemServices = ({Icon,TitleItem,TextItem}) => {
    
    return <div className="ItemServices">
        <div className='IconItemServices'>
            <Icon />
        </div>
        <section className="CuerpoItem">
            <span className="TitleCuerpoItem">{TitleItem}</span>
            <p className="DescriptionCuerpoItem">{TextItem}</p>
        </section>
    </div>
}

export default ItemServices