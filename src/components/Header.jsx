import React from "react";
import "./header.scss";


function Header(props) {
    const { logo, nav_home, nav_about } = props
return(
    <header className="header">
        
        <img src={logo} alt="logo" />
        <nav>
            <ul>
                <li><a href="#">{nav_home}</a></li>
                <li><a href="#"> {nav_about}</a></li>
            </ul>
        </nav>
        
    </header>
)

}

export default Header