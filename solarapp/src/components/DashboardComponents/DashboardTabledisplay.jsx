import React from "react";

import '../../styling/dashboard_styling/DashboardTabledisplay.css';

const DashboardTabledisplay = ({ appointments }) => {
  //console.log('Appointments:', appointments);

  return (
    <div id="dashboardTabledisplay" className="dashboard-table-display">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th scope="col" className="col-title index">ID</th>
            <th scope="col" className="col-title date">Date</th>
            <th scope="col" className="col-title time">Time</th>
            <th scope="col" className="col-title name">Name</th>
            <th scope="col" className="col-title email">Email</th>
            <th scope="col" className="col-title address">Address</th>
            <th scope="col" className="col-title zip">Zipcode</th>
            <th scope="col" className="col-title status">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={`appnt_${index + 1}`}>
              <td className="col-content index">{index + 1}</td>
              <td className="col-content date">{appointment.date}</td>
              <td className="col-content time">{appointment.time.slice(0, 5)}</td> {/* Only HH:MM */}
              <td className="col-content name">{appointment.name}</td>
              <td className="col-content email">{appointment.email}</td>
              <td className="col-content address">
                {appointment.address_2 ? `${appointment.address_1}, ${appointment.address_2}` : appointment.address_1}
              </td>
              <td className="col-content zip">{appointment.zipcode}</td>
              <td className="col-content status">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTabledisplay;
