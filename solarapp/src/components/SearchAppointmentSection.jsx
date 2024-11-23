import React from "react";

import '../styling/SearchAppointmentSection.css';



const SearchAppointmnetSection = () => {
  return (
    <div id="search-appoinment-section">
      <form class="end-user-form" id="searchAppForm">
        <fieldset>
          <legend>Looking for your Appoinment?</legend>
          <div class="form-question">
            <label for="searcher-email-input">Email : </label>
            <input id ="searcher-email-input" type="email" placeholder="to be developed later"></input>
          </div>
        </fieldset>

      </form>
      <div class="controller-linker" id="searchControllerLinker">
        <p>Back to home Page</p>
      </div>

    </div>
  );
};

export default SearchAppointmnetSection;
