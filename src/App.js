import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResetPass from "./Container/HeadersPage/reset/ResetPass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deshboard from "./Components/Deshboard";
import History from "./Components/History";
import Profile from "./Components/Profile";
import Station from "./Components/Station";
import ShowStationRequest from "./Components/ShowStationRequest";
import Help from "./Components/Help";
import Location from "./Components/Location";
import Contact from "./Components/Contact";
import SignUpvarification from "./Container/HeadersPage/login-register/SignUpvarification";
import ResetVerification from "./Container/HeadersPage/reset/ResetVerification";
import Login from "./Container/HeadersPage/login-register/Login";
import Register from "./Container/HeadersPage/login-register/Register";
import HelpSuccess from "./Components/helpSuccess";
import Station_Request_Succcess from "./Components/Station_Request_Succcess";
import OrderDetails from "./Components/OrderDetails";
import Mystation from "./Components/Mystation";
import StationDetails from "./Components/StationDetails";
import Stationlist from "./Components/Stationlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="resetpass" element={<ResetPass />} />
        <Route path="deshboard" element={<Deshboard />} />
        <Route path="history" element={<History />} />
        <Route path="profile" element={<Profile />} />
        <Route path="station" element={<Station />} />
        <Route path="ShowStationRequest" element={<ShowStationRequest />} />
        <Route path="help" element={<Help />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signvarification" element={<SignUpvarification />} />
        <Route path="resetVerification" element={<ResetVerification />} />
        <Route path="helpSuccess" element={<HelpSuccess />} />
        <Route path="request_Succcess" element={<Station_Request_Succcess />} />
        <Route path="orderDetails" element={<OrderDetails />} />
        <Route path="Mystation" element={<Mystation />} />
        <Route path="stationDetails" element={<StationDetails />} />
        <Route path="Stationlist" element={<Stationlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
