import React from "react";
import '../Cards/cards.scss';
import { Link } from "react-router-dom";






function Cards({ imgCard, titre, id,url }) {

    
    return (

<>
        <Link to={`${url}/${id}`} className="btnCard">        
            <img src={imgCard} alt="logement" />
            <h2>{titre}</h2>       
        </Link>
        </>
    )


}


export default Cards