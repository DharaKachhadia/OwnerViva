import React,{Component} from "react";
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
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Profile extends Component {
  static defaultProps = {
    center: {
      lat: 21.1702,
      lng: 72.8311
    },
    zoom: 12
  };

  render() {
  return (

      <div className="row grid-com">
        <div className="col-2 grid-left-com pt-2">
          <MdAccountCircle size={120} className="icon-color" />
          <h2>Owner Name</h2>
          <p>owner@gmail.com</p>
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
            <HiLocationMarker size={40} className="icon-color1" />
            <Link to="/location" className="links1">
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
          <button class="btn btn-success" 
          onClick={() => {
                           localStorage.removeItem("token");
                           window.location.href = "login";
                         }}>
            <HiOutlineLogout />
            Log Out
          </button>
        </div>
        <div className="col-10 grid-right-com">
          <h2 className="history">
            <HiLocationMarker className="icon-color" />
            Location
          </h2>
          <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAPxVr83wbDkDHrd9WYDb93J6vQ316_4TA'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        </div>
      </div>
 
  );
  }
};

export default Profile;
