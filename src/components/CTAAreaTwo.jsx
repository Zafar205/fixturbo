
const CTAAreaTwo = () => {
  return (
    <div className="cta-area-2">
      <div className="container">        <div className="cta-wrap2 bg-theme">
          <div className="row justify-content-md-between align-items-center" style={{minHeight: '400px'}}>
            <div className="col-lg-7" style={{paddingRight: '40px'}}>
              <div className="title-area" style={{marginBottom: '30px'}}>
                <h2 className="sec-title text-white">
                  Get Your Vehicle History Report Today
                </h2>
                <p className="sec-text text-white">
                  Enter your VIN number below to instantly access comprehensive 
                  vehicle history reports including accident records, ownership details, 
                  and title information from our extensive database.
                </p>
              </div>
              <form className="newsletter-form style2" style={{maxWidth: '450px'}}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter 17-Digit VIN Number"
                    maxLength="17"
                    pattern="[A-HJ-NPR-Z0-9]{17}"
                    required=""
                    style={{
                      textTransform: 'uppercase',
                      marginBottom: '15px',
                      padding: '15px',
                      fontSize: '16px'
                    }}
                  />
                </div>
                <button 
                  type="button" 
                  className="btn style5"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing-section');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    padding: '15px 30px',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  GET REPORT
                </button>
              </form>
            </div>
            <div className="col-lg-5" style={{paddingLeft: '20px'}}>
              <div className="cta2-bg-thumb">
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="VIN Report Dashboard" 
                  style={{
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    maxWidth: '450px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaTwo;
