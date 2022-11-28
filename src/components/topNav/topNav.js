/** @format */
import React from "react";
import NotificationIcon from "../notifactionIcon/notifactionIcon.js";
import Time from "../time/time.js";
import "./topNav.css";

const TopNav = () => {
  return (
    <div className="topNav">
      <Time />
      <div className="icons">
        <NotificationIcon />
        <h3>Admin</h3>
      </div>
    </div>
  );
};

export default TopNav;
