import React, { useContext, useState } from 'react'
import "./InputQuestion.css"

import {FaArrowLeft} from "react-icons/fa"
import { questionEditorContext } from '../../contexts/questionEditorContext/questionEditorcontext';

const InputQuestion = ({ close }) => {
  const { dispatch, question  } = useContext(questionEditorContext);


  const [answer, setAnswer] = useState({
    textual: question.answerType === "textual" ? question.answer : "",
    numerical: question.answerType === "numerical" ? question.answer : "",
    tolerance: question.answerType === "numerical" ? question.tolerance : ""
  });
  

  //automatically handling the three inputs at once
  const handleChangeInput = ({ target: { name, value} }) => {
    setAnswer((prevState) => { 
      let newState = {
        ...prevState
      }
      newState[name] = value;
      return newState
    });
  }


  const saveAnswer = () => { 

    if ((answer.numerical || answer.tolerance) && answer.textual) {
      alert("please only fill in one of the sections");
    } else if (answer.textual.length <= 0 && (answer.numerical || answer.tolerance)) { // from here we infer that the user wants to create a numerical answer
      if (answer.numerical.length === 0 || answer.tolerance.length === 0) {
        alert("please fill in the nunerical input and the tolerance input");
      } else {
        dispatch({
          type: "add-numerical",
          data: {
            answer: answer.numerical,
            tolerance: answer.tolerance
          }
        });
        console.log(dispatch);
         close(); // to close the overlay
      }

    } else {
      if (answer.textual) { 
             dispatch({
               type: "add-textual",

               answer: answer.textual
             });
      }
      close(); // to close the overlay
    }
  }
  


  return (
    <div className="inputquestion">
      <div className="inputquestion-header">
        <div>
          <button onClick={close}>
            <FaArrowLeft size={16} /> Back
          </button>
        </div>
        <div></div>
      </div>

      <div className="inputquestion-container">
        <h1>Input Questions</h1>
        <div className="inputquestion-container-content">
          <h2>Numerical Answer</h2>

          <div className="question-inputs">
            <input className="question-input" onChange={handleChangeInput} name="numerical" value={answer["numerical"]} type="number" placeholder="Enter your numerical answer" />
            <input className="question-input" onChange={handleChangeInput} name="tolerance" value={answer["tolerance"]} type="number" placeholder="Enter your tolerance" />
          </div>

          <div className="question-additions">
            <div className="question-line"></div>
            <div>
              <h2>OR</h2>
            </div>
            <div className="question-line"></div>
          </div>

          <h2>Textual Answer</h2>
          <div className="textual-answer">
            <input className="question-input" onChange={handleChangeInput} value={answer["textual"]} type="text" name="textual" placeholder="Enter your numerical textual" />
          </div>

          <button className="question-btn" onClick={saveAnswer}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default InputQuestion
