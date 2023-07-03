/** @format */
import React from 'react'
import "./Preview.css";
import { FaArrowLeft } from "react-icons/fa";
import Option from "./Option";

const Preview = ({ image, close }) => {
  return (
    <div className="preview-1">
      <div className="preview-1-header">
        <button onClick={close}>
          <FaArrowLeft size={16} /> Back
        </button>

        <div></div>
      </div>

      <div className="preview-1-container">
        <h1>Preview</h1>
        <div className="preview-1-container-content">
          <h2>How do you solve for x in the following examples of balls mathematically using equation?</h2>

          <div className="preview-1-img">
            <img src={image} alt="" />
          </div>

          <div className="preview-1-title">
            <h2>Select the most correct answer</h2>
          </div>
          <div className="preview-1-options">
            <Option />
            <Option />
            <Option />
            <Option />
          </div>
        </div>
      </div>
    </div>
  );
};

Preview.defaultProps = {
  image:
    "data:image/png;base64,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"
};
export default Preview;
