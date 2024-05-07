import React from 'react';
import './banniere.scss';


function Banniere({ banner_img, banner_text }) { 
    return (
        <div className="banner">
            <h1>{banner_text}</h1>
            <img src={banner_img} className="baner" alt="banniere" />
        </div>
    )
}

export default Banniere