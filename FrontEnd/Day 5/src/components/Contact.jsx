import React from 'react';
import Navbar from './Navbar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import '../assets/css/Home.css';

function Contact() {
  return (
    <div>
      <Navbar />
      <header className="page-header">
        <h2>Contact Us</h2>
      </header>
      <div className="contact-container">
        <p>If you have any questions, feedback, or inquiries, please feel free to contact us using the information below:</p>
        <ul>
          <li>Email: contact@boatreservationsystem.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 912, NSR ROAD, Coimbatore, Tamil Nadu.</li>
        </ul>
      </div>
      <footer className="page-footer">
        <p>Connect with us on social media</p>
        <div className="social-icons2">
          <WhatsAppIcon />
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
        </div>
      </footer>
    </div>
  );
}

export default Contact;
