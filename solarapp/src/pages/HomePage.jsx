import React, { useEffect } from "react";

import Header from "../components/Header";
import IconInfoBar from "../components/IconInfoBar";
import ScheduleFormSection from "../components/ScheduleFormSection";
import SearchAppointmentSection from "../components/SearchAppointmentSection";
import PreFooterImage from "../components/PreFooterImage";
import Footer from "../components/Footer";

// Import the schedule section initialization and form submit handling
import { initializeScheduleFormSection } from "../utils/basics/scheduleActions";
import { handleScheduleFormSubmit } from "../utils/basics/formSubmitActions";

const HomePage = () => {
  useEffect(() => {
    // Initialize the visibility of ScheduleFormSection
    initializeScheduleFormSection();

    // Handle the form submission only once
    handleScheduleFormSubmit();
  }, []); // Runs only once when HomePage is loaded

  return (
    <>
      <h1>Home PAGE - <br />To be editted</h1>

      <Header />
      <IconInfoBar />
      <ScheduleFormSection />
      <SearchAppointmentSection />
      <PreFooterImage />
      <Footer />
    </>
  );
};

export default HomePage;
