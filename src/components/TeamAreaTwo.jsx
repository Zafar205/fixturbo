import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import Link from "next/link";

const TeamAreaTwo = () => {
  return (
    <div className="team-area-2 space">
      <div className="container">
        <div className="row gx-30 justify-content-between align-items-center">
          <div className="col-lg-4">            <div className="title-area mb-lg-0">
              <span className="sub-title">Our Experts</span>
              <h2 className="sec-title">VIN Report Specialists Team</h2>
              <p className="sec-text mb-lg-5 mb-4">
                Our team of automotive data analysts and vehicle history experts 
                work around the clock to provide you with the most comprehensive 
                and accurate VIN inspection reports in the industry.
              </p>
              <div className="icon-box">
                <button
                  data-slick-prev=".team-slider2"
                  className="team-slider2 slick-arrow style2 default team-slider2-prev"
                >
                  <i className="fas fa-arrow-left" />
                </button>
                <button
                  data-slick-next=".team-slider2"
                  className="slick-arrow style2 default team-slider2-next"
                >
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row gx-30 global-carousel team-slider2">
              <Swiper
                loop={true}
                navigation={{
                  nextEl: ".team-slider2-next",
                  prevEl: ".team-slider2-prev",
                }}
                spaceBetween={20}
                slidesPerView={2}
                slidesPerGroup={1}
                speed={1000}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                className="mySwiper"
                modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 2,
                  },
                }}
              >                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                        alt="Data Analyst" 
                        style={{width: '100%', height: '300px', objectFit: 'cover'}}
                      />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <button 
                          onClick={() => {
                            const pricingSection = document.getElementById('pricing-section');
                            if (pricingSection) {
                              pricingSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
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
                          Michael Johnson
                        </button>
                      </h4>
                      <span className="team-card_desig">
                        Senior Data Analyst
                      </span>
                      <div className="team-social_wrap">
                        <div className="social-btn style2">
                          <Link href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                          <Link href="https://www.instagram.com/">
                            <i className="fab fa-instagram" />
                          </Link>
                          <Link href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </Link>
                          <Link href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                        alt="Vehicle Inspector" 
                        style={{width: '100%', height: '300px', objectFit: 'cover'}}
                      />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <button 
                          onClick={() => {
                            const pricingSection = document.getElementById('pricing-section');
                            if (pricingSection) {
                              pricingSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
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
                          Sarah Martinez
                        </button>
                      </h4>
                      <span className="team-card_desig">Vehicle History Expert</span>
                      <div className="team-social_wrap">
                        <div className="social-btn style2">
                          <Link href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                          <Link href="https://www.instagram.com/">
                            <i className="fab fa-instagram" />
                          </Link>
                          <Link href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </Link>
                          <Link href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                        alt="Technical Specialist" 
                        style={{width: '100%', height: '300px', objectFit: 'cover'}}
                      />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <button 
                          onClick={() => {
                            const pricingSection = document.getElementById('pricing-section');
                            if (pricingSection) {
                              pricingSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
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
                          David Chen
                        </button>
                      </h4>
                      <span className="team-card_desig">
                        Technical Specialist
                      </span>
                      <div className="team-social_wrap">
                        <div className="social-btn style2">
                          <Link href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                          <Link href="https://www.instagram.com/">
                            <i className="fab fa-instagram" />
                          </Link>
                          <Link href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </Link>
                          <Link href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                        alt="Research Director" 
                        style={{width: '100%', height: '300px', objectFit: 'cover'}}
                      />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <button 
                          onClick={() => {
                            const pricingSection = document.getElementById('pricing-section');
                            if (pricingSection) {
                              pricingSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
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
                          Emily Rodriguez
                        </button>
                      </h4>
                      <span className="team-card_desig">Research Director</span>
                      <div className="team-social_wrap">
                        <div className="social-btn style2">
                          <Link href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                          <Link href="https://www.instagram.com/">
                            <i className="fab fa-instagram" />
                          </Link>
                          <Link href="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </Link>
                          <Link href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAreaTwo;
