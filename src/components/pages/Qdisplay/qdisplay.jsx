import React from "react";
import "./qdisplay.css";
import Img1 from "../../../img/image 319.svg";
import Img2 from "../../../img/arrow.svg";
import Img3 from "../../../img/image 318.svg";

const qdisplay = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row text-center mt-5">
            <div className="col-6 col-sm-6 align-self-center q-left">
              <h1 className="q-heading text-capitalize">q display</h1>
              <h3 className="sm-head text-capitalize">our products</h3>
              <p className="q-para">
                QS is coming up with a seamless portable screen for laptops.Our
                end goal with QDisplay is to re-engineer a full-size external
                laptop experience into the thinnest, lightest feasible screen
                which you can “plug n play”.
              </p>
            </div>
            <div className="col-6 col-sm-6 align-self-center hea1">
              <img src={Img1} alt="img1" className="img-1" />
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-6 align-self-center">
              <h3 className="key text-capitalize">key features</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 align-self-center">
              <ul className="list">
                <li>
                  <span>
                    <img src={Img2} alt="img2" className="arrow mt-2 px-2" />
                  </span>
                  No external power required
                </li>
                <li>
                  <span>
                    <img src={Img2} alt="img2" className="arrow mt-2 px-2" />
                  </span>
                  Blend with an existing laptop
                </li>
                <li>
                  <span>
                    <img src={Img2} alt="img2" className="arrow mt-2 px-2" />
                  </span>
                  Hazel free experience with comfortable rotation
                </li>
                <li>
                  <span>
                    <img src={Img2} alt="img2" className="arrow mt-2 px-2" />
                  </span>
                  Adjustable Brightness
                </li>
                <li>
                  <span>
                    <img src={Img2} alt="img2" className="arrow mt-2 px-2" />
                  </span>
                  Works with all computer operiting systems (MS, macOS, Chrome
                  OS, Linux)
                </li>
                <li>
                  <span>
                    <img src={Img2} alt="img2" className="arrow mt-2 px-2" />
                  </span>
                  Connect with interchangeable USB Type-C
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5 mb-5 justify-content-end">
            <div className="col-2 align-self-start">
              <a href="/" className="btn btn-lg btn-info text-capitalize">
                <span className="query mt-1 mb-2 px-5">query</span>
              </a>
            </div>
            <div className="col-6 align-self-end hea2">
              <img src={Img3} alt="img3" className="q-img-2 mb-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default qdisplay;
