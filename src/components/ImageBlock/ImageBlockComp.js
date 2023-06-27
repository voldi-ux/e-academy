/** @format */

import React, {useState } from "react";
import "./imageBlock.css";
import { AiOutlineBars } from "react-icons/ai";
import ContextMenu from "../ContextMenu/ContextMenu";


const ImageBlockComp = ({ imageBlock }) => {
  const [contextMenu, setContextMenu] = useState(false);
      const handleContext = () => {
        setContextMenu(!contextMenu);
      };
    return (
      <div className="image-block-container">
        <img src={imageBlock.image} alt="editor image" id="block-image" />;
        <div className="block-icons">
          <AiOutlineBars size={35} className="block-icon" onClick={handleContext} />
          {contextMenu ? <ContextMenu /> : null}
        </div>
      </div>
    ); 
};

export default ImageBlockComp;
