// AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/AdminNavbar.css'; // Import the CSS file for AdminNavbar

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <ul>
        <li>
          <Link to="/admin-home">Home</Link>
        </li>
        <li>
          <Link to="/admin-add">Add Boats</Link>
        </li>
        <li>
          <Link to="/view-payment">View Payment</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;