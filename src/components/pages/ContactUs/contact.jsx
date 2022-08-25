import React from 'react';
import './contact.css';

const ContactUs = () => {
    return (
      <>
      <section className="container">
        <div className="row justify-content-between" id="contact">
          <div className="contact-text col-6">
            <h1 className="c-h1">Contact Us</h1>
            <h3 className="c-h3">Lets Work Together</h3>
            <p className="c-para">
              Does UX Design has any impact on your audience and business? Yes
              it does a great deal.
            </p>
          </div>
          <div className="c-contact-form col-6">
            <div className="container-fluid">
              <form className="form">
                <div className="row">
                  <div className="col-6">
                    <label className="first-name-label" for="first-name">
                      First Name
                    </label>
                    <input
                      className=""
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      minlength="4"
                      maxlength="10"
                    />
                  </div>

                  <div className="col-6">
                    <label className="second-name-label" for="second-name">
                      Last Name
                    </label>
                    <input
                      className=""
                      type="text"
                      id="second-name"
                      name="second-name"
                      required
                      minlength="4"
                      maxlength="10"
                    />
                  </div>
                </div>
                <div className="row">
                  <label className="email-label" for="email">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    pattern=".+@globex\.com"
                    required
                  />

                  <label className="query-label col-12" for="query">
                    What can we help you with?
                  </label>
                  <input
                    className="col-12"
                    type="text"
                    id="query"
                    name="first-name"
                    required
                    minlength="10"
                    maxlength="150"
                  />

                  <button id="submit-button" type="submit">
                    <span id="submit-button-value">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
    );
};

export default ContactUs;