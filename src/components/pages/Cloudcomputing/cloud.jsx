import React from "react";
import "./cloud.css";
import Img1 from "../../../img/Ellipse 787.svg";
import Img2 from "../../../img/image 311.svg";
import Img3 from "../../../img/speaker.svg";
import Img4 from "../../../img/bulb on (2).svg";
import Img5 from "../../../img/bulb on.svg";
import Img6 from "../../../img/bulb on.svg";
import Img7 from "../../../img/bulb off.svg";
import Img8 from "../../../img/image 326.svg";

export function Cloudcomputing() {
// const Cloudcomputing = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row mt-5 justify-content-center">
            <div className="col-6 align-items-center align-self-start">
              <h1 className="c-heading text-capitalize mt-5">cloud computing</h1>
              <p className="cl-para mt-5">
                By analysing and moving your data to a reliable Cloud platform,
                Qurinom Solutions ensures that your company's assets are moved
                to the Cloud. We simplify life and the relocation process.
              </p>
            </div>
            <div className="col-6 align-self-end c-hea1">
              <img src={Img1} alt="img1" className="c-img-1" />
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-6 align-items-center align-self-start">
              <h3 className="c-head text-capitalize mb-5">our services</h3>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-evenly d-flex mb-5">
            <div className="col">
              <div className="card mb-3" style={{border: "none"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Img2}
                      className="img-fluid rounded-start img-2 mt-3"
                      alt="img2"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title c-title mt-3 text-capitalize">
                        strategy for the cloud
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        {" "}
                        We define the finest Cloud tactics for your business
                        based on your demands in order to meet your goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 c-hea2" style={{border: "none"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Img3}
                      className="img-fluid rounded-start c-img-3 mt-3"
                      alt="img3"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title c-title mt-3 text-capitalize">
                        migration to the cloud
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        In a co-ordinated manner, all of your company's
                        operations are assembled as digital data on Clouds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 c-hea2" style={{border: "none"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Img4}
                      className="img-fluid rounded-start c-img-4 mt-3"
                      alt="img4"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title c-title mt-3 text-capitalize">
                        managing the cloud
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        We manage your data while orchestrating and operating
                        the Clouds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{border: "none"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Img5}
                      className="img-fluid rounded-start c-img-5 mt-3"
                      alt="img5"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title c-title mt-3 text-capitalize">
                        cloud storage
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        We manage your data while orchestrating and operating
                        the Clouds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3" style={{border: "none"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Img6}
                      className="img-fluid rounded-start c-img-6 mt-3"
                      alt="img6"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title c-title mt-3 text-capitalize">
                        safety in the cloud
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        We manage your data while orchestrating and operating
                        the Clouds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 c-hea2" style={{border: "none"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Img7}
                      className="img-fluid rounded-start c-img-7 mt-3"
                      alt="img7"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title c-title mt-3 text-capitalize">
                        evaluation of the cloud
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        Our initial evaluation will discover application
                        candidates that are good for cloud migration and will
                        provide the best results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-start mb-5">
            <div className="col-6 align-items-start align-self-end">
              <img src={Img8} alt="img8" className="c-img-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

