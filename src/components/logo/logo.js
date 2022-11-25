/** @format */

import React from "react";
import { ReactComponent as IconN } from "../../resources/icons/logo.svg";

import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <IconN className="icon" />
      <h2 className="name">E-academy</h2>
    </div>
  );
};

export default Logo;
