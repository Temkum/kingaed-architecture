import React from 'react';
import Nav from '../../components/nav/Nav';
import Landing from '../../components/landing/Landing';
import Project from '../../components/project/Project';
import Services from '../../components/services/Services';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <Landing />
        <Services />
        <Project />
        <Footer />
      </div>
    </>
  );
};

export default Home;
