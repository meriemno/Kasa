import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import './Error.scss';
import logo from '../images/LOGO.svg';
import lfooter from '../images/lfooter.png';




function Error() {
    return (
        <>
            <Header logo={logo} nav_home="ACCUEIL" nav_about="A PROPOS" />

            <div className="error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner sur la page d'accueil</a>
            </div>


            <Footer footer_img={lfooter} footer_text="© 2024 Kasa. All rights reserved" />
        </>

    )
}

export default Error