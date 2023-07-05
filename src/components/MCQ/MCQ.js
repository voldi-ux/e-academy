import React, { useContext, useState} from "react"
import Choice from "./Choice";
import "./MCQ.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext";

const MCQ = ({ close }) => {
  const [option, setOption] = useState("")

  const { question, dispatch } = useContext(questionEditorContext)
   console.log(option)
  const options = question.options.map(option => <Choice key={option} />); 

  const handleChange = (e) => { 
    setOption(e.target.value);
  }

  const addOption = (option) => { 
    if(option.trim().length > 0) dispatch({ type: "add-option", data: option }); 
  }
  

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
             <input value={option} type="text" placeholder="Enter your option"  onChange={handleChange}/>
             <button className="mcq-add" onClick={() =>addOption(option) }>
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
           <div className="mcq-options">{options}</div>
         </div>
         {/* <button className="question-btn">Save options</button> */}
       </div>
     </div>
   );
};

export default MCQ;
