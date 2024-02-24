// Navbar.jsx
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import '../assets/css/Home.css';

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
          <li><a href="#"><Link to= "/home" >  <HomeIcon/> </Link> </a>  </li>
          <li><a href="#"> <Link to= "/about" > <InfoIcon/> About   </Link> </a></li>
          <li><a href="#">  <Link to= "/contact" > <CallIcon /> Contact </Link>  </a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;