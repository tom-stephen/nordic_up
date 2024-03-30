import React from 'react';
import './Button.css';
import { Outlet, Link } from "react-router-dom";

function Button({innerText='Learn More', refPage=''}) {
    
    return(
        <>
        <Link to={'/' + refPage} className='Button'>
            <div >
                {innerText}
            </div>
            <div class="arrow-box"></div>
        </Link>
        <Outlet/>
        </>

    )
}

export default Button