import React from 'react';
import "./overlay.css";

const OverLay = ({ children }) => { 
    return <div className='overlay-container'>
        { children}
    </div>
}


export default OverLay;