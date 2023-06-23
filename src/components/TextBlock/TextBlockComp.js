import React, {useState } from 'react';
import "./TextBlock.css";
import { IconContext } from "react-icons";
import { AiOutlineBars, AiOutlineEdit } from "react-icons/ai";


const TextBlockConponent = ({ blockText }) => {
    const [editing, setEditing] = useState(false);
    const [block, setBlock] = useState(blockText);

  return (
    <IconContext.Provider
      value={{
        size: 35
      }}
    >
      <div className="blockText-container">
        <p
          contentEditable
          className='block-content'
          style={{
            fontSize: block.fontSize,
            weight: block.weight,
            color: block.color,
            textTransform: block.textTransform ? block.textTransform : "none"
          }}
        >
          {block.content}
        </p>
      <div className="block-icons">
        <AiOutlineBars className="block-icon" />
      </div>
      </div>
    </IconContext.Provider>
  );
} 


export default TextBlockConponent;