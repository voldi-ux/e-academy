import Button from "../../../Button/Button";
import React from "react";
import './TextEditorHeader.css';




const TextEditorHeader = ({icon}) => {


    return (
        <div className="header">
            <ul>
                <li><i className="fa fa-bold fa-2x"></i></li>
                <li><i className="fa fa-italic fa-2x"></i></li>
                <li><i className="fa fa-bold fa-2x"></i></li>
                <li><i className="fa fa-italic fa-2x"></i></li> 
                <li><i className="fa fa-bold fa-2x"></i></li>
                <li><i className="fa fa-italic fa-2x"></i></li> 
                <li><i className="fa fa-bold fa-2x"></i></li>
                <li><i className="fa fa-italic fa-2x"></i></li>
               
            </ul>
        </div>
        
    );
}


export default TextEditorHeader;