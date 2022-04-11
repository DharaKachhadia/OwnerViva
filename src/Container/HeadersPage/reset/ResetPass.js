import React, { useState } from "react";
import signinpage from "../../images/signinpage.png";
import logo from "../../images/logo.png";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaCar} from "react-icons/fa"

const ResetPass = () => {
  const [mobile, setMobile] = useState("");

  function saveDataget() {
    let data = { mobile };
    // console.warn(data);
    fetch("https://evspointapp.herokuapp.com/owner/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.log("result", result);
      });
    });
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
                <h2 className="p-3">Reset Password</h2>
                <form className="form-input">
                  <div className="p-3">
                    {/* <label htmlFor="Mobile no.">Mobile no.</label> */}
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter Your Number"
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                    />
                    <FaMobileAlt />
                  </div>
                </form>
                <button
                  type="button"
                  className="btn1 d-grid gap-2 col-8 mx-auto m-3"
                  onClick={saveDataget}
                >
                  Submit
                </button>
              </div>
              <Link to="/register">Create new Account?</Link>
            </div>
          </div>
          <div className="container core mt-5">
          <div className="d-inline-flex">
            <div class="col-6">
              <p><FaCar/>  Electric vehicles support environmental justice</p>
              <p><FaCar/>  Clean air commitment</p>
            </div>
            <div class="col-6">
              <p><FaCar/>  EVs help your community achieve climate change goals</p>
              <p><FaCar/>  EV charging increases property value</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
