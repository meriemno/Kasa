import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header(props) {
    const { logo, nav_home, nav_about } = props
    return (
        <header className="header">
          
                <img src={logo} alt="logo" />
            
            <nav>
                <ul>
                    <li><Link to="/Home" className="link">{nav_home}</Link></li>
                    <li><Link to="/About" className="link">{nav_about}</Link></li>
                </ul>
            </nav>

        </header>
    )

}

export default Header