/** @format */

import React from "react";
import Logo from "../logo/logo";
import SideBarlinks from "../sideBarLinks/sideBarLInks";
import UserInfor from "../userInfor/userInfor";
import "./sideNav.css";

const SideNav = () => {
    return (
      <div className="sideNav">
            <Logo />
            <UserInfor />
             <SideBarlinks />
      </div>
    );
};

export default SideNav;
