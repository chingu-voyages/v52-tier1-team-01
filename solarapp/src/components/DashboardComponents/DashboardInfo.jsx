import React from "react";

import '../../styling/dashboard_styling/DashboardInfo.css'


const DashboardInfo = () => {
  return (
    <>
      <div className="title-wrap">
        <h3 className="title">Residents Requests</h3>
        <button type="button" className="admin-login">logout</button>
      </div>
      <div id="dashboardInfo" className="dashboard-info">
        <span className="greet-message">Hi Admin!</span>
        <div className="download-wrap">
          <span>Download</span>
          <button type="button">PDF</button>
          <button type="button">Excel</button>
        </div >
      </div >
    </>
  );
};

export default DashboardInfo;