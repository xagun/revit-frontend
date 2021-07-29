import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.component.css";
import { Link } from "react-router-dom";
import Axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_FILE_URL;

function HomeCarousel() {
  const [carouselItem, setCarouselItem] = useState([]);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    Axios.get(`${BASE_URL}/slider/getAll`)
      .then((res) => {
       
        setCarouselItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="banner">
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
          {carouselItem.slice(0, 3).map((slide, i) => {
            return (
              <div className="carousel-item">
                <div className="centerText">
                  <h1>{slide.heading}</h1>
                  <div className="paragraph-detail">
                    <p>{slide.details}</p>
                    <Link to="/slider-detail">
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
                <div className="slider-image">
                  <img
                    src={`${BASE_IMG_URL}/${slide.uploadFile}`}
                    alt="No preview available"
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
export default HomeCarousel;
