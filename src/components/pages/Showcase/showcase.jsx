import React from 'react';
import './showcase.css';
import img1 from '../../../img/image 323.svg';
import img2 from '../../../img/image 324.svg';

const showcase = () => {
    return (
        <div className="main-wrapper s-wrapper">
        <div className="container-fluid">
            <div className="row mt-5 justify-content-center">
                <div className="col-6 align-items-center align-self-center">
                    <h1 className="s-heading text-center text-capitalize mb-5">
                        showcase
                    </h1>
                    <p className="s-para">
                        In these chaotic times, anytime we are faced with a problem or require a new product, we search for it online. Most of the time, the product we're looking for is right next door, but we're not aware of it, or we want to feel the product we're going to
                        buy before we buy it, or we need it right away. So, to address these difficulties, we're launching a new product called SHOWCASE, which will provide us access to all of the local retailers in our area and allow us to buy anything
                        we need at our convenient locations.
                    </p>
                    <p className="s-para">
                        Showcase is a website that connects customers with local businesses. The unique feature to highlight is that it categorizes vendors based on our GPS locations and allows us to explore available products or bookmark them for later access. We may communicate
                        with the sellers and receive the items we require directly from them.
                    </p>
                </div>
                <div className="col-6 align-items-center align-self-center">
                    <img src={img1} alt="img1" className="s-img-1" />
                </div>
            </div>
            <div className="row mt-5 justify-content-start">
                <div className="col-6 align-items-center align-self-center">
                    <h3 className="s-sm-head text-capitalize">
                        benifits of showcase :
                    </h3>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-5 justify-content-evenly d-flex mt-5" style={{paddingLeft: "60px"}}>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize">connectivity to vendors</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize pt-3">GPS listing of vendors</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize">reliability in the listings and products</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize">grow online visibility form on all channels from one platform</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize pt-3">easy to approach or access</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize pt-3">empowering local vendors</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize pt-3">best segegration</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize">grow online visibility form on all channels from one platform</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card s-card text-center" style={{width: "276px",height: "276px"}}>
                    <div className="card-body">
                        <div className="card-title s-card-title">
                            <h5 className="text-capitalize">presents visually appealing online store to the world</h5>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row justify-content-end mt-5 mb-5">
                <div className="col-4 mt-5 align-items-center align-self-start">
                    <a href="/contactus" className="s-q-btn btn btn-lg text-center">
                        <span className="s-query px-5 py-2 text-capitalize">
                            query
                        </span>
                    </a>
                </div>
                <div className="col-4 align-items-end align-self-end">
                    <img src={img2} alt="img2" className="s-img-2" />
                </div>
            </div>
        </div>
    </div>

    );
};

export default showcase;
