import React from "react";
import './Cards.scss';







function Cards({ img_card, titre, id }) {

    return (

        <a href="#" className="btnCard">
            <img src={img_card} alt="logement" />
            <h2>{titre}</h2>
        </a>


    )


}


export default Cards