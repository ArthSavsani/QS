import React from "react";
import "./landing.css";
// import {useNavigate } from 'react-router-dom';
import img1 from "../../../img/1c70b8c98a50c585d45bad9ea0265e2f.gif";
import img2 from "../../../img/0792d5b8b78f894dca91c1d05b528632.gif";
import img3 from "../../../img/Rectangle 4312.svg";
import img4 from "../../../img/Girl with tablet and working process on desktop.svg";
import img5 from "../../../img/snowball.svg";
import img6 from "../../../img/businesswoman in blue suit with phone looking aside.svg";
import img7 from '../../../img/Icon.svg';
import img8 from '../../../img/Saly-43.svg';
import img9 from '../../../img/Placeholder.svg';
import img10 from "../../../img/pavan kumar.JPG";
import img12 from "../../../img/Rectangle 4327.png";
import img13 from "../../../img/Man chatting on dating site.svg";
import img11 from '../../../img/Godfree.jpeg';
import img14 from '../../../img/Rectangle 4328.png';
import img15 from '../../../img/Ellipse 3.png';
// import ReactPlayer from 'react-player';
import video from '../../pages/Video/qs video.mp4';

const Landing = () => {

//   const [userContact, setUserContact] = useState({
//     selectedFile: null,
//         name: '',
//         email: '',
//         number: '',
//   });
//   const [records, setRecords] = useState([]);
  
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     console.log(name, value);
//     setUserContact({ ...userContact, [name]: value });
//   }
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRecord = { ...userContact, id: new Date().getTime().toString() }
//     setRecords([ ...records, newRecord]);
//     console.log(records);
//     e.target.reset();    
//   }
  
//   const history = useNavigate ();
//   const handleMore = () =>{ 
//     history.push("/aboutus");
//   }
//   const handleContact = () => {
//     history.push("/contactus");
//   }
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
            <div className="row justify-content-center" style={{paddingTop: "39px"}}>
                <img src={img3} alt="img3" className="l-img-3" />
                <div className="row justify-content-between l-tr">
                    <div className="col-5 align-items-center align-self-center text-center">
                        <div className="row justify-content-center">
                            <h1 className="l-heading text-capitalize">
                                digital transformation with <span style={{color: "#FDA055"}}> qurinom solutions</span>
                            </h1>
                        </div>
                        <div className="row justify-content-center">
                            <p className="la-para">
                                Qurinom Solutions is a global product innovator with a single window for industry specific solutions. QS is a information technology(IT) service provider in a futuristic digital service and consulting. We simplify strengthen and revamp the business of
                                the clients to recreate for the digital age by harnessing it with Innovation, Implementation and Rapid delivery
                            </p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4 align-items-center align-self-center">
                                <a href="/contactus" className="btn btn-lg btn-warning l-btn-1">
                                    <span className="l-gs text-capitalize">get started</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 align-items-center align-self-center">
                        <img src={img4} alt="img4" className="l-img-4" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-between mt-1">
                <div className="col-4 align-items-start align-self-start">
                    <img src={img5} alt="img5" className="l-img-5" />
                </div>
                <div className="col-4 align-items-center mt-5 wqs-col">
                    <h1 className="l-wqs text-capitalize">
                        why qurinom solutions?
                    </h1>
                    <div>
                        <img src={img1} alt="img1" className="l-img-1"/>
                    </div>
                    <p className="l-wqs-para">
                        We will help a client's problems to develop the products they have with high quality
                    </p>
                    <a href="/products" className="l-wqs-link text-decoration-underline">
                        Learn more about our plans
                    </a>
                </div>
                <div className="col-4 align-items-center align-self-center">
                    <img src={img6} alt="img6" className="l-img-6" />
                </div>
                <div className="row l-cards">
                    <div className="col-3">
                    <div class="card" style={{width: "15rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)", height: "202px",marginTop:"63px"}}>
                <div className="row g-0">
                <div className="col-2 align-items-start align-self-start mt-4">
                       <span className="l-num">01</span>
                 </div>
                <div className="col-10 align-items-center align-self-center">
                     <h5 className="card-title l-dcc text-capitalize">
                            digital core capabilities
                     </h5>
                </div>
                 </div>  
                     <div class="card-body" style={{backgroundColor: "#E6F0F3"}}>
                          <p className="card-text l-t1">
                               We can create organize and provide everything needed for you with our optimal digital capabilities
                          </p> 
                      </div>
               </div>
                    </div>
         <div className="col-3">
               <div class="card" style={{width: "15rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)", height: "202px",marginTop:"63px"}}>
                <div className="row g-0">
                <div className="col-2 align-items-start align-self-start mt-4">
                       <span className="l-num">02</span>
                 </div>
                <div className="col-10 align-items-center align-self-center">
                     <h5 className="card-title l-dcc text-capitalize">
                     customer centric
                     </h5>
                </div>
                 </div>  
                     <div class="card-body" style={{backgroundColor: "#E8FFFB"}}>
                          <p className="card-text l-t1">
                          Qurinom loves not only to meet client's expectations but to go above and beyond in unexpected and helpful ways.
                          </p> 
                      </div>
               </div>
        </div>
        <div className="col-3">
                 <div class="card" style={{width: "15rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)", height: "202px",marginTop:"63px"}}>
                <div className="row g-0">
                <div className="col-2 align-items-start align-self-start mt-4">
                       <span className="l-num">03</span>
                 </div>
                <div className="col-10 align-items-center align-self-center">
                     <h5 className="card-title l-dcc text-capitalize">
                     integrity
                     </h5>
                </div>
                 </div>  
                     <div class="card-body" style={{backgroundColor: "#EDFBF3"}}>
                          <p className="card-text l-t1">
                          We believe integrity as a seed to achivement. So we uphold it as per industry standards and global principles
                          </p> 
                      </div>
               </div>
        </div>
        <div className="col-3">
                <div class="card" style={{width: "15rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)", height: "202px",marginTop:"63px"}}>
                <div className="row g-0">
                <div className="col-2 align-items-start align-self-start mt-4">
                       <span className="l-num">04</span>
                 </div>
                <div className="col-10 align-items-center align-self-center">
                     <h5 className="card-title l-dcc text-capitalize">
                     stay ahead
                     </h5>
                </div>
                 </div>  
                     <div class="card-body" style={{backgroundColor: "#FBEFEE"}}>
                          <p className="card-text l-t1">
                          In the fast changing world, Qurinom solutions can make you stay ahead in every aspect that is required for you in a most unique way
                          </p> 
                      </div>
               </div>
        </div>
        <img src={img2} alt="img2" className="l-img-2" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 align-items-center align-self-center">
                    <h3 className="l-os text-capitalize text-center">our services</h3>
                </div>
            </div>
            <div className="row justify-content-center g-2 mt-3" style={{paddingBottom: "25px"}}>
                <div className="col-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize active">all</p>
                </div>
                <div className="col-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">brand</p>
                </div>
                <div className="col-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">UI/UX design</p>
                </div>
                <div className="col-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">logo</p>
                </div>
                <div className="col-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">illustration</p>
                </div>
                <div className="col-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">marketing strategy</p>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-3" style={{paddingLeft: "170px"}}>
                    <div className="row" style={{paddingBottom: "64px"}}>
                    <div className="col-3 align-items-center align-self-center text-start fc-col">
                    <div className="card l-card g-0 l-bg-1">
                        <img src={img7} alt="img7" className="l-img-7" />
                        <div className="card-body">
                            <h3 className="l-fc card-title text-capitalize">
                                free consultation
                            </h3>
                            <p className="card-text l-t2">
                                A book or other written or printed work, regarded in terms of its content rather than its physical form.
                            </p>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className="row">
                    <div className="col-3 align-items-center align-self-center text-start mb-5 ep-col">
                    <div className="card l-card g-0 l-bg-2">
                        <img src={img7} alt="img7" className="l-img-7" />
                        <div className="card-body">
                            <h3 className="l-ep card-title text-capitalize">
                                easy payments
                            </h3>
                            <p className="card-text l-t2">
                                A book or other written or printed work, regarded in terms of its content rather than its physical form.
                            </p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div className="col-3">
                <div className="row">
                   <img src={img14} alt="img" className="l-img-14" />
                   <div className=""></div>
                   {/* <img src={img15} alt="img" className="" /> */}
                </div>
                </div>
                <div className="col-3" style={{marginLeft: "-10%", paddingTop: "130px"}}>
                <div className="row" style={{paddingBottom: "64px"}}>
                <div className="col-3 align-items-end align-self-end text-start qe-col">
                    <div className="card l-card g-0 l-bg-2">
                        <img src={img7} alt="img7" className="l-img-7" />
                        <div className="card-body">
                            <h3 className="l-qe card-title text-capitalize">
                                quick estimates
                            </h3>
                            <p className="card-text l-t2">
                                A book or other written or printed work, regarded in terms of its content rather than its physical form.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                    <div className="row">
                    <div className="col-3 align-items-end align-self-end text-start mb-5 ep-col-1">
                    <div className="card l-card g-0 l-bg-1">
                        <img src={img7} alt="img7" className="l-img-7" />
                        <div className="card-body">
                            <h3 className="l-ep card-title text-capitalize">
                                easy payments
                            </h3>
                            <p className="card-text l-t2">
                                A book or other written or printed work, regarded in terms of its content rather than its physical form.
                            </p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                {/* <div id="outerspace" className="bg-soft-info">
                  <div className="col-2 align-items-start align-self-start rocket">
                      <img src={img8} alt="img8" className="l-img-8" />
                  </div>
                </div> */}
                <div className="col-3 align-items-start align-self-start">
                    <img src={img8} alt="img8" className="l-img-8" />
                </div>
                
            </div>
            
            <div className="row justify-content-center mt-5">
                <div className="col-4 align-items-center align-self-center text-center">
                    <h4 className="l-oct text-capitalize">
                        our creative team
                    </h4>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
            <div className="col-3 align-items-start align-self-start">
                    <img src={img12} alt="img12" className="l-img-12" />
                </div>
                <div className="col-9 align-items-center align-self-center text-center" style={{marginBottom: "85px"}}>
                    <p className="l-para-1">
                        From bad websites that aren’t representative of your business. Its time to stop wasting money on stinky marketing. Our Creative Team will help you look good, connect better with your clients, and up your sales game.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center g-2 align-baseline" style={{paddingLeft: "100px"}}>
                <div className="col-3 align-items-center align-self-center text-center" >
                    <div className="card g-0" style={{width: "16rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)"}}>
                        <img src={img10} alt="img10" className="l-img-10" />
                        <div className="card-body">
                            <h5 className="card-title text-capitalize l-pk">pavan kumar</h5>
                            <p className="card-text l-t3">Founder & CEO</p>
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-3 align-items-center align-self-center text-center">
                    <div className="card g-0" style={{width: "16rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)"}}>
                        <img src={img9} alt="img9" className="l-img-9" />
                        <div className="card-body">
                            <h5 className="card-title text-capitalize l-hpw">hoedi p. wijono</h5>
                            <p className="card-text l-t3">Executive Partner</p>
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-3 align-items-center align-self-center text-center">
                    <div className="card g-0" style={{width: "16rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)"}}>
                        <img src={img11} alt="img11" className="l-img-11" />
                        <div className="card-body">
                            <h5 className="card-title text-capitalize l-gd">godfree dzebu</h5>
                            <p className="card-text l-t3">CTO (Technology Director)</p>
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-3 align-items-center align-self-center text-center">
                    <div className="card g-0" style={{width: "16rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)"}}>
                        <img src={img9} alt="img9" className="l-img-9" />
                        <div className="card-body">
                            <h5 className="card-title text-capitalize l-djs">dr. jitendra singh</h5>
                            <p className="card-text l-t3">CHO (Chief Healthcare Officer)</p>
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center g-2 align-baseline" style={{paddingTop: "65px"}}>
            <video src={video} width="750" height="500" controls>
            </video>
            {/* <ReactPlayer className="l-video"
                 url="https://www.youtube.com/watch?v=N3AkSS5hXMA" type="video/mp4"
              /> */}
            </div>
            <div className="row justify-content-around mt-5 mb-5">
                <div className="bg-soft-info col-11 d-inline-flex justify-content-around">
                    <div className="col-5 align-items-center align-self-center text-center">
                        <div className="row justify-content-center">
                            <div className="col-8 align-items-center align-self-center">
                                <h2 className="l-sysst text-capitalize">
                                    start your success story today
                                </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-9 align-items-center align-self-center">
                                <p className="l-para-2">
                                    Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-8 align-items-center align-self-center">
                                <div className="form-group">
                                    <input type="text" className="form-control l-form-control" placeholder="Enter Your Full Name" />
                                    <input type="text" className="form-control l-form-control mt-2" placeholder="Mobile Number" />
                                    <input type="email" className="form-control l-form-control mt-2" placeholder="Enter Your @mail Address" />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center mt-3">
                            <div className="col-4 align-items-center align-self-center">
                                <a href="/contactus" type="submit" className="btn btn-primary btn-lg l-btn-2">
                                    <span className="l-contact text-capitalize">contact</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 align-items-center align-self-center">
                        <img src={img13} alt="img13" className="l-img-13" />
                    </div>
                </div>
            </div>
    </div>
    </div>
    </>
  );
};

export default Landing;
