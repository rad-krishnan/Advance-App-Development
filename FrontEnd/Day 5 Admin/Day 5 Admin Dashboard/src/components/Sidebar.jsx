import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#"> <Link to="/profile">  Profile  </Link> </a></li>
        <li><a href="#"><Link to="/reserve">  Reservation  </Link>  </a></li>
        <li><a href="#"><Link to="/mybooking">  My Booking  </Link>  </a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">  <Link to="/">  Logout </Link> </a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;