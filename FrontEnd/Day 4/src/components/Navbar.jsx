// Navbar.jsx
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
      </div>
      {/* Navbar items on the right side */}
      <div className="navbar-right">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
