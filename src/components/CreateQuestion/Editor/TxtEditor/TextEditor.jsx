
import React from "react";
import "./TextEditor.css"

import {FaBold} from "react-icons/fa";
import {FaImage} from "react-icons/fa";
import {MdOutlineModeEdit} from "react-icons/md";
import {FaUnderline} from "react-icons/fa";
import {FaAlignLeft} from "react-icons/fa";
import {FaAlignCenter} from "react-icons/fa";
import {FaSave} from "react-icons/fa";

const TextEditor = () => {

    return(
        <>
            <div className='text-editor-header' >
                <div className="header">
                    <ul id="txt-format-icons">
                        <li id="format-icon"><FaImage size={20} id="icon"/><br /><strong>Insert Image</strong></li>
                        <li id="format-icon"><MdOutlineModeEdit size={20} id="icon"/><br /><strong>Edit</strong></li>
                        <li id="format-icon"><FaBold size={20} id="icon"/><br /><strong>Bold Text</strong></li>
                        <li id="format-icon"><FaUnderline size={20} id="icon"/><br /><strong>Underlined Text</strong></li>
                        <li id="format-icon"><FaAlignCenter size={20} id="icon"/><FaAlignLeft size={20} id="icon"/><br /><strong>Allign Text</strong></li>
                        <li id="format-icon"><FaSave size={20}/><br /><strong>Save</strong></li>
                    </ul>
                </div>
            </div>

            <div className='text-area-container' contentEditable='true' placeholder="Type something here">
            </div>

            <div className="preview-container">
                
            </div>
        </>
    );
}

export default TextEditor;