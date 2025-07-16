import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import Link from "next/link";
const PortfolioTwo = () => {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-end">          <div className="col-xl-5 col-lg-6">
            <div className="title-area">
              <span className="sub-title">Sample Reports</span>
              <h2 className="sec-title">
                Real VIN Inspection Reports from Our Database{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="title-area">
              <div className="icon-box">
                <button className="slick-arrow default portfolio-button-next">
                  <i className="fas fa-arrow-left" />
                </button>
                <button className="slick-arrow default portfolio-button-prev">
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row global-carousel gx-30 portfolio-slider1">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            spaceBetween={30}
            centeredSlides
            slidesPerView={1}
            slidesPerGroup={1}
            speed={2000}
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
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >            <SwiperSlide>
              <div>                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" alt="Toyota Camry VIN Report" style={{width: '100%', height: '280px', objectFit: 'cover'}} />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/">2019 Toyota Camry LE</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Clean Title • No Accidents
                      </span>
                    </div>
                    <Link href="/" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" alt="Honda Civic VIN Report" style={{width: '100%', height: '280px', objectFit: 'cover'}} />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/">2020 Honda Civic Sport</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        1 Previous Owner • Service Records
                      </span>
                    </div>
                    <Link href="/" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" alt="BMW X5 VIN Report" style={{width: '100%', height: '280px', objectFit: 'cover'}} />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/">2018 BMW X5 xDrive35i</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Luxury SUV • Well Maintained
                      </span>
                    </div>
                    <Link href="/" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" alt="Ford F-150 VIN Report" style={{width: '100%', height: '280px', objectFit: 'cover'}} />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/">2021 Ford F-150 XLT</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Pickup Truck • Fleet Vehicle
                      </span>
                    </div>
                    <Link href="/" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" alt="Tesla Model 3 VIN Report" style={{width: '100%', height: '280px', objectFit: 'cover'}} />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/">2022 Tesla Model 3</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Electric Vehicle • Autopilot
                      </span>
                    </div>
                    <Link href="/" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTwo;
