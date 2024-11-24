import React, { useEffect } from "react";

import '../styling/ScheduleFormSection.css';

import { backToHomePage } from "../utils/basics/backToHomePage";

const ScheduleFormSection = () => {
  useEffect(() => {
    // Initialize the back to homepage functionality
    backToHomePage();
  }, []);

  return (
    <section className="schedule-form-section">
      <form method="post" className="form-wrapper" action="#">
        <h3 className="form-head">Solar Panel Application</h3>
        <fieldset>
          <legend>Personal Details</legend>
          <div className="form-question">
            <label htmlFor="input-name">Full Name</label>
            <input type="text" id="input-name" required />
          </div>
          <div className="form-question">
            <label htmlFor="input-email">Email</label>
            <input type="email" id="input-email" required />
          </div>
          <div className="form-question">
            <label htmlFor="input-phone-num">Phone Number</label>
            <input type="number" id="input-phone-num" maxlength="10" pattern="[1-9][0-9]{9}" required />
          </div>
          <div className="form-question">
            <label htmlFor="input-address1">Address Line 1</label>
            <input type="text" id="input-address1" required />
          </div>
          <div className="form-question">
            <label htmlFor="input-address2">Address Line 2</label>
            <input type="text" id="input-address2" />
          </div>
          <div className="form-question">
            <label htmlFor="input-zip-code">Zip Code</label>
            <input type="number" maxLength="5" id="input-zip-code" pattern="[0-9]{5}" required />
          </div>
          <div className="form-question">
            <label htmlFor="input-date">Date</label>
            <input type="date" id="input-date" required />
          </div>
          <div className="form-question">
            <label htmlFor="input-time">Time</label>
            <input type="time" id="input-time" required />
          </div>
          <div className="action-button-form">
            <button type="submit" className="button-submit">Schedule</button>
            <button type="button" className="button-reset">Reset</button>
          </div>
        </fieldset>

      </form>
      <div className="form-sucess-info">
        <p></p>
      </div>
      <div className="controller-linker">
        <p>
          Not ready to schedule?
        </p>
        <button type="button"> Back to Homepage</button>
      </div>
    </section>
  );
};

export default ScheduleFormSection;
