import React from "react";

import DashboardHeader from "../components/DashboardComponents/DashboardHeader"
import DashboardInfo from "../components/DashboardComponents/DashboardInfo"
import DashboardTabledisplay from "../components/DashboardComponents/DashboardTabledisplay"

import Footer from "../components/Footer";
import '../styling/dashboard_styling/Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="dashboard-content">
        <div className="container">
          <h3>Residents Requests</h3>
          <div className="info-table-wrapper">
            <DashboardInfo />
            <DashboardTabledisplay />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
