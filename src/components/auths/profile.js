/** @format */

import React from "react";
import "./auth.css";

const Profile = () => {
  return (
    <div className="create-profile-container">
      <div className="create-profile-container-inner">
        <h1 className="auth-heading profile-heading">create Profile</h1>
        <div className="two-input-container">
          <input autoComplete="off" placeholder="Your Name" name="name" type={"text"} className="profile-input" />
          <input autoComplete="off" placeholder="Your Surname" name="suranme" type={"text"} className="profile-input" />
        </div>

        <input autoComplete="off" placeholder="Your School" name="school" type={"text"} className="profile-input" />
        <input autoComplete="off" placeholder="Your Email" name="email" type={"email"} className="profile-input" />

        <h1 className="profile-heading-2">Pick your subjects</h1>

        <div className="profile-selection">
          <div>
            <input type="checkbox" id="Mathematics" name="subject" value="Mathematics" />
            <label for="Mathematics">Mathematics</label>
          </div>
          <div>
            <input type="checkbox" id="Physics" name="subject" value="Physics" />
            <label for="Physics">Physical Science</label>
          </div>
          <div>
            <input type="checkbox" id="Life" name="subject" value="Life" />
            <label for="Life">Life Sciences</label>
          </div>
        </div>
        <button className="auth-button profile-button">Create profile</button>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
