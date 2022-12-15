
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
            <div className="text-editor-header-container">
                <div className='text-editor-header' >
                    <header className="header">
                            <div className="format-icon">
                                <FaImage size={15} id="icon"/>
                                <small id="text">Insert</small>
                            </div>
                            <div className="format-icon">
                                <MdOutlineModeEdit size={15} id="icon"/>
                                <small id="text">Edit</small>
                            </div>
                            <div className="format-icon">
                                <FaBold size={15} id="icon"/>
                                <small id="text">Bold</small>
                            </div>
                            <div className="format-icon">
                                <FaUnderline size={15} id="icon"/>
                                <small id="text">Underlined</small>
                            </div>
                            <div className="format-icon">
                                <div className="align-icons">
                                    <FaAlignCenter size={15} id="icon"/>
                                    <FaAlignLeft size={15} id="icon"/>
                                </div>
                                <small id="align-text">Allign</small>
                            </div>
                            <div className="format-icon">
                                <FaSave size={15}/>
                                <small id="text">Save</small>
                            </div>
                    </header>
                </div>
            </div>

            {/* <div className="txt">
                <div className="head">
                    <div className="icons-container">
                        <FaImage size={15} id="icon"/>
                        <small id="text">Insert</small>
                    </div>
                    <div className="icons-container">
                        <MdOutlineModeEdit size={15} id="icon"/>
                        <strong id="text">Edit</strong>
                    </div>
                    <div className="icons-container">
                        <FaImage size={15} id="icon"/>
                        <strong id="text">Insert</strong>
                    </div>
                    <div className="icons-container">
                        <FaImage size={15} id="icon"/>
                        <strong id="text">Insert</strong>
                    </div>
                    <div className="icons-container">
                        <FaImage size={15} id="icon"/>
                        <strong id="text">Insert</strong>
                    </div>
                </div>
            </div> */}

            <div className='text-area-container' contentEditable='true' placeholder="Type something here">
            </div>

            <div className="preview-container">
                
            </div>
        </>
    );
}

export default TextEditor;