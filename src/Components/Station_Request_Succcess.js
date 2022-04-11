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
import { Link } from "react-router-dom";


const Contact = () => {
  const [firstName,setFirstName] = useState("Loading")
  const [lastName,setLastName] = useState("Loading")
  const [contactNo,setContactNo] = useState("Loading")
  const [email,setEmail] = useState("Loading")
  
  function goback() {       
            window.location.href = "deshboard";
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
            Your request
          </h2>
          
        </div>
      </div>
  
      <div className="col-10 grid-right-com">
     
      <section className="text-center">
          <img src={require('../Container/images/download.png')}  className="image"/>
      </section>
      <h1 className="mt-5 text-center msg">Your Request for New Station</h1>
      <h1 className="mt-5 text-center msg">is Successfully Send</h1>
      <div className="mt-5 text-center">
                    <button
                      className="btn btn-success btngoback "
                      type="button" 
                      onClick={goback}
                    >
                      Go Back
                    </button>
                  </div>
    </div>
      
  </>
  );
};

export default Contact;
