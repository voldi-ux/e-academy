/** @format */

import React from "react";
import { IconContext } from "react-icons";
import { BsFillImageFill, BsTypeBold, BsTypeUnderline, BsTextLeft, BsTextCenter } from "react-icons/bs";
import { RxHeading } from "react-icons/rx";
import { AiFillSave } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";

import "./mainEditor.css";
import TextBlock from "../../controllers/Editor/Block/TextBlock";
import InputQuestion from "../../controllers/Editor/Question/InputQuestion";


const MainEditor = () => {

  let question = new InputQuestion("mcq", "Mathematics", 10, 3, "Trigonometry");
  
  let textBlock = new TextBlock();
  textBlock.setContent("Some content");
  

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
              <RxHeading />
              <small>Heading</small>
            </div>
            <div className="icons-container">
              <BsTypeUnderline />
              <small>underlined</small>
            </div>
            <div className="icons-container">
              <IoMdOptions />
              <small>add option</small>
            </div>
          </div>
          <div className="editor-icon-right">
            <div className="icons-container">
              <AiFillSave />
              <small>save</small>
            </div>
          </div>
        </IconContext.Provider>
      </header>
        <div className="main-editor-content">
      </div>
    </div>
  );
};

export default MainEditor;
