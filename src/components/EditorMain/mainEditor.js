/** @format */

import React, { useContext, useRef, useState, useEffect } from "react";
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
import { getTopics } from "../../utils/topics";
import ErrorBox from "../error/Error";
import { saveCreatedQuestion } from "../../apis/AcademyApi";

const MainEditor = () => {
  const { dispatch, question, redoStack, undoStack } = useContext(questionEditorContext);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [overlay, setOverlay] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `
      MathJax.Hub.Config({
        tex2jax: {inlineMath: [['$', '$'], ['\\(', '\\)']]}
      });
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    `;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  });

  const saveQuestion = async () => {
    try {
      setSaving(true);
      // todo
      //==========================
      //create a transform function that will tranform the question into a form required 
      //by the backend
      //then we can save it properly
      
      console.log("saving succeded");
      //  setSaving(false);
      ///dispatch({type: "clear-question"})
    } catch (err) {
      console.log(err);
      setErrMsg(err.message);
      setErr(true); // we display an error message if we were unable to save the question
    }
  };

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
      case "input-type": {
        return (
          <OverLay>
            <InputQuestion close={closeOverlay} />
          </OverLay>
        );
      }
    }
  };

  //displayes content on the editor
  const displayDescription = () => {
    return question.description.map((block) => (block instanceof TextBlock ? <TextBlockConponent key={block.blockId} blockText={block} /> : <ImageBlockComp imageBlock={block} key={block.blockId} />));
  };

  //displayes content on the editor
  const displayPreviewDescription = () => {
    return question.description.map((block) =>
      block instanceof TextBlock ? (
        <p
          style={{
            fontSize: block.fontSize,
            fontWeight: block.weight + "", //convert it to a string
            color: block.color,
            textTransform: block.textTransform ? block.textTransform : "none",
            marginBottom: "10px",
            lineHeight: "3rem"
          }}
          key={block.blockId}
        >
          {`${block.content}`}
        </p>
      ) : (
        <img style={{ width: "100%", display: "block", marginBottom: "10px" }} src={block.image} key={block.blockId} />
      )
    );
  };

  const fileChooser = useRef();

  //opens the filechooser
  const chooseFile = () => {
    fileChooser.current.click();
  };

  //called when a user has selected a file
  const onFileSelect = (e) => {
    let files = e.target.files;
    let reader = new FileReader();

    reader.onload = (e) => {
      let image = new imageBlock(e.target.result);
      dispatch({
        type: "add-image",
        data: image
      });
    };
    if (files.length > 0) reader.readAsDataURL(files[0]);
  };

  const addText = () => {
    dispatch({
      type: "add-text"
    });
  };

  const previewQuestion = () => {
    if (overlay) setOverlay(false);
    setPreview(true);
  };

  //a function to close the preview overlay
  const closeOverlay = () => {
    if (preview) setPreview(false);
    else if (overlay) setOverlay(false);
  };

  //a function that allows to dispatch undo actions

  const undo = () => dispatch({ type: "undo" });
  const redo = () => dispatch({ type: "redo" });

  //===========================================================================
  //These objects will help with filtering of topics, subjects etc.
  const filterGrades = {
    title: "Grade",
    options: ["10", "11", "12"],
    action: (grade) => dispatch({ type: "change-grade", to: grade })
  };

  const filterQuestionType = {
    title: "Question Type",
    options: ["MCQ", "Input"],
    action: (questionType) => dispatch({ type: "change-questionType", to: questionType })
  };

  const filterSubjects = {
    title: "Subjects",
    options: ["Mathematics", "Physics"],
    action: (subject) => dispatch({ type: "change-subject", to: subject })
  };

  const filterLevels = {
    title: "Level",
    options: [1, 2, 3, 4, 5],
    action: (level) => dispatch({ type: "change-level", to: level })
  };

  const filterTopics = {
    title: "Topic",
    options: getTopics(question.grade, question.subject),
    action: (topic) => dispatch({ type: "change-topic", to: topic })
  };

  //=====================================================================================

  return (
    <div className="main-editor-container">
      {overlay && renderOverlay()}
      {preview && (
        <OverLay>
          <Preview close={closeOverlay} />
        </OverLay>
      )}

      {err && (
        <OverLay>
          <ErrorBox message={errMsg} buttonClick={() => setErr(false)} />
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
        {/* each of these filters should get their selected values from the context*/}
        <Filter title={"Question Type"} filter={filterQuestionType} defaultSelect={question.questionType} />
        <Filter title={"topic"} filter={filterTopics} defaultSelect={question.topic} />
        <Filter title={"Subject"} filter={filterSubjects} defaultSelect={question.subject} />
        <Filter title={"Grade"} filter={filterGrades} defaultSelect={question.grade} />
        <Filter title={"Level"} filter={filterLevels} defaultSelect={question.level} />
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
                style={{
                  opacity: question.questionType === "input-type" ? "0.5" : "1"
                }}
                onClick={() => {
                  question.questionType === "MCQ" && setOverlay(true);
                }}
              />
            </div>
            <div className="icons-container">
              <BsInputCursorText
                style={{
                  opacity: question.questionType === "input-type" ? "1" : "0.5"
                }}
                onClick={() => {
                  question.questionType === "input-type" && setOverlay(true);
                }}
              />
            </div>
            <div className="icons-container">
              <BsEyeFill onClick={previewQuestion} />
            </div>
            <div className="icons-container">
              <AiOutlineUndo
                onClick={undo}
                style={{
                  opacity: undoStack.length > 0 ? "1" : "0.5"
                }}
              />
            </div>
            <div className="icons-container">
              <AiOutlineRedo
                onClick={redo}
                style={{
                  opacity: redoStack.length > 0 ? "1" : "0.5"
                }}
              />
            </div>
          </div>
          <div className="editor-icon-right">
            <div className="icons-container">
              <AiFillSave onClick={saveQuestion} />
            </div>
          </div>
        </IconContext.Provider>
      </header>
      <div className="editor-content-container">
        <div className="main-editor-content">{displayDescription()}</div>
        <div className="editor-content-preview">{displayPreviewDescription()}</div>
      </div>
    </div>
  );
};

export default MainEditor;
