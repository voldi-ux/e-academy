/** @format */

import React from "react";
import { IconContext } from "react-icons";
import { BsFillImageFill, BsTypeBold, BsTypeUnderline, BsTextLeft, BsTextCenter } from "react-icons/bs";
import { AiFillSave } from "react-icons/ai";
import "./mainEditor.css";

const MainEditor = () => {
  return (
    <div className="main-editor-container">
      <header className="main-editor-header">
        <IconContext.Provider value={{ className: "editor-icons-left", size: 20 }}>
          <div className="main-editor-icons-left">
            <div className="icons-container">
              <BsFillImageFill />
              <small>insert</small>
            </div>
            <div className="icons-container">
              <BsTypeBold />
              <small>Bold</small>
            </div>
            <div className="icons-container">
              <BsTypeUnderline />
              <small>underlined</small>
            </div>
            <div className="icons-container">
              <div className="icon-align-text">
                <BsTextLeft />
                <BsTextCenter />
              </div>
              <small>align</small>
            </div>
          </div>
          <div className="editor-icon-righ">
            <div className="icons-container">
              <AiFillSave />
              <small>save</small>
            </div>
          </div>
        </IconContext.Provider>
          </header>
          <div className="main-editor-contents" >
              <div className="main-editor-content">
                  
              </div>
              <div className="main-editor-preview">
              
              </div>
             
          </div>
    </div>
  );
};

export default MainEditor;
