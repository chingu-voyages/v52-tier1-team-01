import React from "react";

import '../styling/Header.css'

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <header className="header-bar">
          <h1 className="header-logo">
            <a href="/"><img src="/assets/solar-app-logo.svg" alt="SAY logo" /></a>
          </h1>
          <nav className="header-nav">
            <h2 className="visually-hidden">navigation</h2>
            <ul>
              <li><button type="button">Schedule</button></li>
              <li><a href="/aboutus">About Us</a></li>
              <li className="admin">
                <a href="/admin">Admin Login</a>
              </li>
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
      </div>
      {/* <a href="/admin">Admin Page</a> */}
    </section>
  );
};

export default Header;
