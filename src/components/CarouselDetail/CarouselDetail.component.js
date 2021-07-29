import React from "react";
import "./CarouselDetail.component.css";

function CarouselDetail() {
  window.scrollTo(0,0);
  return (
    <>
      <div className="slider-detail">
          <div className = "image">
          <img src="images/about.jpg" alt="No preview available" />

          </div>
          <div className = "detail">
          <h1>Take the Adventure Leave no Trace </h1>
        <p>
          There's no denying the world around
          us. The scale of the various environments and diversity of terrain to
          be traversed is ripe for exploration. But at the heart of the
          adventurist's spirit also lies a need for harmony with the
          surroundings, a peace of mind that can only come with looking beyond
          the playground, and filling the role of guardians, as well as that of
          explorers.
        </p>
          </div>
    
      </div>
    </>
  );
}

export default CarouselDetail;
