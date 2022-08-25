import React from 'react';
import './career.css';

const Career = () => {
    return (
        <>
        <div className="container-fluid" style={{marginTop: "50px", backgroundColor:"rgb(250, 250, 239)"}}>
        <div className="row">
            <div className="col-lg-6">
                <h1 className="ca-heading mt-3 text-capitalize">Career</h1>
                <div className=" row justify-content-center ">
                    <h3 className=" text-capitalize ca-head ">Qurinom Solutions</h3>
                    <p className="ca-para "> Qurinom solutions is an organization which takes pride in its workforce. At every step, we have been built by individuals who have gone beyond the limits of personal goals and leaped across boundaries. A career here represents a life
                        long opportunities to explore innovation and great work experience. It is the freedom provided to every individual to learn, grow and create a career path that makes us an organization of opportunities beyond boundaries. Outpacing
                        the boundaries of region, age, gender, ability and routine we want you to be a part of this experience.</p>
                    <div className="row mb-3 justify-content-center ">
                        <p className="text-capitalize car-para ">"We embrace different thoughts and commitment to learning "
                        </p>
                        <p className="ca-ben"> Benefits</p>

                        <p className="ca-para "> A career at qurinom represents a life of experience with the comfort of work and a drive for passion along with working with finest technologies with the like minded and diverse </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="contact-form">
                    <form action="">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputFirstName">First Name</label>
                                    <input type="text" className="form-control c-form-control" id="inputFirstName" required />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="inputLastName">Last Name</label>
                                    <input type="text" className="form-control c-form-control" id="inputLastName" required />
                                </div>
                            </div>
                        
                        <div className="form-group">
                            <label for="inputEmail">Email Address</label>
                            <input type="email" className="form-control c-form-control" id="inputEmail" required />
                        </div>
                        <div className="form-group">
                            <label for="inputMessage">What can we help you with?</label>
                            <textarea className="form-control c-form-control" id="inputMessage" rows="1" required />
                        </div>
                        <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                        </div>
                        </form>
                </div>

            </div>
            
        </div>
    </div>
        </>
    );
};

export default Career;



