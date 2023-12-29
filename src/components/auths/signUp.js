/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./auth.css";
import { useProfileAuthcontext } from "../../contexts/AuthContext/useProfileAuthContext";
import AuthError from "../error/AuthError";
import { useAuth } from "../../contexts/AuthContext/useAuth";

const SignUp = () => {
  const { password, confirmPassword, email, dispatch } = useProfileAuthcontext();
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChangeEmail = (e) => dispatch({ type: "email", payload: e.target.value });
  const handleChangePassword = (e) => dispatch({ type: "password", payload: e.target.value });
  const handleChangeConfirmPassword = (e) => dispatch({ type: "confirm_password", payload: e.target.value });
  const handleContinue = () => {
    if (password.length > 4 && email.length > 4 && password == confirmPassword) {
      navigate("/auth/create-profile");
    } else {
      setError(true);
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-container-inner">
        <h1 className="sign-up-container-heading auth-heading">Sign up with E-academy</h1>
        {error && <AuthError msg={"make sure that the passwords matche and that the email is well formated"} />}
        <input autoComplete="off" placeholder="Your Email" name="email" value={email} type={"email"} onChange={handleChangeEmail} className="sign-up-input" />
        <input autoComplete="off" placeholder="Your password" name="password" value={password} onChange={handleChangePassword} type={"password"} className="sign-up-input" />
        <input placeholder="Confirm Your Password" name="confirmPassword" type={"password"} onChange={handleChangeConfirmPassword} value={confirmPassword} className="sign-up-input" />
        <p className="sign-p">
          Already have an account ?{" "}
          <Link className="sign-in-link" to={"/auth/login"}>
            sign in instead
          </Link>
        </p>

        <button className="sign-up-button auth-button" onClick={handleContinue}>
          Continue
        </button>
        <p className="sign-up">Please note a verification email will be sent to the email provided so ensure that it is correct and active</p>
      </div>
    </div>
  );
};

export default SignUp;
