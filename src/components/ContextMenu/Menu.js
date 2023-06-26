/** @format */

import React from "react";
import "./contextMenu.css";

const Menu = ({ MenusItems }) => {
    return <div className="Context-menu">
        {MenusItems.map(menuItem => <h4>{ menuItem}</h4>)}
  </div>;
};

export default Menu;
