import React, {useState} from "react";
import "../Booking/Booking.component.css";
import Axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function TestRideBook() {
    window.scrollTo(0,0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [licenseNo, setLicenseNo] = useState("");

    const submitTestRide = (e) => {
      e.preventDefault();
  
      Axios.post(`${BASE_URL}/testride/insert`, {
        name: name,
        email: email,
        phone: phone,
        address: address,
        licenseNo:licenseNo
      }).then(()=>{
        alert('Your test ride request is successfully sent');
   
        e.target.reset();
  
      })
    };

  return (
    <>
      <div className="page-heading">
        <span>Book a test ride of REV'IT 250</span>
      </div>
      <div className="booking-container">
        <form className="form-group" onSubmit={submitTestRide}> 
          <label for="name">Full Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="email">Email</label>

          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="phone">Phone No.</label>

          <input
            name="phone"
            type="text"
            className="form-control"
            placeholder="Enter your Phone No."
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

<label for="address">Address</label>

<input
  name="address"
  type="text"
  className="form-control"
  placeholder="Enter your address"
  required
  onChange={(e) => {
    setAddress(e.target.value);
  }}
/>

<label for="licenseNo">License No.</label>
<input
  name="licenseNo"
  type="text"
  className="form-control"
  placeholder="Enter your License No."
  required
  onChange={(e) => {
    setLicenseNo(e.target.value);
  }}
/>


          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default TestRideBook;
