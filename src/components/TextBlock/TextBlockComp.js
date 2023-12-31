/** @format */

import React, { useContext, useRef, useEffect} from "react";
import "./TextBlock.css";
import { IconContext } from "react-icons";
import { AiOutlineFontSize, AiOutlineBgColors, AiOutlineBold } from "react-icons/ai";
import { VscTextSize } from "react-icons/vsc";

import ContextMenu from "../ContextMenu/ContextMenu";
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext";
import { getContextMenuHandler } from "../../utils/utils";

const TextBlockConponent = ({ blockText }) => {

  const { dispatch } = useContext(questionEditorContext);
  const tArea = useRef();

  const blockTextContainer = useRef();

  const textBlockContextMenu = [
    {
      title: "Change Color",
      icon: <AiOutlineBgColors />,
      options: [
        {
          option: blockText.getColor(), //the current color for the text component
          action: (color) =>
            dispatch({
              type: "change-color",
              data: {
                id: blockText.blockId,
                to: color
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
  }, [blockText.fontSize, blockText.fontWeight, blockText.content, blockText.textTransform]);

  //handling the  context menu
  const handleContext = getContextMenuHandler(blockText, blockTextContainer);

  const handleContentChange = (e) => {
    let value = e.target.value;
     dispatch({
       type: "change-text",
       data: {
         id: blockText.blockId,
         content: value
       }
     });
  };

  const handleKey = (e) => {
    let value = e.target.value;
    if (value.length == 0 && e.repeat && e.code == "Backspace") {
      dispatch({
        type: "delete-text",
        data: {
          id: blockText.blockId
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
      <div ref={blockTextContainer} className="blockText-container" id={blockText.blockId} onContextMenu={handleContext}>
        <textarea
          ref={tArea}
          onKeyDown={handleKey}
          onInput={handleContentChange}
          className="block-content"
          value={blockText.content}
          style={{
            fontSize: blockText.fontSize,
            fontWeight: blockText.weight + "", //convert it to a string
            color: blockText.color,
            textTransform: blockText.textTransform ? blockText.textTransform : "none"
          }}
        ></textarea>

        <ContextMenu contextMenu={textBlockContextMenu} />
      </div>
    </IconContext.Provider>
  );
};

export default TextBlockConponent;
