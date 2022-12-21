import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import "./auth.css";


const SignIn = () => { 
    return (
      <div className="sign-in-container">
        <div className="sign-in-container-inner">
          <h1 className="sign-in-container-heading auth-heading">Sign in to E-academy</h1>
          <input autoComplete="off" placeholder="Your Email" name="email" type={"email"} className="sign-in-input" />
          <input autoComplete="off" placeholder="Your Password" name="password" type={"password"} className="sign-in-input" />
          <p className="sign-p">
            Don't already have an account ?{" "}
            <Link className="sign-in-link" to={"/auth/sign-up"}>
              sign up instead
            </Link>
          </p>

          <button className="sign-in-button auth-button">sign in</button>
          <h1 className="sign-in-container-heading-2">or Sign In With</h1>
          <button className="auth-button auth-button-google">
            <FcGoogle size={25} />
            <h3>google sign in</h3>
          </button>
          <p className="sign-p">
            Forgot password ?{" "}
            <Link className="sign-in-link" to={"/auth/sign-up"}>
              reset it here
            </Link>
          </p>
        </div>
      </div>
    );
}



export default SignIn;