import React from "react";
import Header from "../layout/header/Header.jsx";
import Footer from "../layout/footer/Footer.jsx";
import { useParams } from "react-router-dom";
import logo from '../images/LOGO.svg';
import lfooter from '../images/lfooter.png';
import logements from '../services/logement.json';
import "./logement.scss";
import Host from "../components/host/Host.jsx";
import Collapse from "../components/collapse/Collapse.jsx";
import Star from "../components/star/Star.jsx";
import Carrousel from "../components/carrousel/Carrousel.jsx";



function Logement() {
    const { id } = useParams();
    const { title, description, tags, rating, location, host, equipments, pictures } = logements.find(
        (logement) => logement.id === id);


    return (
        <>
            <Header logo={logo} nav_home="ACCUEIL" nav_about="A PROPOS" />
            <div className="containerCarrousel">

                <Carrousel picture={pictures} />
                <div className="infosLogement">
                <h2> {title}</h2>
                <p>{location}</p>
                <div className="tags">
                    {tags.map((tag) => <button className="tag" key={tag}>{tag}</button>)}
                </div>
                </div>
                <div className="hostLogement">
                <Star rating={rating} />
                <Host name={host.name} imgHost={host.picture} id={host.id} key={host.id} />
                </div>
                <div className="details">
                    <Collapse qualite="Description" description={description} />
                    <Collapse qualite="Équipements" 
                        description={<div className="equipments" >
                            {equipments.map((equipments) =>
                                <ul className="equipment" key={equipments}>
                                    <li>{equipments}</li>
                                </ul>)}
                        </div>} />
                </div>

            </div>
            <Footer footer_img={lfooter} footer_text="© 2024 Kasa. All rights reserved" />
        </>
    )
}
export default Logement