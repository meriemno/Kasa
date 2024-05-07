import logo from '../images/LOGO.svg'
import lfooter from '../images/lfooter.png'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banniere from "../components/Banniere.jsx";
import bnr_img from '../images/bnr_about.png'



function About() {

    return (
        <>
            <Header logo={logo} nav_home="Accueil" nav_about="A propos" />
            <Banniere banner_img={bnr_img} />

            <div className='about'>
                
            </div>
            <Footer footer_img={lfooter} footer_text="© 2024 Kasa. All rights reserved" />
        </>



    )
}
export default About