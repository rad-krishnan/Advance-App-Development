// Home.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../assets/css/Home.css';

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
          {/* Your main content here */}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;