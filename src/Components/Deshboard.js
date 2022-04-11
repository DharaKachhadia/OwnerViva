import React, { useState, useEffect } from "react";
import {
  MdAccountCircle,
  MdSupervisorAccount,
  MdSpeed,
  MdOutlinePayment,
} from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { IoMdAddCircle, IoMdHelpCircle } from "react-icons/io";
import { HiLocationMarker, HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
// import {useImage} from 'react-image'

const Deshboard = () => {
  const [firstName, setFirstName] = useState("Loading");
  const [lastName, setLastName] = useState("Loading");
  const [contactNo, setContactNo] = useState("Loading");
  const [email, setEmail] = useState("Loading");

  useEffect(async () => {
    const token = await localStorage.getItem("token");
    if (token === null) {
      window.location.href = "login";
    } else {
      fetch("http://evspoint.com/api/ownerauth", {
        headers: new Headers({ Authorization: "Bearer " + token }),
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data)
          console.log(token);
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setContactNo(data.contactNo);
          setEmail(data.email);
        });
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "login";
  };
  return (
    <>
      <div class="row grid-com">
        <div class="col-xs-6 col-sm-4 col-lg-2 grid-left-com pt-2">
          <MdAccountCircle size={120} className="icon-color" />
          <h2>
            {firstName} {lastName}
          </h2>
          <h6>{email}</h6>
          <hr />
          <p>
            <MdSpeed size={40} className="icon-color1" />
            <Link to="/deshboard" className="links1">
              Deshboard
            </Link>
          </p>
          <p>
            <MdSupervisorAccount className="icon-color" />
            <Link to="/Profile" className="links">
              My profile
            </Link>
          </p>

          <p>
            <AiOutlineHistory className="icon-color" />
            <Link to="/history" className="links">
              History
            </Link>
          </p>
          <p>
            <IoMdAddCircle className="icon-color" />
            <Link to="/station" className="links">
              Add Station
            </Link>
          </p>
          <p>
            <MdOutlinePayment className="icon-color" />
            <Link to="/ShowStationRequest" className="links">
              Station Request
            </Link>
          </p>
          <p>
            <HiLocationMarker className="icon-color" />
            <Link to="/location" className="links">
              My Location
            </Link>
          </p>
          <p>
            <IoMdHelpCircle className="icon-color" />
            <Link to="/help" className="links">
              Help
            </Link>
          </p>
          <hr />
          <button className="btn btn-success" onClick={logout}>
            <HiOutlineLogout />
            Log Out
          </button>
        </div>

        <div className="col-xs-6 col-sm-8 col-lg-10 grid-right-com">
          <h2 className="history">
            <MdSpeed className="icon-color" />
            Deshboard
          </h2>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success position-absolute top-30 end-0 btn5"
        >
          <IoMdAddCircle className="icon" size={40} />
          <Link to="/station" className="addlink">
            Add Station
          </Link>
        </button>
      </div>
      <div className="menu">
        <div className="grid-right-com1">
          <Link to="/history" className="history1">
            My Orders
          </Link>
        </div>
        <div className="grid-right-com2">
          <Link to="/Mystation" className="history2">
            My station
          </Link>
        </div>
      </div>
      <div className="menu">
        <div className="grid-right-com3">
          <Link to="/help" className="history3">
            Help
          </Link>
        </div>
        <div className="grid-right-com4">
          <Link to="/Stationlist" className="history4">
            Station List
          </Link>
        </div>
      </div>
    </>
  );
};

export default Deshboard;
