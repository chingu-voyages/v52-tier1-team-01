import React from "react";

import DashboardHeader from "../components/DashboardComponents/DashboardHeader"
import DashboardInfo from "../components/DashboardComponents/DashboardInfo"
import DashboardTabledisplay from "../components/DashboardComponents/DashboardTabledisplay"

import Footer from "../components/Footer";

const Dashboard = () => {
    return (
      <>
      <div>
        <h1>Admin Dashboard Coming Soon!</h1>
        <a href="/">Back to Home</a><br />
        <a href="/admin">Back to Admin Login</a>
      </div>
      <DashboardHeader />
      <DashboardInfo />
      <DashboardTabledisplay />
      <Footer />
      </>
    );
  };
  
  export default Dashboard;
  