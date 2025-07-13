
import { Link } from "react-router-dom";

const FooterAreaTwo = () => {
  return (    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="footer-top-2">          <div className="footer-logo">
            <Link to="/">
              <img src="/assets/img/logo-white.svg" alt="Car Check Store" />
            </Link>
          </div>
          <h3 className="footer-top-title text-white">
            Get VIN Report Updates & Industry News
          </h3>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Enter Your Email for VIN Updates"
                required=""
              />
            </div>
            <button type="submit" className="btn">
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
        <div className="widget-area">
          <div className="row justify-content-between">            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">About VIN Inspector Pro</h3>
                <p className="footer-text mb-30">
                  Leading provider of comprehensive VIN-based vehicle history reports. 
                  Trusted by millions of car buyers, dealers, and automotive professionals 
                  for accurate vehicle inspection data.
                </p>
                <div className="social-btn style3">
                  <Link to="https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Sample Report</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">VIN Report Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link 
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const pricingSection = document.getElementById('pricing-section');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Basic VIN Check
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const pricingSection = document.getElementById('pricing-section');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Detailed History Report
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const pricingSection = document.getElementById('pricing-section');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Premium Inspection
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const pricingSection = document.getElementById('pricing-section');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Bulk VIN Reports
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const pricingSection = document.getElementById('pricing-section');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Fleet Management
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">                <h3 className="widget_title">Contact Us</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Headquarters</p>
                      <h6>
                        1250 Auto Plaza Drive, Detroit
                        <p />
                        Michigan 48226
                      </h6>
                    </div>
                  </div>
                  {/* <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>VIN Support Line</p>
                      <h6>
                        <Link to="tel:8881234567">1-888-VIN-REPORTS</Link>
                        <p />
                        (1-888-846-7376)
                      </h6>
                    </div>
                  </div> */}
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Email Support</p>
                      <h6>
                        <Link to="mailto:support@vininspectorpro.com">
                          car.check.store@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>        </div>
      </div>
      
      {/* Trusted Partners Section */}
      <div className="trusted-partners-section" style={{ 
        backgroundColor: 'rgba(255,255,255,0.05)', 
        padding: '40px 0',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h5 className="text-white" style={{ marginBottom: '15px', fontSize: '1.1rem' }}>
                <i className="fas fa-shield-alt" style={{ marginRight: '10px', color: '#4CAF50' }}></i>
                Trusted Data Partners
              </h5>
              <p className="text-white-50" style={{ fontSize: '0.9rem', margin: '0' }}>
                Official data sources for accurate vehicle information
              </p>
            </div>            <div className="col-lg-8">
              <div className="row align-items-center justify-content-lg-end justify-content-center">
                <div className="col-auto">
                  <div className="partner-logo" style={{ 
                    padding: '15px 25px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    margin: '10px',
                    transition: 'all 0.3s ease',
                    minHeight: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <img 
                      src="/assets/img/dvla/dvla.png" 
                      alt="DVLA - Driver and Vehicle Licensing Agency"
                      style={{
                        height: '80px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: '0.9'
                      }}
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="partner-logo" style={{ 
                    padding: '15px 25px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    margin: '10px',
                    transition: 'all 0.3s ease',
                    minHeight: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>                    <img 
                      src="/assets/img/dvla/logo_nv.svg" 
                      alt="NMVTIS - National Motor Vehicle Title Information System"
                      style={{
                        height: '80px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: '0.9'
                      }}
                      onError={(e) => {
                        console.log('NMVTIS image failed to load');
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{
                      display: 'none',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      textAlign: 'center',
                      letterSpacing: '1px'
                    }}>
                      NMVTIS
                      <div style={{ fontSize: '10px', opacity: '0.7', marginTop: '2px' }}>
                        US Database
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Car Check</Link> 2014 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/">Terms &amp; Conditions</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Data Security</Link>
                <Link to="/">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaTwo;
