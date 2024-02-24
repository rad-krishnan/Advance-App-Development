import React from 'react';
import Navbar from './Navbar'; 
import '../assets/css/Home.css';

function About() {
  return (
    <div>
      <Navbar />
      <header className="page-header">
        <h2>About Us</h2>
      </header>
      <div className="about-container">
        <p>Welcome to our boat reservation system! We provide convenient and reliable ticket booking services for ship travel between cities and countries.</p>
        <p>Our mission is to make your travel experience smooth and enjoyable by offering a hassle-free booking process and excellent customer service.</p>
      </div>
      <footer className="page-footer-about">
        <p>Contact us: support@nriaqua.org</p>
      </footer>
    </div>
  );
}

export default About;