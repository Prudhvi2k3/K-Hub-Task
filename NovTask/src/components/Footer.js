// Footer.js

import React from 'react';
import './Footer.css';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import mailLogo from '../assets/email.png'; 
import instagramLogo from '../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-content">
          <span className="company-name">Environmental Organization</span>
        </div>
        <div className="right-content">
          <span className="social-link">
            <a href="https://www.linkedin.com/in/prudhvi-ankamreddi/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Logo" className="social-logo" />
            </a>
          </span>
          <span className="social-link">
            <a href="mailto:prudhviankamreddi1@gmail.com">
              <img src={mailLogo} alt="Mail Logo" className="mail-logo" />
            </a>
          </span>
          <span className="social-link">
            <a href="https://www.instagram.com/prudhvi_2k3/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram Logo" className="insta-logo" />
            </a>
          </span>
          <span className="social-link">
            <a href="https://twitter.com/Prudhvi15042003" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter Logo" className="twitter-logo" />
            </a>
          </span>
        </div>
      </div>
      <div className="copyright">&copy; 2023 Environmental Organization. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
