import React from 'react';
import './biscuit.css';
import img1 from '../../../img/Ellipse 656.png';
import img2 from '../../../img/Ellipse 659.png';
import img3 from '../../../img/Ellipse 660.png';
import img4 from '../../../img/Ellipse 658.png';
import img5 from '../../../img/Ellipse 657.png';
import img6 from '../../../img/Ellipse 655.png';
import img7 from '../../../img/image 321.png';

const biscuit = () => {
    return (
        <div className="main-wrapper b-back">
        <div className="container-fluid">
            <div className='row'>
            <div className='col-6'>
                <div className="bg-holder bg-size " style={{backgroundImage:"url(assets/img/gallery/hero-header-bg.png)",backgroundPosition:"top center",backgroundSize:"cover" }}>
                </div>
                <div className="b-content ">
                    <h1 className='b-title'>Biscuit</h1>
                    <h3>Let the world know you better!</h3>
                    <p className="b-par "> A camera-video-social app for everyone to showcase themselves and make their worth known with camera, music, video, social networking, and educational combo powered with Artificial Intelligence & Augmented Reality.</p>
                </div>
                </div>
                <div className='col-6'>
                <div className="container 1 ">
                    <img src={img1} alt=" " style={{width:"150px", marginTop:"-17px", marginRight: "-1530px"}}/>
                    <div className="container 2 ">
                        <img src={img2} alt=" " style={{width:"170px", marginTop:"-70px",marginRight:"-1300px"}} />
                        <div className="container 3 ">
                            <img src={img3} alt=" " style={{width:"180px", marginTop:"-19px",marginRight:"-1150px"}} />
                            <div className="container 4 ">
                                <img src={img4} alt=" " style={{width:"180px", marginTop:"-50px",marginRight:"-1500px"}} />
                                <div className=" container 5">
                                    <img src={img5} alt=" " style={{width:"160px",marginTop:"-480px", marginRight:"-1360px"}} />
                                    <div className=" container 6">
                                        <img src={img6} alt=" " style={{width:"100px",marginTop:"-570px", marginRight:"-1510px"}} />
                                        <div className=" container 7">
                                            <img src={img7} alt=" " style={{width:"140px",marginTop:"-840px", marginRight:"-1440px"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
    );
};

export default biscuit;
