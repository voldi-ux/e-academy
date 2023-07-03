import React from 'react'
import "./InputQuestion.css"

import {FaArrowLeft} from "react-icons/fa"

const InputQuestion = () => {
  return (
    <div className="preview">
      <div className="preview-header">
        <div>
          <button>
            <FaArrowLeft size={16} /> Back
          </button>
        </div>
        <div></div>
      </div>

      <div className="preview-container">
        <h1>Input Questions</h1>
        <div className="preview-container-content">
          <h2>
           Numerical Answer
          </h2>

          <div className="question-inputs">
            <input className="question-input" type="text"  placeholder='Enter your numerical answer' />
            <input className="question-input" type="text"  placeholder='Enter your tolerance' />
          </div>
          
          <div className="question-additions">
            
            <div className='question-line'></div>
             <div><h2>OR</h2></div>
            <div className="question-line"></div>
          </div>

          <h2>
           Textual Answer
          </h2>
          <div className="textual-answer">
          <input className="question-input" type="text" placeholder='Enter your numerical textual' />
          </div>

          <button className='question-btn'>Save</button>
        </div>
      </div>
    </div>

  )
}

export default InputQuestion
