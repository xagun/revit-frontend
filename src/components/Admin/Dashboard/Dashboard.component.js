import React from "react";
import './Dashboard.component.css';
import { Link, withRouter } from "react-router-dom";

const DashboardComponent = (props) => {
  const logout = () => {
    let admin = {
      isAdmin: false,
      token: "",
    };
    // clear local storage
    localStorage.setItem("admin", JSON.stringify(admin));
    // navigate to login
    props.history.push(`/admin`);
    alert("Logged out successfully");
  };
  return (
    <>
    <div className="admin-header navbar">
        <div className="logo">
          <h1>REV'IT Sports Nepal</h1>
          <h2>Admin Dashboard</h2>
        </div>

        <div className="logout-container">
          <button onClick={logout} className="btn btn-success logout">
            Logout
          </button>
        </div>
      </div>
        <div className = "admin-contents">
        <div className = "admin-navBar">
        <Link to = "/viewSlider">Slider</Link>
        <Link to = "/viewHomeContent">HomeContent</Link>
        <Link to = "/viewContact">Contact</Link>
        <Link to = "/viewBooking">Booking</Link>
        <Link to = "/viewTestRide">TestRide</Link>
        <Link to = "/viewGallery">Gallery</Link>
        <Link to = "/viewNewsletter">Newsletter</Link>


        </div>
      

      </div>
    
    </>
  );
};

export const Dashboard = withRouter(DashboardComponent);
