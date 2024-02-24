// AdminAddBoats.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import '../assets/css/AdminAddBoats.css';

function AdminAddBoats() {
  const [boatName, setBoatName] = useState('');
  const [price, setPrice] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', boatName, price, departureDate, departureTime, destination);
  };

  return (
    <div>
      <Navbar />
      <div className="admin-add-boats-container">
        <h2>Add New Boat Reservation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="boatName">Boat Name:</label>
            <input type="text" id="boatName" value={boatName} onChange={(e) => setBoatName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="departureDate">Departure Date:</label>
            <input type="date" id="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="departureTime">Departure Time:</label>
            <input type="time" id="departureTime" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required />
          </div>
          <button type="submit">Add Boat</button>
        </form>
      </div>
    </div>
  );
}

export default AdminAddBoats;