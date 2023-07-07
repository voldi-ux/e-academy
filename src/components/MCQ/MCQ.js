import React, { useContext, useState } from "react";
import Choice from "./Choice";
import "./MCQ.css";
import { FaArrowLeft, FaEdit, FaPlus } from "react-icons/fa";
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext";

const MCQ = ({ close }) => {
  const [option, setOption] = useState("");
  const [old, setOld] = useState("");
  const [editing, setEditing] = useState(false);

  const { question, dispatch } = useContext(questionEditorContext);

  const currentEdit = (old) => {
    setEditing(true);
    setOld(old);
    setOption(old);
  };
  const updateContent = () => {
    dispatch({ type: "edit-mcq-option", data: { old, option } });
    setEditing(false);
    setOption("");
  };

  //get color for styling
  const options = question.options.map((option) => (
    <Choice currentEdit={currentEdit} option={option} key={option} />
  ));

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const addOption = (option) => {
    if (option.trim().length > 0)
      dispatch({ type: "add-option", data: option });
    //clear field
    setOption("");
  };

  return (
    <div className="mcq">
      <div className="mcq-header">
        <div>
          <button className="back" onClick={close}>
            <FaArrowLeft size={16} /> Back
          </button>
        </div>
        <div></div>
      </div>

      <div className="mcq-container">
        <div className="mcq-container-content">
          <h2>Add choices to multiple choice question</h2>
          <div className="option-card">
            <input
              value={option}
              type="text"
              placeholder="Enter your option"
              onChange={handleChange}
            />
            {editing ? (
              <button className="mcq-add" onClick={updateContent}>
                {" "}
               <FaEdit/>  Update
              </button>
            ) : (
              <button className="mcq-add" onClick={() => addOption(option)}>
                {" "}
                <FaPlus/> Add
              </button>
            )}
          </div>
          <div className="choice-header">
            <div>
              <h2>Choices {question.options.length > 0 ? "(" + question.options.length + ")"  : ""  } </h2>
            </div>
            <div>
              <h2>Options</h2>
            </div>
          </div>
          <div className="mcq-options">{options}</div>
        </div>
        {/* <button className="question-btn">Save options</button> */}
      </div>
    </div>
  );
};

export default MCQ;
