import React ,{useState,useEffect} from "react";
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

const Profile = () => {
  const [firstName,setFirstName] = useState("Loading")
  const [lastName,setLastName] = useState("Loading")
  const [contactNo,setContactNo] = useState("Loading")
  const [email,setEmail] = useState("Loading")

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
 }
  return (
    <>
      <div className="row grid-com">
        <div className="col-2 grid-left-com pt-2">
          <MdAccountCircle size={120} className="icon-color" />
          <h2>{firstName} {lastName}</h2>
          <h6>{email}</h6>
          <hr />
          <p>
            <MdSpeed className="icon-color" />
            <Link to="/deshboard" className="links">
              Deshboard
            </Link>
          </p>
          <p>
            <MdSupervisorAccount size={40}className="icon-color1" />
            <Link to="/Profile" className="links1">
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
        <div className="col-10 grid-right-com">
          <h2 className="history">
            <MdSupervisorAccount className="icon-color" />
            Profile
          </h2>
          <div className="container rounded mt-5 mb-5 ">
            <div className="row">
              <div className="col-md-12 border-right">
                <div className="p-3">
                  <div className="d-flex justify-content-center align-items-center  mb-3">
                    <h4 className="text-right">Basic Information</h4>
                  </div>  
                  {/* <div className="row mt-2">
                    <div className="col-md-6 form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        value=""
                        id="floatingInput"
                      />
                      <label for="floatingInput">First Name</label>
                    </div>
                    <div className="col-md-6 form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        value=""
                        id="floatingInput"
                      />
                      <label for="floatingInput">Last name</label>
                    </div>
                  </div> */}
                   <div className="row mt-2">
                    <div className="col-md-6">
                      <label for="floatingInput">first Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter first Name"
                        value={firstName}
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="floatingInput">last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        placeholder="enter last Name"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label for="floatingInput">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter phone number"
                        value={contactNo}
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="floatingInput">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        // value="a-s 201 varj vihar"
                        placeholder="enter address"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label for="floatingInput">Email ID</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter email id"
                        value={email}
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="floatingInput">Gender</label>
                      <input
                        type="text"
                        className="form-control"
                        // value="female"
                        placeholder="enter gender"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label for="floatingInput">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="country"
                        // value="indian"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="floatingInput">State</label>
                      <input
                        type="text"
                        className="form-control"
                        // value="gujarat"
                        placeholder="state"
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-success profile-button"
                      type="button"
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
