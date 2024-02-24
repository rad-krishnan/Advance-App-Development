// MyBooking.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/MyBooking.css';
import Navbar from './Navbar';

function MyBooking() {
  return (
    <div>
      <Navbar />
      <div className="booking-details">
        <h2 className="book-header">My Booking</h2>
        <div className="booking-info">
          <p><strong>Date:</strong> January 20, 2024</p>
          <p><strong>Price:</strong> $120000</p>
          <p><strong>Departure Time:</strong> 10:00 AM</p>
          <p><strong>Destination:</strong> Phillipines</p>
          <p><strong>No. of seats booked:</strong> 3</p>
        </div>
        <Link to="/pay" className="pay-button">Pay</Link>
      </div>
    </div>
  );
}

export default MyBooking;
