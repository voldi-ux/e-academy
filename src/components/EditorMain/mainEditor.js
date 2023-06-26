/** @format */

import React from "react";
import { IconContext } from "react-icons";
import { BsFillImageFill, BsTypeBold, BsTypeUnderline, BsTextLeft, BsTextCenter } from "react-icons/bs";
import { RxHeading } from "react-icons/rx";
import { AiFillSave, AiOutlineRedo, AiOutlineUndo, AiOutlinRedo } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";

import "./mainEditor.css";
import TextBlock from "../../controllers/Editor/Block/TextBlock";
import InputQuestion from "../../controllers/Editor/Question/InputQuestion";
import TextBlockConponent from "../TextBlock/TextBlockComp";
import Filter from "../filter/filter";
import QuestionEditorProvider from "../../contexts/questionEditorContext/questionEditorProvider";

const content =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ";

const MainEditor = () => {
  let question = new InputQuestion("Mathematics", 10, 3, "Trigonometry");

  let textBlock = new TextBlock();
  textBlock.setContent("Some content");

  return (
    <QuestionEditorProvider>
      <div className="main-editor-container">
        <div className="question-properties-container">
          <Filter title={"Question Type"} defaultSelect={"MCQ"} />
          <Filter title={"Subject"} defaultSelect={"Maths"} />
          <Filter title={"Grade"} defaultSelect={"10"} />
          <Filter title={"Level"} defaultSelect={"3"} />
        </div>
        <header className="main-editor-header">
          <IconContext.Provider value={{ className: "editor-icons-left", size: 25 }}>
            <div className="main-editor-icons-left">
              <div className="icons-container">
                <BsFillImageFill />
              </div>
              <div className="icons-container">
                <RxHeading />
              </div>
              <div className="icons-container">
                <IoMdOptions />
              </div>
              <div className="icons-container">
                <AiOutlineUndo />
              </div>
              <div className="icons-container">
                <AiOutlineRedo />
              </div>
            </div>
            <div className="editor-icon-right">
              <div className="icons-container">
                <AiFillSave />
              </div>
            </div>
          </IconContext.Provider>
        </header>
        <div className="main-editor-content">
          <TextBlockConponent blockText={{ content }} />
          <TextBlockConponent blockText={{ content }} />
          <TextBlockConponent blockText={{ content }} />
        </div>
      </div>
    </QuestionEditorProvider>
  );
};

export default MainEditor;
