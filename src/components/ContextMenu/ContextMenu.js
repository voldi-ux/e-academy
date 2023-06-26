import React from "react";
import "./contextMenu.css";

import ContextMenuItem from "./ContextMenuItem";
import { IconContext } from "react-icons";
import { AiOutlineFontSize, AiOutlineBgColors, AiOutlineBold } from "react-icons/ai"
import { VscTextSize } from "react-icons/vsc";

const ContextMenu = ({ }) => { 
    console.log("context loaded");
    return (
      <div className="context-menu-container">
        <IconContext.Provider value={{ size: 15 }}>
           <ContextMenuItem MenuTitle={"Capitalize"}> <AiOutlineFontSize  /> </ContextMenuItem>
           <ContextMenuItem MenuTitle={"Font Size"}> <VscTextSize /> </ContextMenuItem>
           <ContextMenuItem  MenuTitle={"Bold"}> <AiOutlineBold /> </ContextMenuItem>
           <ContextMenuItem MenuTitle={"Color"}>  <AiOutlineBgColors /> </ContextMenuItem>
        </IconContext.Provider>
      </div>
    );
}


export default ContextMenu;