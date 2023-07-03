/** @format */

import React, { useContext , useRef , useState } from "react";
import { IconContext } from "react-icons";
import { BsFillImageFill, BsEyeFill, BsInputCursorText } from "react-icons/bs";
import { RxHeading } from "react-icons/rx";
import { AiFillSave, AiOutlineRedo, AiOutlineUndo } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";

import "./mainEditor.css";
import TextBlock from "../../controllers/Editor/Block/TextBlock";

import TextBlockConponent from "../TextBlock/TextBlockComp";
import Filter from "../filter/filter";
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext";
import ImageBlockComp from "../ImageBlock/ImageBlockComp";
import imageBlock from "../../controllers/Editor/Block/ImageBlock";
import OverLay from "../overlay/Overlay";
import MCQ from "../MCQ/MCQ";
import InputQuestion from "../InputQuestion/InputQuestion";
import Preview from "../Preview/Preview";
 
const MainEditor = () => {
  
  const { dispatch, question } = useContext(questionEditorContext);
  const [overlay, setOverlay] = useState(false);
  const [preview, setPreview] = useState(false);

  // will render different overlay depending on what question type the user is currently creating
  const renderOverlay = () => { 
    switch (question.questionType) {
      case "MCQ": { 
        return (
          <OverLay>
            <MCQ close={closeOverlay} />
          </OverLay>
        );
      }
      case "input":
        { 
          return (
            <OverLay>
              <InputQuestion close={closeOverlay} />
            </OverLay>
          );
        }
    }
  }

  //displayes content on the editor
  const displayDescription = () => { 
    return question.description.map((block) => (block instanceof TextBlock ? <TextBlockConponent key={block.blockId} blockText={block} /> : <ImageBlockComp imageBlock={block} key={block.blockId} />));
  }
  const fileChooser = useRef();
  

  //opens the filechooser
  const chooseFile = () => { 
    fileChooser.current.click();
  }

  //called when a user has selected a file
  const onFileSelect = (e) => { 
    
    let files = e.target.files;
    let reader = new FileReader();

    reader.onload = e => {
      let image = new imageBlock(e.target.result);
      dispatch({
        type: "add-image",
        data: image
      })

     };
    if (files.length > 0) reader.readAsDataURL(files[0]);
  }


  const addText = () => {
    dispatch({
      type:"add-text"
    })
   }
  
   const previewQuestion = ()=>{
     if (overlay) setOverlay(false)
     setPreview(true);
  }
  
  //a function to close the preview overlay
  const closeOverlay = () => { 
    if (preview) setPreview(false);
    else if (overlay) setOverlay(false)
  };

  return (
    <div className="main-editor-container">
      {overlay && renderOverlay()}
      {preview && (
        <OverLay>
          <Preview close={closeOverlay} />
        </OverLay>
      )}
      <input
        onChange={onFileSelect}
        ref={fileChooser}
        type="file"
        accept="image/jpeg, image/png, image/pjpeg"
        style={{
          display: "none"
        }}
      />
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
              <BsFillImageFill onClick={chooseFile} />
            </div>
            <div className="icons-container">
              <RxHeading onClick={addText} />
            </div>
            <div className="icons-container">
              <IoMdOptions
                onClick={() => {
                  setOverlay(true);
                }}
              />
            </div>
            <div className="icons-container">
              <BsInputCursorText
                onClick={() => {
                  setOverlay(true);
                }}
              />
            </div>
            <div className="icons-container">
              <BsEyeFill onClick={previewQuestion} />
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
      <div className="main-editor-content">{displayDescription()}</div>
    </div>
  );
};

export default MainEditor;
