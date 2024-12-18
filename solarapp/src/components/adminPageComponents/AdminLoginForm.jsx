import React from "react";

import InvalidCredNotify from "./InvalidCredNotify"

import '../../styling/adminlogin_styling/AdminLoginForm.css';

const AdminLoginForm = () => {
  return (
    <form id="adminLoginForm" className="admin-login-form">
      <div className="admin-login-header">
        <h1>Admin Login</h1>
      </div>
      <fieldset>
        <div className="login-form-question">
          <label htmlFor="input-adminName">Username</label>
          <input type="text" id="input-adminName" required />
        </div>
        <div className="login-form-question">
          <label htmlFor="input-password">Password</label>
          <input type="text" id="input-password" required />
        </div>
        <InvalidCredNotify />
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
};

export default AdminLoginForm;