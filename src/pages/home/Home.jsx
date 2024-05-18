import React from "react";
import Banniere from "../../components/banniere/Banniere.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import "../home/home.scss";
import bnr_img from '../../images/banner.png';
import logo from '../../images/LOGO.svg';
import footer from '../../images/lfooter.png';
import logements from '../../services/logement.json';
import Header from "../../layout/header/Header.jsx";
import Footer from "../../layout/footer/Footer.jsx";


function Home() {

    const banner_text = "Chez vous, partout et ailleurs";
    return (
        <>
            {/* Entete :header */}
            <Header logo={logo} nav_home="ACCUEIL" nav_about="A PROPOS" />

            {/***** composant banniere *******/}
            <Banniere banner_img={bnr_img} banner_text={banner_text} />

            {/* contenu principale: cards */}
            <div className="main">
                {
                    logements.map((logement) => <Cards imgCard={logement.cover} titre={logement.title} id={logement.id} key={logement.id} url={"/logement"}/>)}
                    {logements.map((logement) => console.log(logement.id))}
                
            </div>

            {/* pied de page : footer */}
            <Footer footer_img={footer} footer_text="© 2020 Kasa. All rights reserved" />

        </>

    )

}

export default Home