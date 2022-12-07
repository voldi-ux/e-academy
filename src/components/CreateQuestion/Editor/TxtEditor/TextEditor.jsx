
import React from "react";
import "./TextEditor.css"
import Button from "../../../Button/Button";
import TextEditorHeader from "../TxtEditorHeader/TextEditorHeader";


const TextEditor = () => {

    return(
        <>
            <div className='text-editor-header' >
                <TextEditorHeader/>
            </div>

            <div className='content'>
                <textarea className="text-area"></textarea>
            </div>

            <div className="preview">
                
            </div>
        </>
    );
}

export default TextEditor;