import React from 'react';
import img1 from '../../img/Vector.png';
import img2 from '../../img/map.jpg';
import img3 from '../../img/Vector-1.png'
import './footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export function Footer() {
    return (
        <div className='container f-container'>
           <div className="row f-bag">
            <h1 className='f-head'>Contact now</h1>
                  <input
                    className='f-email'
                    type="email"
                    id="Email"
                    pattern=".+@globex\.com"
                    required
                  />
                  <img src={img3} alt="img3" className='f-img3'/>
                <div className="col-6">
                 <img src={img1} alt="img1" className='f-img1' />
                 <p className='f-par'>Qurinom Solutions is a global product cum service-based IT start up empowered with Innovative Research & Development, Implementation and Rapid Delivery. We specialise in Artificial Intelligence, IoT and Embedded Systems based Android & IOS Mobile Applications, UX/UI Modernisation, Cloud & Digital Transformation, Healthcare Services, Structural & Interior Design and also render services for hedge clients over Digital Marketing & Consultancy in cross-functional Domains</p>
                  </div>
                  <div className="col-6">
                  <img src={img2} alt="img2" className="f-img2" />
                  </div>             
                  <div className='row'>
                    <div  className='col-3 f-copyright'>C 2022 Qurinom Solutions</div>
                    <div className='col-3 f-phonenumber'>+91-8668567433/8698047720</div>
                    <div className='col-3 f-mailid'>consulting@qurinomsolutions.com</div>
                  <div className="col-3 f-social">
               {/* <ul className="col-3 f-social"> */}
                      <li>
                        <a href="https://www.facebook.com/qurinomsolutions/">
                          <FaFacebookF className='socialicons' />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/qurinom?s=08">
                          <FaTwitter className='socialicons' />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <FaInstagram className='socialicons' />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/qurinomsolutions">
                          <FaLinkedinIn className='socialicons' />
                        </a>
                      </li>
               {/* </ul> */}
            </div>
          </div>
          </div>
          
        </div>
    )
}