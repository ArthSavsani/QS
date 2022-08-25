import React from 'react';
import './about.css';
import img1 from '../../../img/Ellipse 750.png';
import img2 from '../../../img/Ellipse 751.png';
import img3 from '../../../img/Ellipse 752.png';
import img4 from '../../../img/Ellipse 753.png';
import img5 from '../../../img/image 322 (2).png';

const Aboutus = () => {
    return (
        <div className='container'>
        <div className="row mt-5 justify-content-center">
        <div className="col-6 align-items-center align-self-center">
            <h1 className="A-heading text-center text-capitalize mb-5">
                About Us
            </h1>
            <p className="about-para">
                In these chaotic times, anytime we are faced with a problem or require a new product, we search for it online. Most of the time, the product we're looking for is right next door, but we're not aware of it, or we want to feel the product we're going to
                buy before we buy it, or we need it right away. So, to address these difficulties, we're launching a new product called SHOWCASE, which will provide us access to all of the local retailers in our area and allow us to buy anything we need
                at our convenient locations.
            </p>
        </div>
        <div className="col-6 align-items-center align-self-center" style={{paddingLeft: "100px"}}>
            <div className="container">
                <img src={img1} alt=" " className='a-img-1' />
                <img src={img2} alt=" " className='a-img-2' />
                <img src={img3} alt=" " className='a-img-3' />
                <img src={img4} alt=" " className='a-img-4' />
                <img src={img5} alt=" " className='a-img-5' />
            </div>
        </div>
        </div>
     </div>
    );
};

export default Aboutus;
