import React from "react";
import { Link } from "react-router-dom";

const ProcessAreaTwo = () => {
  return (
    <div
      className="process-area-2 space-top"
      style={{ backgroundImage: "url(assets/img/bg/process2-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">            <div className="title-area text-center">
              <h3 className="sub-title">How It Works</h3>
              <h2 className="sec-title text-white">
                Get Your VIN Report in 3 Simple Steps{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape2.png"
                  alt="VIN Reports"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 gx-90 justify-content-center">
          <div className="col-lg-4 col-md-6 process-card-wrap2">            <div className="process-card style2">
              <div className="process-card-number">STEP 1</div>
              <h4 className="process-card-title">Enter VIN Number</h4>
              <p className="process-card-text">
                Simply enter your 17-digit VIN number in our secure form. 
                Our system instantly locates your vehicle in our comprehensive database.
              </p>
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing-section');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="link-btn style2"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  font: 'inherit'
                }}
              >
                Get Started <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">            <div className="process-card style2">
              <div className="process-card-number">STEP 2</div>
              <h4 className="process-card-title">Choose Your Plan</h4>
              <p className="process-card-text">
                Select from our Basic, Premium, or Ultimate report packages. 
                Each plan includes different levels of detail and data sources.
              </p>
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing-section');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="link-btn style2"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  font: 'inherit'
                }}
              >
                View Plans <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">            <div className="process-card style2">
              <div className="process-card-number">STEP 3</div>
              <h4 className="process-card-title">Get Instant Report</h4>
              <p className="process-card-text">
                Complete your purchase and receive your detailed vehicle history report 
                instantly via email with accident history, ownership records, and more.
              </p>
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing-section');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="link-btn style2"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  font: 'inherit'
                }}
              >
                Order Now <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAreaTwo;
