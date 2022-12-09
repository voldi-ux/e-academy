/** @format */

import React from "react";
import { ReactComponent as IconN } from '../../resources/icons/notification.svg';
import {FaBell} from "react-icons/fa"

import "./notificationIcon.css";

const NotificationIcon = () => {
  return (
    <div className="NotificationIcon-container">
      <FaBell  className="icon" /> 
      <h2 className="count">20</h2>
    </div>
  );
};

export default NotificationIcon;
