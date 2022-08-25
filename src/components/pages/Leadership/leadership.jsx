import React from "react";
import "./leadership.css";
import Img1 from "../../../img/image 327.svg";
import Img2 from "../../../img/image 328.svg";
import Img3 from "../../../img/image 329.svg";
import Img4 from "../../../img/image 330.svg";

const leadership = () => {
  return (
      <>
      <div className="main">
        <div className="container-fluid">
          <div className="row mt-5 justify-content-center le-heading">
            Our Creative Team
          </div>
          <div className="row mt-3 justify-content-center le-heading1">
            From bad websites that aren’t representative of your business.
            <br /> Its time to stop wasting money on stinky marketing. Our{" "}
            <br />
            Creative Team will help you look good, connect better with your
            <br /> clients, and up your sales game.
          </div>
          <img src={Img1} alt="img1" className="le-img1" />
       <div className="row" style={{padding: "0px 206px"}}>
        <div className="col-md-4">
          <div class="column">
            <img src={Img2} alt="Snow" class="le-img2" />
            <p className="le-p">
              <b>Pavan Kumar</b>
              <img src={Img4} alt="Snow" class="im1" />
              <br />
              Founder & ceo
            </p>
          </div>
          </div>
          <div className="col-md-4">
          <div class="column">
            <img src={Img2} alt="Forest" class="le-img3" />
            <p className="le-p1">
              <b>Pavan Kumar</b>
              <img src={Img4} alt="Snow" class="im1" />
              <br />
              Founder & ceo
            </p>
          </div>
          </div>
          <div className="col-md-4">
          <div class="column">
            <img src={Img2} alt="Mountains" class="le-img4" />
            <p className="le-p2">
              <b>Pavan Kumar</b>
              <img src={Img4} alt="Snow" class="im1" />
              <br />
              Founder & ceo
            </p>
          </div>
          </div>
          </div>
          <div className="row" style={{padding: "0 213px"}}>
            <div className="col-md-6">
          <div class="column">
            <img src={Img2} alt="Forest" class="le-img5"></img>
            <p className="le-p3">
              <b>Pavan Kumar</b>
              <img src={Img4} alt="Snow" class="im1" />
              <br />
              Founder & ceo
            </p>
          </div>
          </div>
          <div className="col-md-6">
          <div class="column">
            <img src={Img2} alt="Forest" class="le-img6" />
            <p className="le-p4">
              <b>Pavan Kumar</b>
              <img src={Img4} alt="Snow" class="im1" />
              <br /> Founder & ceo
            </p>
          </div>
          </div>
          </div>
          <img src={Img3} alt="img3" className="le-imgg3" />
        </div>
      </div>
    </>
  );
};

export default leadership;
