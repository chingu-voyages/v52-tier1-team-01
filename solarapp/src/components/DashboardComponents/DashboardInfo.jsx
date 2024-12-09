import React from "react";

import '../../styling/dashboard_styling/DashboardInfo.css'


const DashboardInfo = () => {
  return (
    <div id="dashboardInfo" className="dashboard-info">
      <span>Hi Admin!</span>
      <div>
        <button type="button">Download PDF</button>
      </div >
    </div >
  );
};

export default DashboardInfo;