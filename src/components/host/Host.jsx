import React from "react";
import "../host/host.scss";

function Host({ name, imgHost }) {
    return (
        <div className="host">
            <p className="name">{name}
                <img src={imgHost} alt="profil" />
            </p>
        </div>
    );
}
export default Host