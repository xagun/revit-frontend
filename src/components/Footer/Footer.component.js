import React, {useState} from "react";
import "./Footer.component.css";
import { FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";
import AOS from "aos";
import Axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
 
});


function Footer() {
AOS.refresh();


  const [email, setEmail] = useState("");

  const submitContact = (e) => {
    e.preventDefault();

    Axios.post(`${BASE_URL}/newsletter/insert`, {
    
      email: email,
   
    }).then(()=>{
      alert('Your email request is successfully sent');
 
      e.target.reset();

    })
  };


  return (
    <>
      <div class="search-text">
        <div class="container">
          <div class="row text-center">
            <div class="form">
              <h4 data-aos="fade-up">SIGN UP TO OUR NEWSLETTER</h4>
              <form id="search-form" class="form-search form-horizontal" onSubmit = {submitContact}>
                <input
                  type="text"
                  class="input-search"
                  placeholder="Email Address"
                  data-aos="fade-right"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button type="submit" class="btn-search" data-aos="fade-left">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <div class="row">
        

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="menu">
                <span data-aos="fade-left">Our Products</span>
                <li>
                  <a href="#" data-aos="fade-right">Helmets</a>
                </li>

                <li>
                  <a href="#" data-aos="fade-right">Gloves</a>
                </li>

                <li>
                  <a href="#" data-aos="fade-right">Accessories</a>
                </li>

                <li>
                  <a href="#" data-aos="fade-right">Outwears</a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="address">
                <span data-aos="fade-right">Contact</span>
                <li data-aos="fade-right">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <p>123654789</p>
                </li>
                <li data-aos="fade-right">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <p>Nayabazar, Kathmandu</p>
                </li>
                <li data-aos="fade-right">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <p>revitsportsnepal@gmail.com</p>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div className="social-links">
                <span data-aos="fade-left">Get in touch</span>
                <div className="social-icons"  data-aos="fade-up">
                  <a href = "https://www.facebook.com/revitsportsnepal" target="_blank" rel="noreferrer" >
                  <FaFacebookF className = "footer-icons"/>

                  </a>
                  <a href = "https://www.instagram.com/revitsportsnepal" target ="_blank" rel="noreferrer">
                  <FaInstagram className = "footer-icons"/>

                  </a>
                  <a href = "https://www.youtube.com" target ="_blank" rel="noreferrer">
                  <FaYoutube className = "footer-icons"/>

                  </a>
                </div>
              </div>
              <div className ="distributor">
              <span data-aos="fade-left">Sole Distributor</span>
          

                <img src = "images/saharalogo.png" alt ="No preview available" data-aos="fade-right"/>
               
               
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footerText">© All right reserved</div>
    </>
  );
}

export default Footer;
