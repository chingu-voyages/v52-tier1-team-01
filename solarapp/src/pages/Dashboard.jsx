import React, { useState, useEffect } from "react";
import DashboardInfo from "../components/DashboardComponents/DashboardInfo";
import DashboardTabledisplay from "../components/DashboardComponents/DashboardTabledisplay";
import Footer from "../components/Footer";

import supabase from "../utils/database-integration/database-connection";

import '../styling/dashboard_styling/Dashboard.css';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const TABLE_NAME = process.env.REACT_APP_TABLE_NAME; // Access table name from .env

  // Fetch data from the database on page load
  useEffect(() => {
    //console.log('TABLE_NAME:', TABLE_NAME);
    //console.log('process.env:', process.env);
    const fetchAppointments = async () => {
      try {
        const { data, error } = await supabase.from(TABLE_NAME).select('*');
        if (error) {
          console.error('Error fetching appointments:', error.message);
        } else {
          //console.log('Fetched data:', data);
          setAppointments(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchAppointments();
  }, [TABLE_NAME]); // Add TABLE_NAME as a dependency

  return (
    <>
      <div className="dashboard-content">
        <div className="container">
          <DashboardInfo appointments={appointments}/>
          <DashboardTabledisplay appointments={appointments} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;