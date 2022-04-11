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
import { Link,useNavigate } from "react-router-dom";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const Station = () => {
  const [firstName,setFirstName] = useState("Loading")
  const [lastName,setLastName] = useState("Loading")
  const [id,setId] = useState("")
  const [email,setEmail] = useState("Loading")
  const[data,setData]= useState([])
  
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
  useEffect(() =>fetch(`http://evspoint.com/api/OwnerStation/${id}`)
  .then(response =>response.json())
  .then(data => {
      setData(data);
  })
  
  )
 
 
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
            <Link to="/ShowStationRequest" className="links">
              Add Station
            </Link>
          </p>
          <p>
            <MdOutlinePayment className="icon-color" />
            <Link to="/payment" className="links">
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
        <div className="col-10 grid-right-com ">
          <h2 className="history">
            <div className="d-flex justify-content-center align-items-center  mb-3">
              <h2 className="text-right bold ">My station</h2>
            </div> 
          </h2>
          {data.map((row) => (
            <div key={row._id}>
<div className="d-flex justify-content-center align-items-center  mb-3">
          
              <div className="p-3 bg addstation">
              <Row className="mb-3">           
              <div className="col-md-8">
                          <h1 className="StationName1">{row.StationName}</h1>
              </div>
                  <div className="col-md-4">
                   <button class="btn3 " onClick={()=>{navigate('/stationDetails',{state:{row}})}}>
                       View Details
                    </button>
                  </div>
              </Row>
              <div className="underline"></div>
              <Row className="mb-1">
              <div className="col-md-3">
                <p className="bold">Owner Name:</p>
                </div>
                <div className="col-md-3">
              <p class="bold own">{row.FirstName}{" "}{row.ownerName}</p>
              </div>
              </Row>
              <Row className="mb-1">
              <div className="col-md-2">
                <p className="bold">ContactNo:</p>
                </div>
                <div className="col-md-2">
              <p class="contact bold">{row.ContactNo}</p>
              </div>
              </Row>      
              <Row className="mb-1">
              <div className="col-md-4">
                <p className="bold">Available Plugs:</p>
                </div>
                <div className="col-md-6">
              <p class="plug2 bold">{row.plug1}{" , "}{row.Plug2}</p>
              </div>
              </Row> 
              </div>
              </div>
            </div>
          ))}  
  </div>

</div>
       
    </>
  );
};

export default Station;
