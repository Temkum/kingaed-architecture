import React from 'react';
import './landing.scss';

const Landing = () => {
  return (
    <>
      <div>
        <div className="banner-carousel banner-carousel-2 mb-0">
          <div
            className="banner-carousel-item"
            style={{
              backgroundImage: 'url(assets/images/slider-main/bg4.jpg)',
            }}
          >
            <div className="container">
              <div className="box-slider-content">
                <div className="box-slider-text">
                  <h2 className="box-slide-title">17 Years Of Excellence In</h2>
                  <h3 className="box-slide-sub-title">Engineering Designs</h3>
                  <p className="box-slide-description">
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                  </p>
                  <p>
                    <a href="/services" className="slider btn btn-primary">
                      Our plans
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="banner-carousel-item"
            style={{
              backgroundImage: 'url(assets/images/slider-main/bg5.jpg)',
            }}
          >
            <div className="slider-content text-left">
              <div className="container">
                <div className="box-slider-content">
                  <div className="box-slider-text">
                    <h2 className="box-slide-title">When Services Matters</h2>
                    <h3 className="box-slide-sub-title">
                      Your Choice is Simple
                    </h3>
                    <p className="box-slide-description">
                      You have ideas, goals, and dreams. We have a culturally
                      diverse, forward thinking team looking for talent like.
                    </p>
                    <p>
                      <a
                        href="/about"
                        className="slider btn btn-primary"
                        aria-label="about-us"
                      >
                        Know Us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="call-to-action no-padding">
          <div className="container">
            <div className="action-style-box">
              <div className="row">
                <div className="col-md-8 text-center text-md-left">
                  <div className="call-to-action-text">
                    <h3 className="action-title">
                      We understand your needs on construction
                    </h3>
                  </div>
                </div>
                <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                  <div className="call-to-action-btn">
                    <a className="btn btn-primary" href="/contact">
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
