import React from "react";

import Banniere from "../components/Banniere.jsx";
import Cards from "../components/Cards.jsx";
import "./_home.scss";
import bnr_img from '../images/banner.png';
import logo from '../images/LOGO.svg';
import footer from '../images/lfooter.png';
import logements from '../services/logement.json';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";




function Home() {


    const banner_text = "Chez vous, partout et ailleurs";
    

    return (
        <>
            {/* Entete :header */}

            <Header logo={logo} nav_home="Accueil" nav_about="A propos" />

            {/***** composant banniere *******/}
            <Banniere banner_img={bnr_img} banner_text={banner_text} />

            {/* contenu principale: cards */}

            <div className="main">
                {
                    logements.map((logement) => <Cards img_card={logement.cover} titre={logement.title} id={logement.id} />)

                }
            </div>
            {/* pied de page : footer */}
            <Footer footer_img={footer} footer_text="© 2020 Kasa. All rights reserved" />
        </>

    )

}

export default Home