import React, { useEffect, useState } from "react";
import HomeCarousel from "../Carousel/Carousel.component";
import "./Home.component.css";
import { Link } from "react-router-dom";

import Axios from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_FILE_URL;

function Home() {
  

  const [homeItem, setHomeItem] = useState([])


  useEffect(() => {
    Axios.get(`${BASE_URL}/homenews/getAll`)
      .then((res) => {
     
        setHomeItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <>
      <div className="home-container">
        <HomeCarousel />

        <div className="test-ride-book row">
          <div className="col-md-6">
            <span>REV'IT 250 - New Arrival</span>
          </div>
          <div className="col-md-6">
            <Link to = "/testRide">
            <button>Book a test ride</button>

            </Link>
          </div>
        </div>
        <div className="home-image-content">
          <h1>Recent Highlights</h1>
          <hr className ="solid-hr"/>

{homeItem.slice(0,3).map((data, index)=>{
  return(
    <div className="text-over-image">
    <img src={`${BASE_IMG_URL}/${data.uploadFile}`} alt="No preview available" />
    <div className="bottom-left">
      <h1>{data.heading}</h1>
      <p>{data.details}</p>
      <button>Read More</button>
    </div>
  </div>
  )
})}
        


        </div>
      </div>
    </>
  );
}

export default Home;
