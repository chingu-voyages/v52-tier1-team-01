import React from "react";
import DashboardInfo from "../components/DashboardComponents/DashboardInfo";
import DashboardTabledisplay from "../components/DashboardComponents/DashboardTabledisplay";
import Footer from "../components/Footer";

import '../styling/dashboard_styling/Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-content">
        <div className="container">
          <DashboardInfo />
          <DashboardTabledisplay />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;