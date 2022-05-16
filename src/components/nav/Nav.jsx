import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import Logo from '../../assets/kingaed_dark.png';
import Topbar from '../topbar/Topbar';

const Nav = () => {
  return (
    <>
      <Topbar />
      <header id="header" className="header-two">
        <div className="site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="logo">
                    <Link to="/" className="d-block" />
                    <img loading="lazy" src={Logo} alt="Kingaed" />
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
                        <a href="#" className="nav-link ">
                          Projects
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
                            <a href="#">Guest Houses</a>
                          </li>
                          <li>
                            <a href="#">Hotels</a>
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
                            <a href="#">3 Bedrooms and More</a>
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
                          <li>
                            <a href="#">College</a>
                          </li>
                          <li>
                            <a href="#">Factory/Estate</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Contact Us
                        </a>
                      </li>
                      <li className="header-get-a-quote">
                        <a className="btn btn-primary" href="#">
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
