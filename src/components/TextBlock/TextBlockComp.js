/** @format */

import React, { useContext, useState, useRef, useEffect } from "react";
import "./TextBlock.css";
import { IconContext } from "react-icons";
import { AiOutlineBars, AiOutlineEdit } from "react-icons/ai";
import ContextMenu from "../ContextMenu/ContextMenu";
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext";

const TextBlockConponent = ({ blockText }) => {
  const [contextMenu, setContextMenu] = useState(false);
  const {dispatch } = useContext(questionEditorContext);
  const tArea = useRef();

 

  useEffect(() => {
    tArea.current.style.height = tArea.current.scrollHeight + "px";
  },[blockText.content]);

  const handleContext = () => {
    setContextMenu(!contextMenu);
  };

  const handleContentChange = (e) => {
    // setBlock((prevState) => {
    //   let newBlock = {}
    //   Object.assign(newBlock, prevState);
    //   newBlock.__proto__ = prevState.__proto__;
    //   newBlock.setContent(e.target.value);
    //   return newBlock;
    // });
    if (e.target.value.length > 0) { 
      console.log(e.target.value)
      dispatch({
        type: "change-text",
        data: {
          id: blockText.blockId,
          content: e.target.value
        }
      });
    }

  };

  return (
    <IconContext.Provider
      value={{
        size: 35
      }}
    >
      <div className="blockText-container">
        <textarea
          ref={tArea}
          onChange={handleContentChange}
          value={blockText.content}
          className="block-content"
          // style={{
          //   fontSize: block.fontSize,
          //   weight: block.weight,
          //   color: block.color,
          //   textTransform: block.textTransform ? block.textTransform : "none"
          // }}
        ></textarea>

        <div className="block-icons">
          <AiOutlineBars className="block-icon" onClick={handleContext} />
          {contextMenu ? <ContextMenu /> : null}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default TextBlockConponent;
