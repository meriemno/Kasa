import React from "react";
import '../Cards/cards.scss';
import { Link } from "react-router-dom";

function Cards( props ) {

    const { imgCard, titre, id, url } = props


    return (

        <div className="card">
            <Link to={`${url}/${id}`} className="btnCard">
                <img src={imgCard} alt="logement" />
                <h2>{titre}</h2>
            </Link>
        </div>
    )


}


export default Cards