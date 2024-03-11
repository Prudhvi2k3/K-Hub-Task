// Sidebar.js
import React, { useRef, useEffect } from 'react';
import './Sidebar.css';
import { useMediaQuery } from 'react-responsive';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const sidebarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Clicked outside the sidebar, close it
        toggleSidebar();
      }
    };

    if (isOpen) {
      // Add the event listener when the sidebar is open
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Remove the event listener when the component is unmounted or the sidebar is closed
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
      <div ref={sidebarRef} className="sidebar-content">
        <div className="sidebar-link"><a href="#home">Home</a></div>
        <div className="sidebar-link"><a href="#cards">Cards</a></div>
        <div className="sidebar-link"><a href="#analytics">Analytics</a></div>
        <div className="sidebar-link"><a href="#data">Data</a></div>
        <div className="sidebar-link"><a href="#form">Form</a></div>
        <div></div>
        <button onClick={toggleSidebar} className="close-button">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
