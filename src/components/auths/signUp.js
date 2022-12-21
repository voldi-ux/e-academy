/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./auth.css";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-container-inner">
        <h1 className="sign-up-container-heading auth-heading">Sign up with E-academy</h1>
        <input autoComplete="off" placeholder="Your Email" name="email" type={"email"} className="sign-up-input" />
        <input autoComplete="off" placeholder="Your password" name="password" type={"password"} className="sign-up-input" />
        <input placeholder="Confirm Your Password" name="confirmPassword" type={"password"} className="sign-up-input" />
        <p className="sign-p">
          Already have an account ?{" "}
          <Link className="sign-in-link" to={"/auth/sign-in"}>
            sign in instead
          </Link>
        </p>

        <button className="sign-up-button auth-button">sign up</button>
        <h1 className="sign-up-container-heading-2">or Sign In With</h1>
        <button className="auth-button auth-button-google">
          <FcGoogle size={25} />
          <h3>google sign in</h3>
        </button>
        <p className="sign-up">Please note a verification email will be sent to the email provided so ensure that it is correct and active</p>
      </div>
    </div>
  );
};

export default SignUp;
