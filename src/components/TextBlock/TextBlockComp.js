import React, {useContext, useState } from 'react';
import "./TextBlock.css";
import { IconContext } from "react-icons";
import { AiOutlineBars, AiOutlineEdit } from "react-icons/ai";
import ContextMenu from '../ContextMenu/ContextMenu';
import { questionEditorContext } from '../../contexts/questionEditorContext/questionEditorcontext';


const TextBlockConponent = ({ blockText }) => {
    const [editing, setEditing] = useState(false);
    const [block, setBlock] = useState(blockText);
    const [contextMenu, setContextMenu] = useState(false);  
    const { question, dispatch } = useContext(questionEditorContext);
  
  
  
  const handleContext = () => { 
    setContextMenu(!contextMenu)
  }

  const handleContentChange = (e) => { 
    console.log(e);
  }

  return (
    <IconContext.Provider
      value={{
        size: 35
      }}
    >
      <div className="blockText-container">
        <textarea
          onChange={handleContentChange}
          contentEditable = "plaintext-only"
          className="block-content"
          // style={{
          //   fontSize: block.fontSize,
          //   weight: block.weight,
          //   color: block.color,
          //   textTransform: block.textTransform ? block.textTransform : "none"
          // }}
        >
          {block.content}
        </textarea>

        <div className="block-icons">
          <AiOutlineBars className="block-icon" onClick={handleContext} />
          {contextMenu ? <ContextMenu /> : null}
        </div>
      </div>
    </IconContext.Provider>
  );
} 


export default TextBlockConponent;