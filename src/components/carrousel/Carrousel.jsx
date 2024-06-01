import React from "react";
import { useState } from "react";
import "../carrousel/carrousel.scss";
import PropTypes from 'prop-types';// Importation de PropTypes pour la vérification des types des props

function Carrousel({ picture }) {

    const [index, setIndex] = useState(0);

    function handleNextClick() {
        setIndex((currentIndex) => (currentIndex + 1) % picture.length);
    }
    function handlePreviousClick() {
        setIndex((currentIndex) => (currentIndex - 1 + picture.length) % picture.length);
    }


    return (
        <>
            <div className="carrousel">
                <div className="arrows">
                    <div className="arrow">
                        <svg className={picture.length === 1 ? "left disabled" : "left"} onClick={handlePreviousClick} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z" fill="white" />
                        </svg>

                        <svg className={picture.length === 1 ? "right disabled" : "right"} onClick={handleNextClick} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <g clipPath="url(#clip0_304051_254)">
                                <path d="M6.48999 21.0106L8.25999 22.7806L18.16 12.8806L8.25999 2.98059L6.48999 4.75059L14.62 12.8806L6.48999 21.0106Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_304051_254">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.880615)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className={picture.length === 1 ? "numberCarrousel none" : "numberCarrousel"}>
                        <p>{index + 1}/{picture.length}</p>
                    </div>
                </div>

            </div>
            <img className="carrouselImg" src={picture[index]} alt="photo logement" />
        </>
    )
}

Carrousel.propTypes = {
    picture: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carrousel