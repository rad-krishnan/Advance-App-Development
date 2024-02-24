import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

function Footer() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setDateTime(currentDate.toLocaleString());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="social-icons">
              <WhatsAppIcon />
              <InstagramIcon />
              <XIcon />
              <YouTubeIcon />
              
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p>&copy; 2024 NRI Aquacruise. All rights reserved.</p>
            <p className="date-time">{dateTime}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
