import React from "react";

import Header from "../components/Header";
import IconInfoBar from "../components/IconInfoBar";
import ScheduleFormSection from "../components/ScheduleFormSection";
import SearchAppointmentSection from "../components/SearchAppointmentSection";
import PreFooterImage from "../components/PreFooterImage";
import Footer from "../components/Footer";




const HomePage = () => {
  return (
    <>
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
