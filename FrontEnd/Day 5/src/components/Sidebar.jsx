import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#"> <Link to="/profile">  Profile  </Link> </a></li>
        <li><a href="#">Reservation</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;