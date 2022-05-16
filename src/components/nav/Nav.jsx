import React from 'react';
import './nav.scss';
import Logo from '../../assets/kingaed_dark.png';
import Topbar from '../topbar/Topbar';

const Nav = () => {
  return (
    <>
      <Topbar />
      <header id="header" className="header">
        <div className="site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="logo">
                    <a className="d-block" href="#!">
                      <img loading="lazy" src={Logo} alt="Kingaed" />
                    </a>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    id="navbar-collapse"
                    className="collapse navbar-collapse"
                  >
                    <ul className="nav navbar-nav ml-auto align-items-center">
                      <li className="nav-item active">
                        <a href="#" className="nav-link">
                          Home
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Lodging <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="projects.html">Guest Houses</a>
                          </li>
                          <li>
                            <a href="projects-single.html">Hotels</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Residential Plans <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="#">Apartments</a>
                          </li>
                          <li>
                            <a href="#">2 Bedrooms</a>
                          </li>
                          <li>
                            <a href="#">3 Bedrooms</a>
                          </li>
                          <li>
                            <a href="#">4 Bedrooms</a>
                          </li>
                          <li>
                            <a href="#">6 Bedrooms</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Big Structures <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="#">College</a>
                          </li>
                          <li>
                            <a href="#">Factory/Estate</a>
                          </li>
                          <li className="dropdown-submenu">
                            <a
                              href="#!"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Projects
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="#!">Realized</a>
                              </li>
                              <li>
                                <a href="#!">On going</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          FAQ <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="header-get-a-quote">
                        <a className="btn btn-primary" href="contact.html">
                          Book Appointment
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
