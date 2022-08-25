import React from "react";
import "./ui.css";
import Img1 from "../../../img/img1.jpg";
import Img2 from "../../../img/img2.jpg";
import Img3 from "../../../img/img3.jpg";
import Img4 from "../../../img/image 310.jpg";
import Img5 from "../../../img/speaker.jpg";
import Img6 from "../../../img/bulb on.jpg";
import Img7 from "../../../img/document.jpg";
import Img8 from "../../../img/Ellipse 633.svg";

const ui = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="title">UI/UX Design</h3>
              <br />
              <span className="headk">Design and Development</span>
              <div className="u-content">
                Business and customer interactions begins with business website
                begin the customer’s first point of contact. And those first
                impressions matter very much so we can provide long lasting and
                positive impression with our UI and can provide a enthralling
                first impression. Qurinom solutions excelled at transforming the
                kit and client requirements into a bespoke design
              </div>
              <img src={Img1} alt="img1" className="u-img1" />
              <div className="headin">How we do it?</div>
              <div className="u-text1">
                UX (user experience) design is the process of designing products
                and experiences that are efficient, effective, and even
                delightful for users. So for this we focus on three specific
                areas, they are:
              </div>
              <div className="u-con1">
                <p className="subtitle">Aesthetics</p>
                <br />
                <span className="u-box1">
                  We want to appeal the viewe of artistic sense to grab their
                  attention by using the concepts of theme, style, color scheme,
                  content presentation, and visual elements. We use both static
                  and dynamic design elements like optimized images and
                  multimedia. Not only we make it appealing but also compatabile
                  across different screen size with responsive web design.
                </span>
              </div>
              <div className="u-con2">
                <p className="subtitle">Navigation</p>
                <br />
                <span className="u-box1">
                  It can make the website easily accessible & helps to go
                  through the contents in a easy manner. If the navigation is
                  even a bit troublesome then the users may feel it cumbersome
                  to look thorough the website and miss important details. So we
                  provide every possible way to make navigation easy and as per
                  the requirements of the user.
                </span>
              </div>
              <div className="u-con3">
                <p className="subtitle">Visuals</p>
                <br />
                <span className="u-box2">
                  We engage the user with the required visual appeal and
                  intuitive directional cues without losing attention.
                </span>
              </div>
              <img src={Img2} alt="img2" className="u-img2" />
              <img src={Img3} alt="img3" className="u-img3" />
              <div className="headin1">Benefits of our UX & UI Services</div>
              <div className="u-text2">
                We create aesthetically appealing designs that focus on creating
                your brand identity in the market by using iconic graphics, the
                latest tools, and technologies that help you achieve more than
                what you wish for.
              </div>
              <img src={Img4} alt="img4" className="u-img4" />
              <div className="head1">Boosts Sales</div>
              <div className="tex1">
                If done effectively, user experience design increases sales by
                aldmost one-third.
              </div>
              <img src={Img5} alt="img5" className="u-img5" />
              <div className="head2">Attract Users</div>
              <div className="tex2">
                The outstanding user interface translates into higher users
                attraction.
              </div>
              <img src={Img6} alt="img6" className="u-img6" />
              <div className="head3">Increases User Satisfaction</div>
              <div className="tex3">
                Modern-day users want everything to be not only simple and fast
                but also looking beautiful.
              </div>
              <img src={Img7} alt="img7" className="u-img7" />
              <div className="head4">Customer Loyalty</div>
              <div className="tex4">
                Great UX design not only attracts new users, but also retains
                them.
              </div>
              <div className="circ1"></div>
              <div className="headin2">UI / UX Modernisation</div>
              <div className="squa1">
                <p className="squa_head1">Moblie Application</p>
                <br />
                <span className="squa_para1">
                  Our experienced designers deliver an interface that seizes the
                  attention of the audience resulting in maximized ROI.
                </span>
              </div>
              <div className="squa2">
                <p className="squa_head1 l-65">Web Designs</p>
                <br />
                <span className="squa_para1">
                  We provide a robust user experience by delivering
                  easy-to-navigate, user-friendly, and responsive designs.
                </span>
              </div>
              <div className="squa3">
                <p className="squa_head1">Web Application</p>
                <br />
                <span className="squa_para1">
                  Our experienced designers deliver an interface that seizes the
                  attention of the audience resulting in maximized ROI.
                </span>
              </div>
              <img src={Img8} alt="imgg1" className="u-img8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ui;
