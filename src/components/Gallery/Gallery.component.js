import React, { useState, useEffect } from "react";
import "./Gallery.component.css";
import CloseIcon from "@material-ui/icons/Close";
import Axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const IMG_URL = process.env.REACT_APP_FILE_URL;

const Gallery = () => {
 

  const [data, setData] = useState([]);

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
 
    document.getElementById("navbar_top").style.display = "none";
    
  };

  const closeModel = () => {
    setModel(false);
    document.getElementById("navbar_top").style.display = "";

  };

  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        closeModel();
    }
});

  useEffect(() => {
    Axios.get(`${BASE_URL}/gallery/getAll`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="page-heading">
        <span>REV'IT - gallery</span>
      </div>

      <div className="gallery-container">
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} />
          <CloseIcon onClick={() => closeModel()} />
        </div>
        <div className="gallery-contents">
          {data.map((item, index) => {
            return (
              <div
                className="gallery-image"
                key={index}
                onClick={() => getImg(`${IMG_URL}/${item.uploadFile}`)}
              >
                <img
                  src={`${IMG_URL}/${item.uploadFile}`}
                  alt="No preview available"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
