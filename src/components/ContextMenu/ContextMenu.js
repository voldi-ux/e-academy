/** @format */

import React, { useEffect, useRef } from "react";
import "./contextMenu.css";

import ContextMenuItem from "./ContextMenuItem";
import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";
import {AiOutlineCloseCircle } from "react-icons/ai"

const ContextMenu = ({ contextMenu }) => {
  const contextMenuElem = useRef()
  const renderMenus = () =>
    contextMenu.map((contextMenuItem) => (
      <ContextMenuItem key={contextMenuItem.title} menus={contextMenuItem.options} menuTitle={contextMenuItem.title}>
        {" "}
        {contextMenuItem.icon}
      </ContextMenuItem>
    ));

  
  const closeMenu = () => { 
      contextMenuElem.current.style.display = "none";
  }
  return (
    <div className="context-menu-container" ref={contextMenuElem}>
      <IconContext.Provider value={{ size: 15 }}>
        {/* <ContextMenuItem MenuTitle={"Capitalize"}> <AiOutlineFontSize  /> </ContextMenuItem>
           <ContextMenuItem MenuTitle={"Font Size"}> <VscTextSize /> </ContextMenuItem>
           <ContextMenuItem  MenuTitle={"Bold"}> <AiOutlineBold /> </ContextMenuItem>
           <ContextMenuItem MenuTitle={"Color"}>  <AiOutlineBgColors /> </ContextMenuItem> */}

        {renderMenus()}

        <div className="context-menu-item" onClick={closeMenu}>
          <div className="context-menu-item-content">
            <div className="context-menu-item-icon">
              <AiOutlineCloseCircle />
            </div>
            <h3> Close  </h3>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default ContextMenu;
