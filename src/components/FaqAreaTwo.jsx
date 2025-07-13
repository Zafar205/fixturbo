
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqAreaTwo = () => {
  return (
    <section className="faq-area-2 space">
      <div className="container">
        <div className="row gx-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="faq-thumb2 mb-xl-0 mb-50">              <div className="about-counter-grid jump">
                <img src="https://cdn-icons-png.flaticon.com/512/3829/3829823.png" alt="VIN Reports" style={{width: '60px', height: '60px'}}/>
                <div className="media-right">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={50} />k+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <h4 className="about-counter-text">VIN Reports Generated</h4>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Vehicle Inspection"/>
            </div>
          </div>
          <div className="col-xl-6">            <div className="title-area">
              <span className="sub-title">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="sec-title">
                Everything You Need To Know <br /> About VIN Inspection Reports{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Shape"
                />
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card style2 active">
                <div className="accordion-header" id="collapse-item-1">                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    What information is included in a VIN inspection report?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Our comprehensive VIN inspection reports include vehicle history, accident records, title information, 
                      previous ownership details, mileage verification, recall information, and detailed specifications 
                      to help you make informed purchasing decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-2">                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    How quickly can I get my VIN inspection report?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Most VIN inspection reports are generated instantly upon payment. In some cases where additional 
                      verification is needed, reports may take up to 24 hours. You'll receive your detailed report 
                      via email with all the vehicle information you need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-3">                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    Is my personal information secure when ordering a report?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Yes, we use industry-standard SSL encryption to protect all personal and payment information. 
                      Your data is never shared with third parties, and we comply with all privacy regulations 
                      to ensure your information remains completely secure and confidential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaTwo;
