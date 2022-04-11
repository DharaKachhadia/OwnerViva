import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import signuppage from "../../images/signuppage.png";

const SignUpvarification = () => {
  return (
    <>
      <div className="container-fluid main-back">
        <div className="container main-bg">
          <div className="side-image"></div>
          <div className="form-background"></div>
          <img
            src={logo}
            alt="logo"
            width="150px"
            height="39.87px"
            className="ima1"
          />
          <div className="row">
            <div className="col-xs-6 col-sm-8 col-lg-6 login-left ">
              <img src={signuppage} alt="page" className="img-fluid ima" />
            </div>
            <div className="col-xs-6 col-sm-4 col-lg-6 login-right">
              <div>
                <h2 className="p-3">Verification Code</h2>
                <form className="form-input">
                  <div className="p-3">
                    <input type="password" placeholder="Password" value="" />
                    <input type="password" placeholder="Password" value="" />
                    <input type="password" placeholder="Password" value="" />
                    <input type="password" placeholder="Password" value="" />
                  </div>
                </form>
                <button
                  type="button"
                  className="btn1 d-grid gap-2 col-8 mx-auto m-3"
                >
                  Submit
                </button>
              </div>
              <Link to="/register">Don't have Account?</Link>
              <Link>Resend OTP</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpvarification;
