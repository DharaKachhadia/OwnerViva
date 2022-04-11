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
import { Link,useLocation,useNavigate } from "react-router-dom";
import {Row } from "react-bootstrap";

const Payment = () => {
  const [firstName,setFirstName] = useState("Loading")
  const [lastName,setLastName] = useState("Loading")
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
          setEmail(data.email);
        });
    }
  }, []);

 const location = useLocation();
 const navigate = useNavigate();
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
            <MdOutlinePayment  className="icon-color" />
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
          <button class="btn btn-success" onClick={logout}>
            <HiOutlineLogout />
            Log Out
          </button>
        </div>
        <div className="col-10 grid-right-com">
          <h2 className="history">
            <MdOutlinePayment className="icon-color" />
            OrderDetails
          </h2> 
          <div className="d-flex justify-content-center align-items-center  mb-3">
  <div className="p-3 bg orderDetails ">
            <div className="d-flex justify-content-center align-items-center">
              <h1 className="title1">Station Details</h1>
            </div>  
            
                 <div className="d-flex justify-content-center align-items-center  mb-3">
                 <div className="detailsbox">

                 <div className="d-flex justify-content-center align-items-center  mb-3">
                          <div className="stationbox">
                               <div className="mt-2 text-center">
                                     <h1 className=" white">{location.state.row.StationName}</h1>
                               </div>
                          </div>    
                  </div>
                            
            <Row className="mb-1">
              <div className="col-md-4">
                <p className="bold margin" >Owner Name:</p>
                </div>
                <div className="col-md-7">
              <p class="name1 bold">{location.state.row.ownerName}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-3">
                <p className="bold margin">ContactNo:</p>
                </div>
                <div className="col-md-3">
              <p class="contact bold">{location.state.row.ContactNo}</p>
              </div>
              </Row>      
              <Row className="mb-1">
              <div className="col-md-3">
                <p className="bold margin">Address:</p>
                </div>
                <div className="col-md-9">
              <p class="address bold">{location.state.row.address}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-3">
                <p className="bold margin">City:</p>
                </div>
                <div className="col-md-2">
              <p class="plug bold">{location.state.row.city}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-3">
                <p className="bold margin">State:</p>
                </div>
                <div className="col-md-2">
              <p class="plug bold">{location.state.row.state}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-4">
                <p className="bold margin">Available Plug:</p>
                </div>
                <div className="col-md-8">
              <p class="plug3 bold">{location.state.row.plug1}{" , "}{location.state.row.Plug2}</p>
              </div>
              </Row>
                 </div>
            </div>
           
    
            <div className="mt-5 text-center">
              
              <button
                className="btn btn-success profile-button subbtn"
                type="button"
                onClick={()=>{navigate('/Mystation')}}
              >
                Go Back
              </button>
            </div>
          </div>
  </div>
          {/* <div>{location.state.row.ContactNo}</div>        */}
        </div>
      </div>
    </>
  );
};

export default Payment;
