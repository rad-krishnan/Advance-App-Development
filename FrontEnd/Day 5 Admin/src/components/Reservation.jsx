// Reservation.jsx
import React from 'react';
import '../assets/css/Reservation.css';
import Navbar from '../components/Navbar' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reservation() {
  const handleBookNow = () => {
    // Logic for booking goes here

    // Display toast message
    toast.success('Booking successful!', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  return (
    <div>
    <Navbar />
    <ToastContainer className="reservation-toastify__toast-container" />
    <header className="res-header">
      <h2>Reservation</h2>
    </header>

    <div className="container-reservation">
    <div className="reservation-item">
    <h3>Ship 1 Departure</h3>
    <p>Date: January 15, 2024</p>
    <p>Price: $100000</p>
    <p>Departure Time: 9:00 AM</p>
    <p>Destination: Maldives </p>
    <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>

  </div>

  <div className="reservation-item">
    <h3>Ship 2 Departure </h3>
    <p>Date: January 20, 2024</p>
    <p>Price: $120000</p>
    <p>Departure Time: 10:00 AM</p>
    <p>Destination: Phillipines </p>
    <button className="book-now-btn">Book Now</button>
  </div>
  <div className="reservation-item">
    <h3>Ship 3 Departure</h3>
    <p>Date: January 20, 2024</p>
    <p>Price: $200000</p>
    <p>Departure Time: 11:15 AM</p>
    <p>Destination: Mauritius </p>
    <button className="book-now-btn">Book Now</button>
  </div>
  <div className="reservation-item">
    <h3>Ship 4 Departure </h3>
    <p>Date: January 20, 2024</p>
    <p>Price: $9999</p>
    <p>Departure Time: 11:50 AM</p>
    <p>Destination: Singapore </p>
    <button className="book-now-btn">Book Now</button>
  </div>
  

      {/* Add more reservation items as needed */}
      </div>
      <footer className="res-footer">
      <p>&copy; 2024 NRI Aquacruise. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Reservation;
