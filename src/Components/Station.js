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
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const Station = () => {
  const [firstName,setFirstName] = useState("Loading")
  const [lastName,setLastName] = useState("Loading")
  const [id,setId] = useState("")
  const [email,setEmail] = useState("Loading")
  const [data, setData] = useState({
    image: "",
    ownerName: "",
    StationName: "",
    ContactNo: "",
    address: "",
    city: "",
    state: "",
    openingTime: "",
    closeTime: "",
    AdharCardNo: "",
    pincode:"",
    Plug:"",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("ownerId", id);
      formData.append("ownerName", data.ownerName);
      formData.append("StationName", data.StationName);
      formData.append("ContactNo", data.ContactNo);
      formData.append("address", data.address);
      formData.append("pincode", data.pincode);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("openingTime", data.openingTime);
      formData.append("closeTime", data.closeTime);
      formData.append("Plug", data.Plug);
      formData.append("AdharCardNo", data.AdharCardNo);
      
      const res = await fetch(`http://evspoint.com/api/addStationRequest`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", image: "" });
        window.location.href = "request_Succcess"
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <IoMdAddCircle size={40} className="icon-color1" />
            <Link to="/station" className="links1">
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
          <button class="btn btn-success" onClick={logout}>
            <HiOutlineLogout />
            Log Out
          </button>
        </div>
        <div className="col-10 grid-right-com ">
          <h2 className="history">
            <IoMdAddCircle className="icon-color" />
            Add Station
          </h2>
          



  <div className="d-flex justify-content-center align-items-center  mb-3">
  <div className="p-3 bg addstation ">
            <div className="d-flex justify-content-center align-items-center  mb-3">
              <h4 className="text-right bold title">Send Request For Add New-Station</h4>
            </div>  
            <Row className="mb-3">
              <div className="col-md-4">
                <label for="floatingInput" className="bold">ownerName:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your ownerName" 
                  onChange={handleChange("ownerName")}
                  
                />
                {/* <p className="err">{emailerror}</p> */}
              
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">StationName:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your StationName" 
                  onChange={handleChange("StationName")}
                />
                {/* <p className="err">{emailerror}</p> */}
           
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">ContactNo:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your ContactNo" 
                  onChange={handleChange("ContactNo")}
                  
                />
                {/* <p className="err">{emailerror}</p> */}
           
            </div>
            </Row>
            <Row className="mb-3">
            
             
          
            <div className="col-md-4">
                <label for="floatingInput" className="bold">openingTime:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your address" 
                  onChange={handleChange("openingTime")}
                  
                />
                {/* <p className="err">{emailerror}</p> */}
           
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">closeTime:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your city" 
                  onChange={handleChange("closeTime")}
                  
                />
                {/* <p className="err">{emailerror}</p> */}
           
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your state" 
                  onChange={handleChange("address")}
                />
                {/* <p className="err">{emailerror}</p> */}
           
            </div>
            </Row>
            <Row className="mb-3">
           
            <div className="col-md-4">
                <label for="floatingInput" className="bold">pincode:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your pincode" 
                  onChange={handleChange("pincode")}
                />
                {/* <p className="err">{emailerror}</p> */}
           
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">state:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter openingTime" 
                  onChange={handleChange("state")}
                 
                />
                {/* <p className="err">{messageerror}</p> */}
            </div>
           
              <div className="col-md-4">
                <label for="floatingInput" className="bold">city</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your closeTime" 
                  onChange={handleChange("city")}
                />
                {/* <p className="err">{dmessageerror}</p> */}
             
            </div>
            </Row>
            <Row className="mb-3">
            <div className="col-md-4">
                <label for="floatingInput" className="bold">AdharCardNo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your closeTime" 
                  onChange={handleChange("AdharCardNo")}
                />
                {/* <p className="err">{dmessageerror}</p> */}
             
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">Plugs:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Station Plugs 'Like: Chomed-1,Type-2'" 
                  onChange={handleChange("Plug")}
                />
                {/* <p className="err">{dmessageerror}</p> */}
             
            </div>
            <div className="col-md-4">
            <label for="floatingInput" className="bold">Select Your Station Image</label>
        <input
          className="form-control select"
          type="file"
          accept="image/*"
          name="image"
           onChange={handleChange("image")}
        />
      </div>
            </Row>

           
              <p>{data.ownerId}</p>
            <div className="mt-5 text-center">
              
              <button
                className="btn btn-success profile-button subbtn"
                type="button"
                onClick={handleSubmit}
              >
                Submit Request
              </button>
            </div>
          </div>
  </div>
  </div>

</div>
       
    </>
  );
};

export default Station;
