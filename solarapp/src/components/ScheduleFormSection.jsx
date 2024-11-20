import React from "react";

import '../styling/ScheduleFormSection.css';

const ScheduleFormSection = () => {
  return (
    <section className="schedule-form-section">
      <h3 className="form-head">Solar Panel Application</h3>
      <form method="" className="form-wrapper">
        <fieldset>
          <legend>Personal Details</legend>
          <div className="form-question">
            <label htmlFor="input-name">Full Name</label>
            <input type="text" id="input-name" />
          </div>
          <div className="form-question">
            <label htmlFor="input-email">Email</label>
            <input type="text" id="input-email" />
          </div>
          <div className="form-question">
            <label htmlFor="input-phone-num">Phone Number</label>
            <input type="text" id="input-phone-num" />
          </div>
          <div className="form-question">
            <label htmlFor="input-address1">Address Line 1</label>
            <input type="text" id="input-address1" />
          </div>
          <div className="form-question">
            <label htmlFor="input-address2">Address Line 2</label>
            <input type="text" id="input-address2" />
          </div>
          <div className="form-question">
            <label htmlFor="input-zip-code">Zip Code</label>
            <input type="text" id="input-zip-code" />
          </div>
          <div className="form-question">
            <label htmlFor="input-date">Date</label>
            <input type="text" id="input-date" />
          </div>
          <div className="form-question">
            <label htmlFor="input-time">Time</label>
            <input type="text" id="input-time" />
          </div>
          <div className="action-button-form">
            <button type="submit" className="button-submit">Schedule</button>
            <button type="button" className="button-reset">Reset</button>
          </div>
        </fieldset>
        <div>Not ready to schedule? <button type="button"> Back to Homepage</button></div>
      </form>
    </section>
  );
};

export default ScheduleFormSection;
