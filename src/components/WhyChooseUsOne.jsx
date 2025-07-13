

const WhyChooseUsOne = () => {
  return (
    <div className="wcu-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">            <div className="title-area text-center">
              <span className="sub-title">Why Choose Our VIN Reports</span>
              <h2 className="sec-title">
                Comprehensive Vehicle History Reports{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="VIN Reports"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-40 gx-60 align-items-center">          <div className="col-xl-4 order-xl-2">
            <div className="wcu-thumb-1">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Professional Car Inspection and VIN Check"
                style={{
                  width: '100%', 
                  height: '400px', 
                  borderRadius: '10px',
                  objectFit: 'cover',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
          <div className="col-xl-4 col-md-6 order-xl-1">
            <div className="wcu-card-wrap right-wrap">              <div className="wcu-card">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png" alt="Accident History" style={{width: '60px', height: '60px'}} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Accident History</h4>
                  <p className="wcu-card-text">
                    Complete accident and damage history from insurance claims, 
                    police reports, and repair records to ensure transparency.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/1041/1041916.png" alt="Ownership Records" style={{width: '60px', height: '60px'}} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Ownership Records</h4>
                  <p className="wcu-card-text">
                    Detailed ownership history including number of previous owners,
                    registration records, and title information verification.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Service History" style={{width: '60px', height: '60px'}} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Service History</h4>
                  <p className="wcu-card-text">
                    Comprehensive maintenance records, recalls, and service 
                    history to help you make informed purchasing decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 order-xl-3">            <div className="wcu-card">
              <div className="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/1005/1005141.png" alt="Title Check" style={{width: '60px', height: '60px'}} />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Title Verification</h4>
                <p className="wcu-card-text">
                  Verify clean, salvage, flood, or lemon titles with detailed 
                  brand information and title history across all states.
                </p>
              </div>
            </div>
            <div className="wcu-card">
              <div className="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/3659/3659899.png" alt="Market Value" style={{width: '60px', height: '60px'}} />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Market Value</h4>
                <p className="wcu-card-text">
                  Current market value estimation based on condition, mileage,
                  location, and comparable sales data for informed decisions.
                </p>
              </div>
            </div>
            <div className="wcu-card">
              <div className="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/2965/2965879.png" alt="Instant Report" style={{width: '60px', height: '60px'}} />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Instant Reports</h4>
                <p className="wcu-card-text">
                  Get comprehensive vehicle history reports instantly by VIN 
                  number with 24/7 access to our extensive database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsOne;
