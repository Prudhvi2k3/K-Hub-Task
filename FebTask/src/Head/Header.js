// Navbar.js
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Header.css';
// import SearchBar from './Searchbar';
// import Sidebar from './Sidebar';
import LogoImage from '../logo.png';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the Sidebar open/close
  };

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
      {/* <button onClick={toggleSidebar} className="sidebar-button">
        ☰
      </button> */}
      {/* <div><SearchBar /></div> */}
      <div>
      {(isDesktop || isTablet || isMobile) && <img src={LogoImage} alt="Logo" className="logo-image" />}
      </div>
      <div>
      {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
