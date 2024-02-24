// Payment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Payment.css';

function Payment() {
  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      <div className="payment-options">
        <Link to="/credit-debit-card">Credit/Debit Card</Link>
        <Link to="/netbanking">Netbanking</Link>
        <Link to="/upi">UPI</Link>
      </div>
    </div>
  );
}

export default Payment;