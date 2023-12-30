/** @format */

import React, { useState, useRef } from "react";
import "./contextMenu.css";
import MenuItem from "./MenuItem";

const ContextMenuItem = ({ menus, menuTitle, children }) => {


  const renderMenuItems = () => {
    if (menuTitle.toLowerCase() === "change color")
      return menus.map((menu) => (
        <MenuItem menu={menu} key={menu.option} color={true} />
      ));

    return menus.map((menu) => <MenuItem key={menu.option} menu={menu} />);
  };
  const menuContainer = useRef();
  const menuItem = useRef();

  const showMenu = () => {
    if (menuContainer.current.style.display == "block") {
      menuContainer.current.style.display = "none";
      menuItem.current.style.maxHeight = "0";
    } else {
      menuContainer.current.style.display = "block";
      menuItem.current.style.maxHeight = "6rem";
    }
  };
  return (
    <div onClick={showMenu} className="context-menu-item">
      <div className="context-menu-item-content">
        <div className="context-menu-item-icon">{children}</div>
        <h3> {menuTitle} </h3>
      </div>
      <div ref={menuItem} className="menu-container">
        <div
          ref={menuContainer}
          onClick={showMenu}
          className="menu-container-inner"
        >
          {renderMenuItems()}
        </div>
      </div>
    </div>
  );
};

ContextMenuItem.defaultProps = {
  menus: ["Upper Case", "Lower Case", "Capitalize"],
  menuTitle: "Title",
};

export default ContextMenuItem;
