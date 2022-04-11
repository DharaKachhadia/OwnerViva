import React ,{useState,useEffect} from "react";
import {
  MdAccountCircle,
  MdSupervisorAccount,
  MdSpeed,
  MdOutlinePayment,
} from "react-icons/md";
import contactpic from "../Container/images/station.jpg";
import { AiOutlineHistory } from "react-icons/ai";
import { IoMdAddCircle, IoMdHelpCircle } from "react-icons/io";
import { HiLocationMarker, HiOutlineLogout } from "react-icons/hi";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


const Contact = () => {
  const [firstName,setFirstName] = useState("Loading")
  const [lastName,setLastName] = useState("Loading")
  const [contactNo,setContactNo] = useState("Loading")
  const [email,setEmail] = useState("Loading")
  
  const [error,setError]=useState("")

  const [Name,setName] = useState("")
  const [nameerror,setNameError] = useState("")

  const [Email,setMail] = useState("")
  const [emailerror,setEmailError] = useState("")

  const [Message,setIssue] = useState("")
  const [messageerror,setMessageError] = useState("")
  
  const [DMessage,setMessage] = useState("")
  const [dmessageerror,setDMessageerror] = useState("")

  function saveDataget() {
    if (Name.length === 0) {
      setNameError("*Name is requied");
    } else if (Email.length === 0) {
      setEmailError("*Email is requied");
    }else if (Message.length === 0) {
      setMessageError("*issue is requied");
    }else if (DMessage.length === 0) {
      setDMessageerror("*message is requied");
    } else {
      let data = { Name, Email,Message,DMessage };
      fetch("http://evspoint.com/api/Ownerhelp", {
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
             console.log("help message send successful");
             window.location.href = "helpSuccess";         
        });
    }
  }
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
   <div class="col-xs-6 col-sm-4 col-lg-2 grid-left-com pt-2">
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
            <IoMdHelpCircle size={40} className="icon-color1" />
            <Link to="/help" className="links1">
              Help
            </Link>
          </p>
          <hr />
          <button class="btn btn-success" onClick={logout}>
            <HiOutlineLogout />
            Log Out
          </button>
        </div>

         <div className="col-xs-6 col-sm-8 col-lg-10 grid-right-com">
          <h2 className="history">
            <IoMdHelpCircle  className="icon-color" />
            Help
          </h2>
          
        </div>
      </div>
  
      <div className="col-10 grid-right-com">

      <section>
      <div>
        <div className="d-flex justify-content-center align-items-center  mb-3">
        <div className="p-3 bg help ">
                  <div className="d-flex justify-content-center align-items-center  mb-3">
                    <h4 className="text-right bold">Help-Center</h4>
                  </div>  
                 
                   <div className="row mt-2 d-flex justify-content-center align-items-center mb-3">
                    <div className="col-md-6">
                      <label for="floatingInput" className="bold">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter Your Name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      <p className="err">{nameerror}</p>
                    </div>
                  </div>
                  <div className="row mt-2 d-flex justify-content-center align-items-center  mb-3">
                    <div className="col-md-6">
                      <label for="floatingInput" className="bold">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter Your Email" 
                        onChange={(e) => {
                          setMail(e.target.value);
                        }}
                      />
                      <p className="err">{emailerror}</p>
                    </div>
                  </div>
                  <div className="row mt-2 d-flex justify-content-center align-items-center  mb-3">
                    <div className="col-md-6">
                      <label for="floatingInput" className="bold">Describe Your issue:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter issue" 
                        onChange={(e) => {
                          setIssue(e.target.value);
                        }}
                      />
                      <p className="err">{messageerror}</p>
                    </div>
                  </div>
                  <div className="row mt-2 d-flex justify-content-center align-items-center  mb-3">
                    <div className="col-md-6">
                      <label for="floatingInput" className="bold">Message:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter Your Message" 
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }} 
                      />
                      <p className="err">{dmessageerror}</p>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-success profile-button"
                      type="button"
                      onClick={saveDataget}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
        </div>
        </div>
      </section>
    </div>
      
  </>
  );
};

export default Contact;
