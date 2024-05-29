import logo from '../../images/LOGO.svg'
import lfooter from '../../images/lfooter.png'
import Header from "../../layout/header/Header.jsx";
import Footer from "../../layout/footer/Footer.jsx";
import Banniere from "../../components/banniere/Banniere.jsx";
import bnr_img from '../../images/bnr_about.png'
import React from 'react';
import Collapse from '../../components/collapse/Collapse.jsx';
import './about.scss';


function About() {
    return (
        <>
            <div className="headerAbout">
                <Header logo={logo} nav_home="ACCUEIL" nav_about="A PROPOS" />
            </div>
            <div className="banner">
                <Banniere banner_img={bnr_img} />
            </div>
            <div className="mainAbout">
                <Collapse key="1" qualite="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <Collapse key="2" qualite="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse key="3" qualite="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question." />
                <Collapse key="4" qualite="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite" />
            </div>
            <Footer footer_img={lfooter} footer_text="© 2024 Kasa. All rights reserved" />
        </>
    )
}
export default About

