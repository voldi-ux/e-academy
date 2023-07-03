import Choice from "./Choice";
import "./MCQ.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const MCQ = () => {
  return (
    <div className="preview">
      <div className="preview-header">
        <div>
          <button className="back">
            <FaArrowLeft size={16} /> Back
          </button>
        </div>
        <div></div>
      </div>

      <div className="preview-container">
        <h1>Add Options to MCQ</h1>
        <div className="preview-container-content">
          <h2>Add choices to multiple choice question</h2>

          <div className="option-card">
            <div>
              <input type="text" placeholder="Enter your option" />
            </div>
            <div>
              <button className="mcq-add">
                <FaPlus /> Add
              </button>
            </div>
          </div>

          <div className="choice-header"> 
            
            <div>
              <h2>Choices</h2>
            </div>
            <div><h2>Options</h2></div>
          
          </div>
          <div className="mcq-options">
            <Choice />
            <Choice />
            <Choice />
            <Choice />
          </div>
          <button className='question-btn'>Save options</button>
        </div>
      </div>
    </div>
  );
};

export default MCQ;
