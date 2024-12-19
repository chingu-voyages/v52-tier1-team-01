import React from "react";

import '../../styling/dashboard_styling/DashboardHeader.css'

const DashboardHeader = () => {
  return (
    <div id="dashboardHeader">
      <div className="container">
        <header className="header-bar">
          <h1 className="header-logo">
            <a href="/">
              <img src="/assets/solar-app-logo.svg" alt="SAY logo" />
            </a>
          </h1>
          <nav className="header-nav">
            <h2 className="visually-hidden">navigation</h2>
            <ul>
              <li>Schedule</li>
              <li>About Us</li>
              <li className="admin">
                <button type="button">logout</button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default DashboardHeader;