import React from "react";

import '../../styling/dashboard_styling/DashboardTabledisplay.css';


const DashboardTabledisplay = () => {
  return (
    <div id="dashboardTabledisplay">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th scope="col" className="col-title date">Date</th>
            <th scope="col" className="col-title time">Time</th>
            <th scope="col" className="col-title name">Name</th>
            <th scope="col" className="col-title email">Email</th>
            <th scope="col" className="col-title address">Address</th>
            <th scope="col" className="col-title status">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-content date">14/12/2024</td>
            <td className="col-content time">10:00</td>
            <td className="col-content name">Lisa Martinez</td>
            <td className="col-content email">lisa.martinex@gmail.com</td>
            <td className="col-content address">1234 Evergreen Avenue</td>
            <td className="col-content status">Visited</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTabledisplay;