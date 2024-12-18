// DashboardInfo.jsx

import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { exportToPDF } from "../../utils/adminfucntionality/pdfexporter"; // Import the PDF utility
import '../../styling/dashboard_styling/DashboardInfo.css';

const DashboardInfo = ({ appointments }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or related flag
    localStorage.removeItem('adminLoggedIn'); // adjust the key as necessary
    console.log(localStorage.getItem('adminLoggedIn'));
    navigate('/'); // Redirect to the homepage
  };

  const handleExportPDF = () => {
    exportToPDF(appointments); // Pass the appointments data to PDF generator
  };


  // Use useEffect to introduce a delay before checking the localStorage
  useEffect(() => {
    setTimeout(() => {
      console.log(localStorage.getItem('adminLoggedIn'));
    }, 0);
  }, []);

  return (
    <>
      <div className="title-wrap">
        <h3 className="title">Residents Requests</h3>
        <button type="button" className="admin-login" onClick={handleLogout}>Logout</button>
      </div>
      <div id="dashboardInfo" className="dashboard-info">
        <span className="greet-message">Hi Admin!</span>
        <div className="download-wrap">
          <span>Download</span>
          <button type="button" className="pdf-export" onClick={handleExportPDF}>PDF</button>
          <button type="button">Excel</button>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
