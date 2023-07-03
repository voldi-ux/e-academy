import Choice from "./Choice";
import "./MCQ.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const MCQ = ({ close }) => {
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
            <input type="text" placeholder="Enter your option" />
            <button className="mcq-add">
              <FaPlus /> Add
            </button>
          </div>
          <div className="choice-header">
            <div>
              <h2>Choices</h2>
            </div>
            <div>
              <h2>Options</h2>
            </div>
          </div>
          <div className="mcq-options">
            <Choice />
            <Choice />
            <Choice />
            <Choice />
          </div>
        </div>
        <button className="question-btn">Save options</button>
      </div>
    </div>
  );
};

export default MCQ;
