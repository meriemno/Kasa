import React, { useState } from "react";
import "../collapse/collapse.scss";
import { MdExpandLess } from 'react-icons/md';


function Collapse({ qualite, description }) {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)

    }

    return (

        <div className='about'>

            <button className="collapse" onClick={handleClick}  >
                <span>{qualite} </span>
                {console.log(open)}
                {/* <svg width="33" className={open ? "up":" up_down"} height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6931 10.5029C12.1394 10.0566 12.8642 10.0566 13.3104 10.5029L20.1653 17.3578C20.6116 17.8041 20.6116 18.5288 20.1653 18.9751C19.719 19.4214 18.9943 19.4214 18.548 18.9751L12.5 12.9271L6.45203 18.9715C6.00575 19.4178 5.28099 19.4178 4.83471 18.9715C4.38843 18.5252 4.38843 17.8005 4.83471 17.3542L11.6896 10.4994L11.6931 10.5029Z" fill="white" />
                </svg> */}
                <MdExpandLess className={open ? "up up_down" : "up "}></MdExpandLess>
            </button>

            <div className={open ? "content open" : "content  "}>
                <div className="description">{description}
                </div>

            </div>

        </div>

    );
}
export default Collapse