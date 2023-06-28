/** @format */

import React from "react";
import "./contextMenu.css";

const MenuItem = ({ menu, color }) => {
    return (
      <>
        {color ? (
          <h4
            className="menu-item-color"
            onClick={menu.action}
            style={{
              backgroundColor: menu.option
            }}
          ></h4>
        ) : (
          <h4 className="menu-item" onClick={menu.action}>
            {menu.option}
          </h4>
        )}
      </>
    );
};

export default MenuItem;
