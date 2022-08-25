import React from 'react';
import './qhc.css';
import img1 from '../../../img/bg.png';
import img2 from '../../../img/doctor-woman-400px.png';

const QHR = () => {
    return (
            <div className="wrapper">
        
        <div className="landing">
            <div className="landingText" data-aos="fade-up" data-aos-duration="1000">
                <h1><span style={{color:"#e0501b",fontSize: "4vw"}}>Q Health Care </span> </h1>
                <h2>Our Products</h2>
                <h3> We provide special short-term courses to all to enhance hospital management skills, clinical skills, patients care skills, and personality/communications skills for our listed members at a discounted rate. Professional and Financial security
                    along with the happiness of our members is our top-notch priority. </h3>
            </div>
            <div className="landingImage" data-aos="fade-down" data-aos-duration="2000">
                <img src={img1} alt="img1" />
            </div>
        </div>
        <div className="about">
            <div className="aboutText" data-aos="fade-up" data-aos-duration="1000">
                <h1> ADDITIONAL LINE OF BUSINESS <span style={{color:"#2f8be0", fontSize:"3vw"}}></span> </h1>
                <img src={img2} alt="img2" />
            </div>
            <div className="aboutList" data-aos="fade-left" data-aos-duration="1000">
                <ol className='health-list'>
                    <li>
                        <span>01</span>
                        <p>Consultation for establishing small, medium & large scale hospitals.</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p> Diligence services for hospital sales-purchase through our expert teams of Lawyers, CA.</p>

                    </li>
                    <li>
                        <span>03</span>
                        <p> Property experts, Doctors, and Business consultants.</p>

                    </li>
                    <li>
                        <span>04</span>
                        <p> We provide medical instruments and consumables manufacturers to use our platform for the promotion of their businesses.</p>
                    </li>
                </ol>
            </div>
        </div>
        </div>
    );
};

export default QHR;