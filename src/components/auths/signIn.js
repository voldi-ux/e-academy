/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./auth.css";
import { useProfileAuthcontext } from "../../contexts/AuthContext/useProfileAuthContext";
import AuthError from "../error/AuthError";
import { academyApi, authenticate } from "../../apis/AcademyApi";
import { useAuth } from "../../contexts/AuthContext/useAuth";

const SignIn = () => {
  const { username, password, dispatch } = useProfileAuthcontext();
  const auth = useAuth();
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const signIn = async () => {
    if (username.length < 3 || password.length < 4) {
      setErr(true);
      setMsg("Enter valid input values");
    } else {
      try {
        const response = await authenticate({ username, password });
        auth.dispatch({ type: "authenticate", payload: response.data });

        // we making sure that all our subsequent requests will have proper
        //authorization header
        academyApi.interceptors.request.use((config) => {
          config.headers.Authorization = "Bearer " + response.data.token;
          return config;
        });
      }  catch (error) {
        setMsg("Could not authenticate you, make sure your username and password are correct");
        setErr(true);
        console.log(error);
      }
    }
  };

  const handleChangeUsername = (e) => dispatch({ type: "username", payload: e.target.value });
  const handleChangePassword = (e) => dispatch({ type: "password", payload: e.target.value });

  return (
    <div className="sign-in-container">
      <div className="sign-in-container-inner">
        <h1 className="sign-in-container-heading auth-heading">Sign in to E-academy</h1>
        {err && <AuthError msg={msg} />}
        <input autoComplete="off" placeholder="Your  username" name="username" type={"text"} value={username} className="sign-in-input" onChange={handleChangeUsername} />
        <input autoComplete="off" placeholder="Your Password" name="password" type={"password"} className="sign-in-input" value={password} onChange={handleChangePassword} />
        <p className="sign-p">
          Don't already have an account ?{" "}
          <Link className="sign-in-link" to={"/auth/sign-up"}>
            sign up instead
          </Link>
        </p>

        <button className="sign-in-button auth-button" onClick={signIn}>
          sign in
        </button>
        {/* <h1 className="sign-in-container-heading-2">or Sign In With</h1>
        <button className="auth-button auth-button-google">
          <FcGoogle size={25} />
          <h3>google sign in</h3>
        </button> */}
        <p className="sign-p">
          Forgot password ?{" "}
          <Link className="sign-in-link" to={"/"}>
            reset it here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
