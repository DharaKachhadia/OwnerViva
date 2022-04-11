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
import {Row } from "react-bootstrap";

const Payment = () => {
  const [firstName,setFirstName] = useState("Loading")
  const [lastName,setLastName] = useState("Loading")
  const [email,setEmail] = useState("Loading")
  const [id,setId] = useState()
  const [user,setUsers] = useState([])

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
          setEmail(data.email);
          setId(data.ownerId)
        })
    }
  }, []);
 
  useEffect(async () => {
    fetch(`http://evspoint.com/api/stationRequest/${id}`)
         .then(response => {
           return response.json()
         })
         .then(data => {
           setUsers(data)
         })
  })

 const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
 }
  return (
    <>
      <div className="row grid-com">
        <div className="col-2 grid-left-com pt-2">
          <MdAccountCircle size={120} className="icon-color" />
          <h2>{firstName}{lastName}</h2>
          <h6>{email}</h6>
          <hr />
          <p>
            <MdSpeed className="icon-color" />
            <Link to="/deshboard" className="links">
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
            <MdOutlinePayment size={40} className="icon-color1" />
            <Link to="/ShowStationRequest" className="links1">
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
          <button class="btn btn-success" onClick={logout}>
            <HiOutlineLogout />
            Log Out
          </button>
        </div>
        <div className="col-10 grid-right-com">
          <h2 className="history">
            <MdOutlinePayment className="icon-color" />
            Your Station Request 
          </h2>
          {/* <h1>{id}</h1> */}
          <div>
           {user.map((row) => (
            <div key={row._id}>
<div className="d-flex justify-content-center align-items-center  mb-3">
          
              <div className="p-3 bg addstation">
              <Row className="mb-1">
              <div className="col-md-3">
                          <div className="d-flex justify-content-center align-items-center  mb-3">
                            <img src={row.image} className="image1"/></div>
                          </div>
              <div className="col-md-9">
                          <h1 className="StationName">{row.StationName}</h1>
              </div>
              </Row>
              <div className="underline"></div>
              <Row className="mb-1">
              <div className="col-md-2">
                <p className="bold">OwnerName:</p>
                </div>
                <div className="col-md-2">
              <p>{row.ownerName}</p>
              </div>
              <div className="col-md-2">
                <p className="bold">ContactNo:</p>
                </div>
                <div className="col-md-2">
              <p>{row.ContactNo}</p>
              </div>
              <div className="col-md-2">
                <p className="bold">AdharCardNo:</p>
                </div>
                <div className="col-md-2">
              <p>{row.AdharCardNo}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-2">
                <p className="bold">Address:</p>
                </div>
                <div className="col-md-6">
              <p>{row.address}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-2">
                <p className="bold">City:</p>
                </div>
                <div className="col-md-2">
              <p>{row.city}</p>
              </div>
              <div className="col-md-2">
                <p className="bold">State:</p>
                </div>
                <div className="col-md-2">
              <p>{row.state}</p>
              </div>
              <div className="col-md-2">
                <p className="bold">Pincode:</p>
                </div>
                <div className="col-md-2">
              <p>{row.pincode}</p>
              </div>
              </Row>
             
              <Row className="mb-1">
              <div className="col-md-2">
                <p className="bold">OpeningTime:</p>
                </div>
                <div className="col-md-6">
              <p>{row.openingTime}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-2">
                <p className="bold">ClosingTime:</p>
                </div>
                <div className="col-md-6">
              <p>{row.closeTime}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-2">
                <p className="bold">AdharCardNo:</p>
                </div>
                <div className="col-md-6">
              <p>{row.AdharCardNo}</p>
              </div>
              </Row>      
              </div>
              </div>
            </div>
          ))}  
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
