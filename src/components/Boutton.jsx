import React from "react";
import "./boutton.scss";
import { MdExpandLess } from 'react-icons/md';


function Boutton({ qualite, description}) {
    const [open, setOpen] = React.useState(false)
    function retrait_text() {

        const text = document.querySelector('.collapsed');
        const icon = document.querySelector('.up');
        text.classList.toggle('text');
        icon.classList.toggle('up_down');
    }
    
    return (
        
        <div className='about'>
            <button className='collapse' onClick={retrait_text} >
                <span>{qualite}</span>
                <MdExpandLess className='up' />
            </button>
            <div className='collapsed'>
                <p>{description}
                </p>
            </div>
        </div>
       
    );
}
export default Boutton