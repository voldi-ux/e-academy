/** @format */

import React, {useContext, useState, useRef } from "react";
import "./imageBlock.css";
import { AiOutlineBars, AiOutlineDelete } from "react-icons/ai";
import { BsImageFill} from "react-icons/bs"
import ContextMenu from "../ContextMenu/ContextMenu";
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext";
import { getContextMenuHandler } from "../../utils/utils";


const ImageBlockComp = ({ imageBlock }) => {
  
  const { dispatch } = useContext(questionEditorContext);
  const fileChooser = useRef();
  const imgContainer = useRef()
  //     const handleContext = () => {
  //       setContextMenu(!contextMenu);
  // };

  //handling the  context menu
  const handleContext =  getContextMenuHandler(imageBlock, imgContainer)

  const chooseFile = () => {
    fileChooser.current.click();
  };

  const onFileSelect = (e) => {
    let files = e.target.files;
    let reader = new FileReader();

    reader.onload = (e) => {
      let image = e.target.result; // the image in base64 encoding
      dispatch({
        type: "change-image",
        data: {
          id: imageBlock.blockId,
          to: image
        }
      });
    };
    if (files.length > 0) reader.readAsDataURL(files[0]);
  };

  const imageBlockContextMenu = [
    {
      title: "Change Image",
      icon: <BsImageFill />,
      options: [
        {
          option: "Select Image", //blue-dark
          action: chooseFile
        }
      ]
    },
    {
      title: "Remove Image",
      icon: <AiOutlineDelete />,
      options: [
        {
          option: "Remove", //blue-dark
          action: () =>
            dispatch({
              type: "remove-image",
              id: imageBlock.blockId
            })
        }
      ]
    }
  ];
  return (
    <div className="image-block-container" id={imageBlock.blockId} onContextMenu={handleContext} ref={imgContainer}>
      <input
        onChange={onFileSelect}
        ref={fileChooser}
        type="file"
        accept="image/jpeg, image/png, image/pjpeg"
        style={{
          display: "none"
        }}
      />
      <img src={imageBlock.image} alt="editor image" id="block-image" />;
      {/* <div className="block-icons">
          <AiOutlineBars size={35} className="block-icon" onClick={handleContext} />
          {contextMenu ? <ContextMenu contextMenu={imageBlockContextMenu} /> : null}
        </div> */}
      <ContextMenu contextMenu={imageBlockContextMenu} />
    </div>
  );
};

export default ImageBlockComp;
