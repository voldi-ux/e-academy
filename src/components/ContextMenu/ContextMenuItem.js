/** @format */

import React, { useState } from "react";
import "./contextMenu.css";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const ContextMenuItem = ({ menus, MenuTitle, children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div onClick={toggleMenu} className="context-menu-item">
      <div className="context-menu-item-content">
        <div className="context-menu-item-icon">{children}</div>
        <h3> {MenuTitle} </h3>
      </div>
        <div className="menu-container">
         <div className="menu-container-inner">
          {menus.map((menu) => (
            <MenuItem menu={menu} />
          ))}
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
