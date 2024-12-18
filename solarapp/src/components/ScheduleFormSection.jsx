import React, { useEffect } from "react";
import '../styling/ScheduleFormSection.css';
import { backToHomePage } from "../utils/basics/backToHomePage";

const ScheduleFormSection = () => {
  useEffect(() => {
    // Initialize the back to homepage functionality
    backToHomePage();
  }, []);

  return (
    <div className="schedule-form-section">
      <div className="container">
        <div className="form-message-container">
          <form method="post" className="form-wrapper" action="#">
            <h3 className="form-head">Solar Panel Application</h3>
            <div className="questionare-form">
              <p className="title">Personal Details</p>
              <fieldset>
                <legend className="visually-hidden">Personal Details</legend>
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
                  <button type="reset" className="button-reset">Reset</button>
                </div>
              </fieldset>
            </div>
          </form>
          <div className="form-success-info">
            <strong className="title">Preferred timeslot is submitted</strong>
            <p>Your appointment is scheduled but not confirmed.</p>
            <p>
              Please note that preferred time slot is not guaranteed. You will receive a confirmation email a few hours before the scheduled visit.<br /><br />
              Change of plans? Please call the provided phone number if you need to cancel your appointment: <span className="phone-num">+1-800-174-8345</span>
            </p>
          </div>
          <div className="controller-linker">
            <p>
              Not ready to schedule?
            </p>
            <button type="button" onClick={backToHomePage}>Back to Homepage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFormSection;
