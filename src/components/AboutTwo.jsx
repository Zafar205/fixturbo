import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutTwo = () => {
  return (
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Vehicle VIN Inspection" />
              </div>
              <div className="about-img-2">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Car Inspection Report" />
              </div>              <div className="about-counter-wrap jump-reverse">
                <img src="https://cdn-icons-png.flaticon.com/512/3829/3829823.png" alt="VIN Reports" style={{width: '60px', height: '60px'}} />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={50} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">VIN Reports Generated</h4>
              </div>
              <div className="about-year-wrap2 movingX">                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/2721/2721745.png" alt="Vehicle Data" style={{width: '50px', height: '50px'}} />
                  </div>
                  <h3 className="about-counter">
                    <span className="counter-number">15</span>+
                  </h3>
                </div>
                <h4 className="about-year-text">Years Of Vehicle Data</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">              <div className="title-area mb-30">
                <span className="sub-title">Know About Us</span>
                <h2 className="sec-title">
                  Comprehensive Vehicle History Reports from VIN Numbers{" "}
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="Fixturbo"
                  />
                </h2>
                <p className="sec-text">
                  Our vehicle inspection service provides detailed history reports 
                  using VIN numbers. We analyze ownership records, accident history, 
                  title information, and market values to help you make informed 
                  purchasing decisions.
                </p>
              </div>              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="VIN Scanner" style={{width: '50px', height: '50px'}} />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">
                    Instant VIN Verification
                  </h5>
                  <p className="about-feature-text">
                    Get comprehensive vehicle history reports instantly by entering 
                    any 17-character VIN number. Access accident records, ownership 
                    history, and more.
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Inspection Report" style={{width: '50px', height: '50px'}} />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">Detailed Inspection Reports</h5>
                  <p className="about-feature-text">
                    Our reports include title information, market value estimates, 
                    safety recalls, service records, and warranty details for 
                    informed decision making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
