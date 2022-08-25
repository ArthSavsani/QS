import React from "react";
import "./it.css";
import Img1 from "../../../img/about___3 1.svg";
import Img2 from "../../../img/image 311-1.svg";
import Img3 from "../../../img/speaker-1.svg";
import Img4 from "../../../img/bulb on-1.svg";
import Img5 from "../../../img/document folder.svg";

const itconsult = () => {
  return (
    <>
      <div className="main-wrapper i-main">
        <div className="container-fluid">
          <div className="row justify-content-center mt-5">
            <div className="col-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center d-inline-flex">
                <h1 className="i-heading">
                  <span className="color1">IT</span>
                  <span className="text-capitalize px-3 color2">consulting</span>
                </h1>
              </div>
              <div className="row justify-content-center">
                <p className="i-para">
                  Qurinom Solutions is a one-stop solution for all your complex
                  business problems relating to IT Consultancy. We craft and
                  offer personalized, affordable, and reliable IT Consultancy
                  strategies that will work wonders for your business ensuring
                  higher ROI.
                </p>
              </div>
              <div className="row">
                <div className="col-4 align-items-center align-self-center">
                  <a href="/" className="i-btn btn btn-warning btn-lg">
                    <span className="rdm text-capitalize">read more</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 align-items-center align-self-center">
              <img src={Img1} alt="img1" className="i-img-1" />
            </div>
          </div>
          <div className="row mt-3 justify-content-start">
            <div className="col-4 align-items-center align-items-start">
              <h4 className="wwa text-capitalize">who we are?</h4>
            </div>
          </div>
          <div className="row mt-3 justify-content-start">
            <div className="col-12 align-items-center align-self-start">
              <h3 className="mpcc text-capitalize">
                most professional consulting company
              </h3>
            </div>
          </div>
          <div className="row mt-3 justify-content-start">
            <div className="col-12 align-items-center align-self-center">
              <p className="i-para-1">
                We are a team of passionate and professional technocrats who
                work on agility and believe in revolutionizing the world with
                cutting edge technologies. We are here to embed with high
                transformable technologies to excel and flourish our Partner’s
                businesses globally. We ensure that together we take our
                business to the next level by helping you in the best possible
                manner while delivering exceptional results to flourish over the
                success ratio of your business.
              </p>
            </div>
          </div>
          <div className="row mt-3 justify-content-start">
            <div className="col-6 align-items-center align-self-center">
              <h4 className="os text-capitalize">our services</h4>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-5 justify-content-evenly d-flex  mb-5">
            <div className="col">
              <div className="card i-card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={Img2}
                      className="img-fluid rounded-start i-img-2 mt-1"
                      alt="img2"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body text-center">
                      <h5 className="card-title c-card-title mt-3 text-capitalize">
                        innovative solutions architecture
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        Our solutions are customized according to the demands
                        and strategies of the enterprise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card i-card mb-3 ">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={Img3}
                      className="img-fluid rounded-start i-img-3 mt-1"
                      alt="img3"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body text-center">
                      <h5 className="card-title c-card-title mt-3 text-capitalize">
                        domain architecture
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        We have expertise in Data Technology and Infrastructure
                        , Business, Information Architecture, Application &
                        Integration, and Security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card i-card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={Img4}
                      className="img-fluid rounded-start i-img-4 mt-1"
                      alt="img4"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body text-center">
                      <h5 className="card-title c-card-title mt-3 text-capitalize">
                        enterprise architecture
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        We conduct an in-depth enterprise analysis and then
                        recommend target architecture with a roadmap of
                        prioritised projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card i-card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={Img5}
                      className="img-fluid rounded-start i-img-5 mt-1"
                      alt="img5"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body text-center">
                      <h5 className="card-title c-card-title mt-3 text-capitalize">
                        easy staff integration
                      </h5>
                      <p className="card-text c-card-text mt-2">
                        we analyze the company’s requirements and then outsource
                        the best-suited candidate ensuring the addition of
                        highly skilled employees to the team for exceptional
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default itconsult;
