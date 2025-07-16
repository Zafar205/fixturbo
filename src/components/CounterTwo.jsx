import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterTwo = () => {
  return (    <div className="container">      <div className="counter-area-2 bg-theme">
        <div className="row gy-40 justify-content-center align-items-center">
          <div className="col-12 col-sm-6 col-md-3 col-lg-auto">
            <div className="counter-card style2">
              <div className="counter-card_icon">
                <img src="https://cdn-icons-png.flaticon.com/512/3829/3829823.png" alt="VIN Reports" style={{width: '50px', height: '50px'}} />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={2540} />K+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">VIN Reports Generated</p>
              </div>
            </div>
          </div>
          <div className="col-auto d-none d-lg-block">
            <div className="counter-divider" />          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-auto">
            <div className="counter-card style2">
              <div className="counter-card_icon">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Vehicle Database" style={{width: '50px', height: '50px'}} />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={150} />M+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Vehicles in Database</p>
              </div>
            </div>
          </div>
          <div className="col-auto d-none d-lg-block">
            <div className="counter-divider" />          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-auto">
            <div className="counter-card style2">
              <div className="counter-card_icon">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Accident Records" style={{width: '50px', height: '50px'}} />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={25} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Years of Data Collection</p>
              </div>
            </div>
          </div>
          <div className="col-auto d-none d-lg-block">
            <div className="counter-divider" />          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-auto">
            <div className="counter-card style2">
              <div className="counter-card_icon">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Satisfied Customers" style={{width: '50px', height: '50px'}} />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={8255} />K+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterTwo;
