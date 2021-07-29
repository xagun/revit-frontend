import React from "react";
import "./Motorcycle.component.css";
import { useState } from "react";



function Motorcycle() {
  
  const [toggleStateSpecification, setToggleStateSpecification] = useState(1);
  const [toggleStateFeature, setToggleStateFeature] = useState(1);

  const toggleSpecificationTab = (index) => {
    setToggleStateSpecification(index);
  };
  const toggleFeatureTab = (index) => {
    setToggleStateFeature(index);
  };
  return (
    <>
      <div className="bike-banner-show">
        <div className="bike-banner-details ">
          <span>REV'IT 250</span>
          {/* <span>NPR. 4,50,000 /-</span> */}
          <button>Book Now</button>
        </div>

        <img src="images/gallery14.jpg" alt="No preview available" />
        <div className="bottom-left">
          <span>The power you can never predict. REV'IT 250</span>
        </div>
      </div>
 

      <div className="motorcycle-container">
        <div className="row bike-show">
          <div className="col">
            <div className="bike-show-details">
              <h1>REV'IT 250</h1>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
              </p>
              <p>
                {" "}
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
              <span>Options Available : Dirt & Motard </span>
          

            </div>
          </div>
        </div>

        <div className="row bike-options">
          <div className="col-md-6">
            <div className="options">
              <h2>Dirt</h2>
              <img src="images/dirt-option.png" alt="No preview available" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="options">
              <h2>Motard</h2>
              <img src="images/motard-option.png" alt="No preview available" />
            </div>
          </div>
        </div>


        <div className = "brochure">
          <span>Get a REV'IT 250 Brochure...</span>
          <button>Download</button>
        </div>

        <div className="specifications">
          <div className="strike">
            <span>
              {" "}
              <h1>specifications</h1>
            </span>
          </div>
          <div className="container">
            <div className="bloc-tabs">
              <button
                className={
                  toggleStateSpecification === 1 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleSpecificationTab(1)}
              >
                Transmission
              </button>
              <button
                className={
                  toggleStateSpecification === 2 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleSpecificationTab(2)}
              >
                Engine
              </button>
              <button
                className={
                  toggleStateSpecification === 3 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleSpecificationTab(3)}
              >
                Braking
              </button>
              <button
                className={
                  toggleStateSpecification === 4 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleSpecificationTab(4)}
              >
                Shock
              </button>
              <button
                className={
                  toggleStateSpecification === 5 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleSpecificationTab(5)}
              >
                Cooling
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleStateSpecification === 1
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />
                <hr />
                <h1>Transmission</h1>
                <p>
                 REV'IT 250 comes with 6 speed gears. 
                </p>
              </div>

              <div
                className={
                  toggleStateSpecification === 2
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />

                <hr />
                <h1>Engine</h1>

                <p>
                 Vertical 250 carburetor engine 
                </p>
              </div>

              <div
                className={
                  toggleStateSpecification === 3
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />

                <hr />
                <h1>Braking</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos
                  voluptatum beatae aperiam voluptatem atque. Beatae rerum
                  dolores sunt.
                </p>
              </div>
              <div
                className={
                  toggleStateSpecification === 4
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />

                <hr />
                <h1>Shock</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos
                  voluptatum beatae aperiam voluptatem atque. Beatae rerum
                  dolores sunt.
                </p>
              </div>
              <div
                className={
                  toggleStateSpecification === 5
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />

                <hr />
                <h1>Cooling</h1>

                <p>
              Air cooling system
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="strike">
            <span>
              {" "}
              <h1>features</h1>
            </span>
          </div>

          <div className="container">
            <div className="bloc-tabs">
              <button
                className={
                  toggleStateFeature === 1 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleFeatureTab(1)}
              >
                Tab 1
              </button>
              <button
                className={
                  toggleStateFeature === 2 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleFeatureTab(2)}
              >
                Tab 2
              </button>
              <button
                className={
                  toggleStateFeature === 3 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleFeatureTab(3)}
              >
                Tab 3
              </button>
              <button
                className={
                  toggleStateFeature === 4 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleFeatureTab(4)}
              >
                Tab 4
              </button>
              <button
                className={
                  toggleStateFeature === 5 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleFeatureTab(5)}
              >
                Tab 5
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleStateFeature === 1
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />

                <hr />
                <h1>Transmission</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati praesentium incidunt quia aspernatur quasi quidem
                  facilis quo nihil vel voluptatum?
                </p>
              </div>

              <div
                className={
                  toggleStateFeature === 2
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />

                <hr />
                <h1>Transmission</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente voluptatum qui adipisci.
                </p>
              </div>

              <div
                className={
                  toggleStateFeature === 3
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />

                <hr />
                <h1>Transmission</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos
                  voluptatum beatae aperiam voluptatem atque. Beatae rerum
                  dolores sunt.
                </p>
              </div>
              <div
                className={
                  toggleStateFeature === 4
                    ? "content  active-content"
                    : "content"
                }
              >
                <img src="images/engine.jpg" alt="No Preview Available" />

                <hr />
                <h1>Transmission</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos
                  voluptatum beatae aperiam voluptatem atque. Beatae rerum
                  dolores sunt.
                </p>
              </div>
              <div
                className={
                  toggleStateFeature === 5
                    ? "content  active-content"
                    : "content"
                }
              >
                {" "}
                <img src="images/engine.jpg" alt="No Preview Available" />
                <hr />
                <h1>Transmission</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos
                  voluptatum beatae aperiam voluptatem atque. Beatae rerum
                  dolores sunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Motorcycle;
