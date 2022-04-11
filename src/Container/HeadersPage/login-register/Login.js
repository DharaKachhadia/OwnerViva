import React, { useState } from "react";
import logo from "../../images/logo.png";
import signinpage from "../../images/signinpage.png";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

const Login = () => {
  const [contactNo, setcontactNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function saveDataget() {
    if (contactNo.length === 0) {
      alert("Mobile Number is requied");
    } else if (password.length === 0) {
      alert("Password is requied");
    } else {
      let data = { contactNo, password };
      fetch("http://evspoint.com/api/owner/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIffsInR5cCI6IkpXVCJ1.eyJ1c2VySWQiOiI2MWJjNWRlMzEyODRlN2ZjYTM3OGMwMzAiLCJffpYXQiOjE2Mzk3MzQ3NTV2.bHygAffPHN6AUUldKvEyvLLdtWvjGYPdaxjtrPnYw88Vo",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
        },
        body: JSON.stringify(data),
      })
        .then((resp) => resp.json())
        .then((result) => {
          if (!result.token) {
            // alert("invalid ContactNo or Password");
            setError("invalid ContactNo or Password");
          } else {
            console.log(result.token);
            localStorage.setItem("token", result.token);
            window.location.href = "deshboard";
          }
        });
    }
  }
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
              <img src={signinpage} alt="page" className="img-fluid ima" />
            </div>
            <div className="col-xs-6 col-sm-4 col-lg-6 login-right">
              <div>
                <h2 className="p-3">Welcome!</h2>
                <form className="form-input">
                  <div className="p-3">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter Your Number"
                      value={contactNo}
                      onChange={(e) => {
                        setcontactNo(e.target.value);
                      }}
                    />
                    <FaMobileAlt />
                  </div>
                  <div className="p-3">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <FaRegEyeSlash />
                  </div>
                </form>
                <h6 className="err">{error}</h6>
                <Link to="/resetpass">Forget Password?</Link>
                <button
                  type="button"
                  className="btn1 d-grid gap-2 col-8 mx-auto m-3"
                  onClick={saveDataget}
                >
                  Log In
                </button>
              </div>
              <Link to="/register">Don't have Account?</Link>
            </div>
          </div>
          <div className="container core mt-5">
            <h3>Core Values</h3>
            <div className="d-inline-flex">
              <div class="col-6">
                <p>
                  <FaCar />
                  Electric vehicles support environmental justice
                </p>
                <p>
                  <FaCar /> Clean air commitment
                </p>
              </div>
              <div class="col-6">
                <p>
                  <FaCar />
                  EVs help your community achieve climate change goals
                </p>
                <p>
                  <FaCar /> EV charging increases property value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
