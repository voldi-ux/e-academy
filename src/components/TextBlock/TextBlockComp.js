/** @format */

import React, { useContext, useState, useRef, useEffect, useTransition } from "react";
import "./TextBlock.css";
import { IconContext } from "react-icons";
import { AiOutlineBars, AiOutlineEdit, AiOutlineFontSize, AiOutlineBgColors, AiOutlineBold } from "react-icons/ai";
import { VscTextSize } from "react-icons/vsc";

import ContextMenu from "../ContextMenu/ContextMenu";
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext";

const TextBlockConponent = ({ blockText }) => {
  const [contextMenu, setContextMenu] = useState(blockText.content);
  const { dispatch } = useContext(questionEditorContext);
  const tArea = useRef();

  
  const textBlockContextMenu = [
    {
      title: "Change Color",
      icon: <AiOutlineBgColors />,
      options: [
        {
          option: "#20385C", //blue-dark
          action: () =>
            dispatch({
              type: "change-color",
              data: {
                id: blockText.blockId,
                to: "#20385C"
              }
            })
        },
        {
          option: "#F1F8FF", //white
          action: () =>
            dispatch({
              type: "change-color",
              data: {
                id: blockText.blockId,
                to: "#F1F8FF"
              }
            })
        },
        {
          option: "#F65858", //white
          action: () =>
            dispatch({
              type: "change-color",
              data: {
                id: blockText.blockId,
                to: "#F65858"
              }
            })
        }
      ]
    },
    {
      title: "Capitalize",
      icon: <AiOutlineFontSize />,
      options: [
        {
          option: "Upper Case",
          action: () =>
            dispatch({
              type: "change-casing",
              data: {
                id: blockText.blockId,
                to: "upperCase"
              }
            })
        },
        {
          option: "Lower Case",
          action: () =>
            dispatch({
              type: "change-casing",
              data: {
                id: blockText.blockId,
                to: "lowerCase"
              }
            })
        },
        {
          option: "Capitalize",
          action: () =>
            dispatch({
              type: "change-casing",
              data: {
                id: blockText.blockId,
                to: "capitalize"
              }
            })
        }
      ]
    },

    {
      title: "Font Size",
      icon: <VscTextSize />,
      options: [
        {
          option: "small",
          action: () =>
            dispatch({
              type: "change-fontsize",
              data: {
                id: blockText.blockId,
                to: 16
              }
            })
        },
        {
          option: "medium",
          action: () =>
            dispatch({
              type: "change-fontsize",
              data: {
                id: blockText.blockId,
                to: 25
              }
            })
        },
        {
          option: "Large",
          action: () =>
            dispatch({
              type: "change-fontsize",
              data: {
                id: blockText.blockId,
                to: 30
              }
            })
        }
      ]
    },

    {
      title: "Bold",
      icon: <AiOutlineBold />,
      options: [
        {
          option: "Normal",
          action: () =>
            dispatch({
              type: "change-bold",
              data: {
                id: blockText.blockId,
                to: 500
              }
            })
        },
        {
          option: "Semi-bold",
          action: () =>
            dispatch({
              type: "change-bold",
              data: {
                id: blockText.blockId,
                to: 600
              }
            })
        },
        {
          option: "Bold",
          action: () =>
            dispatch({
              type: "change-bold",
              data: {
                id: blockText.blockId,
                to: 700
              }
            })
        }
      ]
    }
  ];

  useEffect(() => {
    let e = tArea.current;
    e.style.height = 0;
    e.style.height = `${e.scrollHeight}px`;
  }, [blockText.content]);

  const handleContext = () => {
    //const elem = document.querySelector(".block-content");
    setContextMenu(!contextMenu);
  };

  const handleContentChange = (e) => {
    // e.target.style.height = 0;
    // e.target.style.height = `${e.target.scrollHeight}px`;

    // startTransition(() => {
    //   setContent(e.target.value)
    // });

    dispatch({
      type: "change-text",
      data: {
        id: blockText.blockId,
        content: e.target.value
      }
    });
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
          className="block-content"
          value={blockText.content}
          // onBlur={(e) => {
          //   dispatch({
          //     type: "change-text",
          //     data: {
          //       id: blockText.blockId,
          //       content: e.target.value
          //     }
          //   });
          // }}
          style={{
            fontSize: blockText.fontSize,
            fontWeight: blockText.weight + "", //convert it to a string
            color: blockText.color,
            textTransform: blockText.textTransform ? blockText.textTransform : "none"
          }}
        ></textarea>

        <div className="block-icons">
          <AiOutlineBars className="block-icon" onClick={handleContext} />
          {/* {contextMenu ? <ContextMenu contextMenu={textBlockContextMenu} /> : null} */}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default TextBlockConponent;
