import React from "react";

import '../styling/Header.css'

const Header = () => {
  return (
    <section className="header">
      <header className="header-bar">
        <h1 className="header-logo">
          <img src="/assets/solar-app-logo.svg" alt="SAY logo" />
        </h1>
        <nav className="header-nav">
          <h2 className="visually-hidden">navigation</h2>
          <ul>
            <li>Schedule</li>
            <li>About Us</li>
            <li className="admin">Admin Login</li>
          </ul>
        </nav>
      </header>
      <div className="header-info">
        Los Angeles is helping residents switch to solar with a new initiative to reduce carbon emissions. Book a free consultation with a city specialist to evaluate installation and maintenance costs, and start your journey toward clean energy savings today!
      </div>
      <div className="header-action-buttons">
        <button type="button" className="schedule-now">schedule now</button>
        <button type="button" className="check-schedule">check schedule</button>
      </div>
      {/* <a href="/admin">Admin Page</a> */}
    </section>
  );
};

export default Header;
