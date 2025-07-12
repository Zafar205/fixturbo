import React from "react";

const AppointmentAreaTwo = () => {
  return (
    <div
      className="appointment-area-2 bg-smoke overflow-hidden"
      style={{ backgroundImage: "url(assets/img/bg/appointment-bg2-1.png)" }}
    >
      <div className="container">
        <div className="row gx-0">
          <div className="col-xl-7">
            <div className="space">
              <div className="appointment-form-wrap bg-white">                <div className="title-area">
                  <span className="sub-title">Get Your Report</span>
                  <h2 className="sec-title">Request Your VIN Inspection Report</h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="vin"
                          id="vin"
                          placeholder="Enter 17-Digit VIN Number"
                          maxLength="17"
                          pattern="[A-HJ-NPR-Z0-9]{17}"
                          style={{textTransform: 'uppercase', fontSize: '18px', padding: '15px'}}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="name"
                          id="name"
                          placeholder="Your Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control style-border"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="reportType"
                          id="reportType"
                          className="form-select style-border"
                          defaultValue={"Choose"}
                        >
                          <option value="Choose">
                            Choose Report Type
                          </option>
                          <option value="Basic">Basic Report - $29.99</option>
                          <option value="Premium">Premium Report - $39.99</option>
                          <option value="Ultimate">Ultimate Report - $49.99</option>
                        </select>
                        <i className="fas fa-angle-down" />
                      </div>
                    </div>
                  </div>                  <div className="form-group col-12">
                    <textarea
                      placeholder="Additional notes or specific questions about the vehicle (Optional)"
                      id="contactForm"
                      className="form-control style-border"
                      defaultValue={""}
                      rows="4"
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button 
                      type="button"
                      className="btn style2"
                      onClick={() => {
                        const pricingSection = document.getElementById('pricing-section');
                        if (pricingSection) {
                          pricingSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Get VIN Report Now <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>          <div className="col-xl-5 d-xl-block d-none">
            <div className="appointment-thumb-2" style={{height: '100%', overflow: 'hidden'}}>
              <img
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
                alt="VIN Number Inspection"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentAreaTwo;
