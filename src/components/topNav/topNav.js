/** @format */
import React from "react";
import NotificationIcon from "../notifactionIcon/notifactionIcon.js";
import Time from "../time/time.js";
import "./topNav.css";

import {FaBars} from 'react-icons/fa'


const TopNav = () => {
  const openMenu = () => { 
    const menu = document.getElementById("nav-menu");
    menu.style.display = "block";
  }
  return (
    <div className="topNav">
      <span className="top-nav-menu-bar">
        <FaBars size={30} onClick={openMenu} className="top-nav-bar-icon"/>
      </span>
      <Time />
      <div className="icons">
        <NotificationIcon />
        <h3>Admin</h3>
      </div>
    </div>
  );
};

export default TopNav;
