/** @format */

import React from "react";
import "./contextMenu.css";

const MenuItem = ({ menu, color }) => {
  return (
    <>
      <h4 className="menu-item" onClick={menu.action}>
        {menu.option}
      </h4>
    </>
  );
};

export default MenuItem;
