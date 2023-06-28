import React from "react";
import "./contextMenu.css";

import ContextMenuItem from "./ContextMenuItem";
import { IconContext } from "react-icons";


const ContextMenu = ({ contextMenu }) => { 
  const renderMenus = () =>
    contextMenu.map((contextMenuItem) => (
      <ContextMenuItem key={contextMenuItem.title} menus={contextMenuItem.options} menuTitle={contextMenuItem.title}>
        {" "}
        {contextMenuItem.icon}
      </ContextMenuItem>
    ));
    return (
      <div className="context-menu-container">
        <IconContext.Provider value={{ size: 15 }}>
           {/* <ContextMenuItem MenuTitle={"Capitalize"}> <AiOutlineFontSize  /> </ContextMenuItem>
           <ContextMenuItem MenuTitle={"Font Size"}> <VscTextSize /> </ContextMenuItem>
           <ContextMenuItem  MenuTitle={"Bold"}> <AiOutlineBold /> </ContextMenuItem>
           <ContextMenuItem MenuTitle={"Color"}>  <AiOutlineBgColors /> </ContextMenuItem> */}
          
          { renderMenus()}
        </IconContext.Provider>
      </div>
    );
}


export default ContextMenu;