/** @format */

import React from "react";
import { ReactComponent as IconN } from '../../resources/icons/notification.svg';

import "./notificationIcon.css";

const NotificationIcon = () => {
  return (
    <div className="NotificationIcon-container">
      <IconN className="icon" /> 
      <h2 className="count">20</h2>
    </div>
  );
};

export default NotificationIcon;
