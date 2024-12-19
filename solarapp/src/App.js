import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
//import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";

import './styling/Main.css';

function App() {
  // Function to check if user is logged in
  const isAdminLoggedIn = () => localStorage.getItem('adminLoggedIn') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={isAdminLoggedIn() ? <Navigate to="/dashboard" /> : <AdminPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/dashboard"
          element={isAdminLoggedIn() ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;