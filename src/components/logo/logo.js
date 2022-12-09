/** @format */

import React from "react";
import { ReactComponent as IconN } from "../../resources/icons/logo.svg";
import {MdOutlineSchool} from "react-icons/md";


import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <MdOutlineSchool size={100}   className="icon" />
      <h2 className="name">E-academy</h2>
    </div>
  );
};

export default Logo;
