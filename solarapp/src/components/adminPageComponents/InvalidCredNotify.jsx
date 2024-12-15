import React from "react";


import '../../styling/adminlogin_styling/InvalidCredNotify.css';

const InvalidCredNotify = () => {
  return (
    <div id="invalidCredNotify">
      <p>Incorrect username or password</p>
      <p>Please try again.</p>
    </div>
  );
};

export default InvalidCredNotify;