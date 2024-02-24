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
        <p>Experience the ease of booking your boat tickets online with our intuitive and user-friendly platform. Gone are the days of waiting in long queues or making countless phone calls to secure your travel plans. With just a few clicks, you can browse available routes, select your preferred departure and arrival times, and reserve your seats instantly.</p>

        <p>Our platform offers a wide range of destinations, catering to both domestic and international travelers. Whether you're planning a leisurely cruise along the coast or embarking on an adventurous journey across the open seas, we have options to suit every itinerary and budget.</p>

        <p>Traveling with us means more than just reaching your destination; it's about enjoying the journey every step of the way. Relax in comfortable seating, indulge in delicious onboard dining options, and take in breathtaking views of the ocean as you sail towards your destination. Our attentive crew members are dedicated to ensuring your safety and satisfaction throughout your voyage.</p>

        <p>Join our loyal community of travelers who rely on us for seamless and stress-free boat travel. With round-the-clock customer support and a commitment to excellence, we're here to exceed your expectations and make your next maritime adventure one to remember. Book your tickets today and embark on the ultimate seafaring experience with us!</p>

        </div>
      <footer className="page-footer-about">
        <p>Contact us: support@nriaqua.org</p>
      </footer>
    </div>
  );
}

export default About;