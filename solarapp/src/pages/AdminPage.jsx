import React from "react";
//import { useNavigate } from "react-router-dom";
import AdminLoginForm from "../components/adminPageComponents/AdminLoginForm";
import Footer from '../components/Footer';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <div className="container">
        <AdminLoginForm />
        <div className="controller-linker">
          <p>Back to <a href="/">Homepage</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
