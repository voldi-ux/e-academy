/** @format */

import React, { useEffect, useState } from "react";
import "./auth.css";
import { useProfileAuthcontext } from "../../contexts/AuthContext/useProfileAuthContext";
import { useNavigate } from "react-router-dom";
import AuthError from "../error/AuthError";
import { academyApi, register } from "../../apis/AcademyApi";
import { useAuth } from "../../contexts/AuthContext/useAuth";

const Profile = () => {
  const profile = useProfileAuthcontext();
  const { dispatch, lastname, firstname, email, username, password, confirmPassword, gender } = profile;
  const auth = useAuth();
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleGenderChange = (e) => dispatch({ type: "gender", payload: e.target.value });
  const handleEmailChange = (e) => dispatch({ type: "email", payload: e.target.value });
  const handleFirstnameChange = (e) => dispatch({ type: "firstname", payload: e.target.value });
  const handleLastnameChange = (e) => dispatch({ type: "lastname", payload: e.target.value });
  const handleUsernameChange = (e) => dispatch({ type: "username", payload: e.target.value });

  useEffect(() => {
    if (password.length < 4 || password !== confirmPassword || confirmPassword.length < 4) {
      navigate("/auth/login");
    }
  }, []);

  const onCreateProfile = async () => {
    if (username.length < 3 || lastname.length < 2 || firstname.length < 2 || gender == "" || email.length < 5) {
      setError(true);
      setMsg("Enter valid input values");
    } else {
      try {
        const response = await register(profile);
        auth.dispatch({ type: "authenticate", payload: response.data });
        // we making sure that all our subsequent requests will have proper
        //authorization header
        academyApi.interceptors.request.use((config) => {
          config.headers.Authorization = "Bearer " + response.data.token;
          return config;
        });
      } catch (error) {
        setMsg("Could not authenticate you, make sure your username and password are correct");
        setError(true);
        console.log(error);
      }
    }
  };

  return (
    <div className="create-profile-container">
      <div className="create-profile-container-inner">
        <h1 className="auth-heading profile-heading">create Profile</h1>
        <div className="two-input-container">
          {error && <AuthError msg={msg} />}
          <input autoComplete="off" placeholder="Your firstname" name="firstname" type={"text"} className="profile-input" onChange={handleFirstnameChange} value={firstname} />
          <input autoComplete="off" placeholder="Your  lastname" name="lastname" value={lastname} type={"text"} className="profile-input" onChange={handleLastnameChange} />
        </div>

        <input autoComplete="off" placeholder="Enter your username, must be unique" name="username" value={username} type={"text"} className="profile-input" onChange={handleUsernameChange} />
        <input autoComplete="off" placeholder="Your Email" name="email" type={"email"} value={email} className="profile-input" onChange={handleEmailChange} />

        <h1 className="profile-heading-2">Gender</h1>

        <div className="profile-selection">
          <div>
            <input type="radio" id="male" name="Gender" value="MALE" onChange={handleGenderChange} />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="Female" name="Gender" value="FEMALE" onChange={handleGenderChange} />
            <label htmlFor="Female">Female</label>
          </div>
          <div>
            <input type="radio" id="other" name="Gender" value="OTHER" onChange={handleGenderChange} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <button className="auth-button profile-button" onClick={onCreateProfile}>
          Create profile
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
