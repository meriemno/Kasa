import logo from '../images/LOGO.svg'
import lfooter from '../images/lfooter.png'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banniere from "../components/Banniere.jsx";
import bnr_img from '../images/bnr_about.png'
import React from 'react';
import Boutton from '../components/Boutton.jsx';


function About() {
   
    
    

    return (
        <>
            <Header logo={logo} nav_home="Accueil" nav_about="A propos" />
            <Banniere banner_img={bnr_img} />
            <Boutton qualite={"Fiabilité"} description={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."} />
            <Boutton  qualite={"Respect"} description={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
            <Boutton qualite={"Service"} description={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question."} />
            <Boutton   qualite={"Sécurité"} description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite."}/>
            <Boutton   qualite={"Sécurité"} description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite."}/>

            <Footer footer_img={lfooter} footer_text="© 2024 Kasa. All rights reserved" />
        </>



    )
}
export default About

