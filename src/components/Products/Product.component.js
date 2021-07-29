import React from "react";
import "./Product.component.css";

function Product() {
  window.scrollTo(0,0);
  return (
    <>
     <div className="page-heading">
        <span>REV'IT - Our products</span>
      </div>
      <div className="product-container">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <img src="images/helmet.jpg" alt="No Preview available" />
              <p>Helmets</p>
            </div>
          </div>
          <div className = "col-md-6">
                <div className = "box">
                    <img src = "images/helmet.jpg" alt="No Preview available"/>
                    <p>Gloves</p>
                </div>
            </div> <div className = "col-md-6">
                <div className = "box">
                    <img src = "images/helmet.jpg" alt="No Preview available"/>
                    <p>Outwears</p>
                </div>
            </div> <div className = "col-md-6">
                <div className = "box">
                    <img src = "images/helmet.jpg" alt="No Preview available"/>
                    <p>Helmets</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Product;
