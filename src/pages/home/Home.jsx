import React from 'react';
import Nav from '../../components/nav/Nav';
import Landing from '../../components/landing/Landing';
import Project from '../../components/project/Project';
import Services from '../../components/services/Services';
import Footer from '../../components/footer/Footer';
import AboutUs from '../../components/aboutus/AboutUs';

const Home = () => {
  return (
    <>
      <div className="body-inner">
        <Nav />
        <Landing />
        <Services />
        <Project />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
