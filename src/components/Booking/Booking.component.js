import React, { useState }  from "react";
import "./Booking.component.css";
import Axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Booking() {
  window.scrollTo(0,0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [motorcycle, setMotorcycle] = useState("");


  const submitBooking = (e) => {
    e.preventDefault();

    Axios.post(`${BASE_URL}/booking/insert`, {
      name: name,
      email: email,
      phone: phone,
      address: address,
      motorcycle:motorcycle
    }).then(()=>{
      alert('Your message request is successfully sent');
 
      e.target.reset();

    })
  };

  return (
    <>
      <div className="page-heading">
        <span>Book a ride for you</span>
      </div>
      <div className="booking-container">
        <form className="form-group" onSubmit = {submitBooking}>
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
            placeholder="Enter your name"
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

<label for="motorcycle">Motorcycle Model (Tyre Type)</label>

<select className="form-control" name="motorcycle"  required
                onChange={(e) => {
                  setMotorcycle(e.target.value);
                }}>
  <option value="Revit 250 (Motard)">Revit 250 (Motard)</option>
  <option value="Revit 250 (Dirt)">Revit 250 (Dirt)</option>

</select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Booking;
