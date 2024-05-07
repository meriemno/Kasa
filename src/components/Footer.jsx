import React from "react";
import "./footer.scss";

function Footer({footer_img, footer_text}) {
    return (
        <footer>
            <div className="footer" >
                <img src={footer_img} alt="logo kasa" />
                <p>{footer_text}</p>
            </div>
        </footer>
    )
}

export default Footer