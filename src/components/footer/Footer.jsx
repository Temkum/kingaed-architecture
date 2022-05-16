import React from 'react';
import './footer.scss';
import Logo from '../../assets/kingaed_white.png';

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer bg-overlay">
        <div className="footer-main">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 footer-widget footer-about">
                <h3 className="widget-title">About Us</h3>
                <img
                  loading="lazy"
                  className="footer-logo"
                  src={Logo}
                  alt="kingaed"
                />
                <p>
                  Continually utilize interoperable human capital without
                  effective applications. Monotonectally fashion corporate
                  partnerships after accurate channels. Synergistically maximize
                  resource maximizing.
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="YouTube">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                <h3 className="widget-title">Working Hours</h3>
                <div className="working-hours">
                  We work 7 days a week, every day excluding major holidays.
                  Contact us if you have an emergency, with our Hotline and
                  Contact form.
                  <br />
                  <br /> Monday - Friday:
                  <span className="text-right">10:00 - 16:00 </span>
                  <br /> Saturday:
                  <span className="text-right">12:00 - 17:00</span>
                  <br /> Sunday and holidays:
                  <span className="text-right">012:00 - 18:00</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                <h3 className="widget-title">Services</h3>
                <ul className="list-arrow">
                  <li>
                    <a href="#">Pre-Construction</a>
                  </li>
                  <li>
                    <a href="#">General Contracting</a>
                  </li>
                  <li>
                    <a href="#">Construction Management</a>
                  </li>
                  <li>
                    <a href="#">Design and Build</a>
                  </li>
                  <li>
                    <a href="#">Self-Perform Construction</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="copyright-info text-center">
                  &copy; All rights reserved <br />
                  <span>
                    Developed by
                    <a href="https://www.kumjudetem.netlify.app"> SoftechDev</a>
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="footer-menu text-center">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/plans">Plans</a>
                    </li>
                    <li>
                      <a href="/team">Our Team</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                    <li>
                      <a href="/projects">Projects</a>
                    </li>
                    <li>
                      <a href="/plans">Plans</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="back-to-top"
              data-spy="affix"
              data-offset-top={10}
              className="back-to-top position-fixed"
            >
              <button className="btn btn-primary" title="Back to Top">
                <i className="fa fa-angle-double-up" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
