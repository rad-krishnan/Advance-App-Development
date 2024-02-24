// AdminHome.jsx
import React from 'react';
import AdminNavbar from './AdminNavbar';
import '../assets/css/AdminHome.css'; // Import the CSS file for AdminHome

function AdminHome() {
  return (
    <div>
      <AdminNavbar />
      <div className="admin-content">
        <h2>Welcome to Admin Dashboard</h2>
        <p>Manage your boats and view payment history here.</p>
      </div>
    </div>
  );
}

export default AdminHome;
