import React, { useState } from "react";
import signuppage from "../../images/signuppage.png";
import logo from "../../images/logo.png";

const Register = () => {
  const [contactNo, setcontactNo] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");

  function saveData() {
    if (firstName.length === 0) {
      alert("First name is requied");
    } else if (lastName.length === 0) {
      alert("Last name is requied");
    } else if (email.length === 0) {
      alert("Email is requied");
    } else if (contactNo.length === 0) {
      alert("Contact Number is requied");
    } else if (password.length === 0) {
      alert("please enter your password");
    } else if (confirmPassword.length === 0) {
      alert("please re-enter your password");
    } else if (confirmPassword !== password) {
      alert("Password and Comfirm password are not match");
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNo: contactNo,
        password: password,
        confirmPassword: confirmPassword,
      };

      fetch("http://evspoint.com/api/owner/signup", {
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
        .then((res) => res.json())
        .then(
          (result) => {
            if (!result.token) {
              // alert("invalid ContactNo or Password");
              setError("invalid Authentication")
            } else {
              console.log(result.token);
              localStorage.setItem("token", result.token);
              window.location.href = "deshboard";
            }
          }
        ) 
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
              <img src={signuppage} alt="page" className="img-fluid ima" />
            </div>
            <div className="col-xs-6 col-sm-4 col-lg-6 login-right">
              <div>
                <h2 className="p-3">Register</h2>
                <form className="form-input">
                  <div className="p-3">
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name*"
                      value={firstName}
                      onChange={(e) => {
                        setfirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name*"
                      value={lastName}
                      onChange={(e) => {
                        setlastName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <input
                      type="text"
                      name="lname"
                      placeholder="Email*"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile no*"
                      value={contactNo}
                      onChange={(e) => {
                        setcontactNo(e.target.value);
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setconfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                </form>
                <h6 className="err">{error}</h6>
                <button
                  type="button"
                  className="btn1 d-grid gap-2 col-8 mx-auto m-3"
                  onClick={saveData}
                >
                  Registration Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
