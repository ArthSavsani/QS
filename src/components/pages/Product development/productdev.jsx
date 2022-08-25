import React from "react";
import "./productdev.css";
import img1 from "../../../img/Ellipse 643.svg";
import img2 from '../../../img/Ellipse 640.svg';
import img3 from "../../../img/Ellipse 641.svg";
import img4 from '../../../img/Ellipse 642.svg';
import img5 from '../../../img/image 312.svg';
import img6 from '../../../img/Ellipse 645.svg';
import img7 from '../../../img/Ellipse 636.svg';

const product = () => {
  return (
      <div className="main-wrapper">
        <div className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-6 align-items-center align-self-center">
                    <div className="row justify-content-center">
                        <div className="col-8 align-items-center align-self-center">
                            <h1 className="p-heading text-capitalize text-center">
                                product development
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-10 align-items-center align-self-center">
                            <p className="p-para text-center">
                                No one size fits everything. We consider your business objective and analyze the market to create the products with customized solutions. We convert the data points into robust story lines and create dynamic products. We are highly adept at complex product
                                development and testing programs. We support a variety of methods for product testing from facility and central location testing to in-home or on-site testing, using qualitative or quantitative or hybrid approaches to best
                                suit your product and test objectives. We are the perfect fusion of technology and expertise for the product development.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-2 align-items-center align-self-center">
                            <img src={img1} alt="img1" className="p-img-1" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-6 align-items-center align-self-center">
                            <h3 className="p-wwd text-center text-capitalize">
                                what we do?
                            </h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-8 align-items-center align-self-center">
                            <p className="p-wwd-para text-center">
                                Our team of Business Analysts, Technical Architects, and Developers shape your idea into an out of the box product with exemplary design & seamless interface with following principles.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-5 align-items-center align-self-center">
                    <img src={img2} alt="img2" className="p-img-2" />
                    <img src={img3} alt="img3" className="p-img-3" />
                    <img src={img4} alt="img4" className="p-img-4" />
                </div>
            </div>
            <div className="row justify-content-center g-5 align-baseline p-card">
                <div className="col-3">
                    <div className="card">
                        <img src={img7} alt="img7" className="p-img-7" />
                        <div className="card-body p-card-body text-center">
                            <h3 className="card-title text-capitalize p-dis">
                                discover
                            </h3>
                            <p className="dis-para card-text">
                                Understand and identify possible solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src={img7} alt="img7" className="p-img-7" />
                        <div className="card-body p-card-body text-center">
                            <h3 className="card-title text-capitalize p-des">
                                design
                            </h3>
                            <p className="des-para card-text">
                                Identify the solution, design requirements and delighters.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src={img7} alt="img7" className="p-img-7" />
                        <div className="card-body p-card-body text-center">
                            <h3 className="card-title text-capitalize p-dev">
                                development
                            </h3>
                            <p className="dev-para card-text">
                                Design to scale-up and guide acceptable trade-offs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-8 align-items-end align-self-end">
                    <img src={img5} alt="img5" className="p-img-5" />
                </div>
                <div className="col-2 align-items-start align-self-start">
                    <img src={img6} alt="img6" className="p-img-6" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default product;
