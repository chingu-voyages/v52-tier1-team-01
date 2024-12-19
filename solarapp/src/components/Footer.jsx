import React from "react";

import '../styling/Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-links">
        <ul>
          <li>
            <a href="https://github.com/chingu-voyages/v52-tier1-team-01" target="_blank" rel="noopener noreferrer">V52 Tier1 Team01 <br /> Github Repository
            </a>
          </li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="footer-note">
        <p>&#169; Copyright 2024 Soumyajit Yujeong Amanda</p>
      </div>
    </div>
  );
};

export default Footer;
