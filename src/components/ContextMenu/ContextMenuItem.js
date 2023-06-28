/** @format */

import React, { useState } from "react";
import "./contextMenu.css";
import MenuItem from "./MenuItem";

const ContextMenuItem = ({ menus, menuTitle, children }) => {
  const renderMenuItems = () => { 
     if(menuTitle.toLowerCase() === "change color") return  menus.map((menu) => (
       <MenuItem menu={menu} key={menu.option} color={true} />
     ))
    
    return menus.map((menu) => <MenuItem key={menu.option} menu={menu} />);
  }
  return (
    <div className="context-menu-item">
      <div className="context-menu-item-content">
        <div className="context-menu-item-icon">{children}</div>
        <h3> {menuTitle} </h3>
      </div>
        <div className="menu-container">
         <div className="menu-container-inner">
          { renderMenuItems()}
         </div>
        </div>
    </div>
  );
};

ContextMenuItem.defaultProps = {
  menus: ["Upper Case", "Lower Case", "Capitalize"],
  menuTitle: "Title"
};

export default ContextMenuItem;
