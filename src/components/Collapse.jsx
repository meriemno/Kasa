import React, { useState } from "react";
import "./collapse.scss";
import { MdExpandLess } from 'react-icons/md';


function Boutton({ qualite, description }) {
    const [open, setOpen] = useState(false)
    function handleClick() {
        setOpen(!open)
        
    }

    return (

        <div className='about'>
            <button className='collapse' onClick={handleClick} >
                <span>{qualite} </span>
                <MdExpandLess className={open ? "up ":"up up_down"}></MdExpandLess>
            </button>
            <div className={open ? "text" : "collapsed"}>
                <p>{description}
                </p>
            </div>
        </div>

    );
}
export default Boutton