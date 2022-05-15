import React from 'react';
import './nav.scss';

const Nav = () => {
  return (
    <>
      <div id="top-bar" className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="top-info text-center text-md-left">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <p className="info-text">Sandpit Road, Buea, Cameroon</p>
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
    </>
  );
};

export default Nav;
