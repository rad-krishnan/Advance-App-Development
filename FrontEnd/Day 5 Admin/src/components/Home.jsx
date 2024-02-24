// Home.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../assets/css/Home.css';
 import shiphome from '../assets/img/ShipSail.jpg' ;  


function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container2">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content">
        {isSidebarOpen && <Sidebar />}
        <main className="main-content">
{/*         <p>Welcome to NRI Aquacruise Cloudbooker. Reserve your tickets asap in the "Reservation" section.</p> */}
        <img src= {shiphome} alt="NRI Aquacruise"/> 
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;