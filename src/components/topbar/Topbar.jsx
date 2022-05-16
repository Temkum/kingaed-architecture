import React from 'react';
import './topbar.scss';

const Topbar = () => {
  return (
    <div>
      <div id="top-bar" className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="top-info text-center text-md-left">
                <li>
                  <i className="fas fa-envelope" />
                  <a
                    className="info-text"
                    href="mailto:ayerekingsley@gmail.com"
                  >
                    ayerekingsley@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fas fa-phone" />
                  <p className="info-text">+237 674 890 800</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
              <ul className="list-unstyled">
                <li>
                  <a title="Facebook" href="">
                    <span className="social-icon">
                      <i className="fab fa-facebook-f" />
                    </span>
                  </a>
                  <a title="YouTube" href="">
                    <span className="social-icon">
                      <i className="fab fa-youtube" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
