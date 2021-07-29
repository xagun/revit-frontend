import React, { useState }  from "react";
import "./Contact.component.css";
import Axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Contact() {
  window.scrollTo(0,0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitContact = (e) => {
    e.preventDefault();

    Axios.post(`${BASE_URL}/contact/insert`, {
      name: name,
      email: email,
      phone: phone,
      message: message,
    }).then(()=>{
      alert('Your message request is successfully sent');
 
      e.target.reset();

    })
  };

  return (
    <>
           <div className="page-heading">
           <span>Please fell free to contact us anytime</span>
               </div> 

      <div className="contact-container">
          <div className = "row">

              <div className = "col-md-6 contact-form-image">
                  <img src = "images/contact1.png" alt="No preview available" />
              </div>
              <div className = "col-md-6">
              <div className="contact-form">
            <form className="form-group" onSubmit = {submitContact}>
              
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
                placeholder="Enter your phone"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <label for="message">Message</label>
  
              <textarea
              name="message"
                type="text"
                className="form-control"
                placeholder="Enter your message"
                rows="5"
              
                onChange={(e) => {
                  setMessage(e.target.value);
  
                }}
              />
  
              <button type = "submit">Submit</button>
            </form>
          </div>
                  </div>
          </div>
        
      </div>
      <div className = "maps-container">
        <div className = "location">
        <i class="fas fa-location-arrow"></i>
       <span> Opposite to Agni bhawan</span>
        </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7972794987695!2d85.30470221444455!3d27.723544731388216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194aa2210371%3A0xf50c2f172a184413!2sAGNI%20bhawan!5e0!3m2!1sen!2snp!4v1625031864460!5m2!1sen!2snp" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </>
  );
}

export default Contact;
