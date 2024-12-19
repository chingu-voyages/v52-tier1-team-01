// InvalidCredNotify.jsx

import React from "react";
import '../../styling/adminlogin_styling/InvalidCredNotify.css';

const InvalidCredNotify = ({ isOpen }) => {
  return (
    <div id="invalidCredNotify" className={isOpen ? 'open' : ''}>
      <p>Incorrect username or password</p>
      <p>Please try again.</p>
    </div>
  );
};

export default InvalidCredNotify;
