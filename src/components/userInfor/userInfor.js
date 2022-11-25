/** @format */
import React from "react";
import { ReactComponent as UserIcon } from "../../resources/icons/user.svg";

import "./userInfor.css";

const UserInfor = () => {
  return (
    <div className="user-infor">
          <UserIcon className="user-icon" />
          <h1>
              Mr Voldi
          </h1>
          <h4>
              (admin)
          </h4>
    </div>
  );
};

export default UserInfor;
