/** @format */
import React from "react";
import { ReactComponent as UserIcon } from "../../resources/icons/user.svg";

import "./userInfor.css";
import { useAuth } from "../../contexts/AuthContext/useAuth";

const UserInfor = () => {
  const { username} = useAuth()
  return (
    <div className="user-infor">
      <UserIcon className="user-icon" />
      <h1>Hey, {username}</h1>
      <h4>(admin)</h4>
    </div>
  );
};

export default UserInfor;
