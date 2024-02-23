import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Reservation</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;