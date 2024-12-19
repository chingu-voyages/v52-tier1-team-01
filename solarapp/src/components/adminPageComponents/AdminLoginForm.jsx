import React, {useState } from "react";
import InvalidCredNotify from "./InvalidCredNotify";

import { authenticateAdmin } from "../../utils/adminfucntionality/adminlogin"
import '../../styling/adminlogin_styling/AdminLoginForm.css';

const AdminLoginForm = () => {
  const [isInvalidCred, setInvalidCred] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('input-adminName').value;
    const password = document.getElementById('input-password').value;

    if (authenticateAdmin(username, password)) {
      window.location.href = '/dashboard';
      console.log(localStorage.getItem('adminLoggedIn'));
    } else {
      setInvalidCred(true);
    }
  };

  return (
    <form id="adminLoginForm" className="admin-login-form" onSubmit={handleSubmit}>
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
          <input type="password" id="input-password" required />
        </div>
        <InvalidCredNotify isOpen={isInvalidCred} />
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
};

export default AdminLoginForm;