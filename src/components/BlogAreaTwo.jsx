
import React from "react";

const BlogAreaTwo = () => {
  return (
    <section className="blog-area space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">AUTOMOTIVE INSIGHTS</span>
              <h2 className="sec-title">
                Latest News & Tips About Vehicle Inspection
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="blog-card style2">
              <div className="blog-img">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="VIN Check Guide" />
                <div className="blog-date">
                  <span>15</span>Dec
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">                  <span>
                    <i className="fas fa-user" />
                    By NHTSA
                  </span>
                  <span>
                    <i className="fas fa-comments" />
                    Comments (12)
                  </span>
                </div>                <h3 className="blog-title">
                  <a href="https://www.nhtsa.gov/vin-decoder" target="_blank" rel="noopener noreferrer">
                    What is a VIN and How to Read It
                  </a>
                </h3>
                <a className="link-btn style3" href="https://www.nhtsa.gov/vin-decoder" target="_blank" rel="noopener noreferrer">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="blog-card style2">
              <div className="blog-img">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Car History Report" />
                <div className="blog-date">
                  <span>22</span>Nov
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">                  <span>
                    <i className="fas fa-user" />
                    By Kelley Blue Book
                  </span>
                  <span>
                    <i className="fas fa-comments" />
                    Comments (8)
                  </span>
                </div>                <h3 className="blog-title">
                  <a href="https://www.edmunds.com/car-buying/10-steps-to-buying-a-used-car.html" target="_blank" rel="noopener noreferrer">
                    How to Check Vehicle History Before Buying
                  </a>
                </h3>
                <a className="link-btn style3" href="https://www.edmunds.com/car-buying/10-steps-to-buying-a-used-car.html" target="_blank" rel="noopener noreferrer">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="blog-card style2">
              <div className="blog-img">
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Car Buying Tips" />
                <div className="blog-date">
                  <span>18</span>Oct
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <i className="fas fa-user" />
                    By Edmunds
                  </span>
                  <span>
                    <i className="fas fa-comments" />
                    Comments (15)
                  </span>
                </div>
                <h3 className="blog-title">
                  <a href="https://www.edmunds.com/car-buying/10-steps-to-buying-a-used-car.html" target="_blank" rel="noopener noreferrer">
                    10 Essential Steps to Buying a Used Car
                  </a>
                </h3>
                <a className="link-btn style3" href="https://www.edmunds.com/car-buying/10-steps-to-buying-a-used-car.html" target="_blank" rel="noopener noreferrer">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
