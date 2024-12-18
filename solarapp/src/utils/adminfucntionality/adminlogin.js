// utils/adminlogin.js

// Function to check if the admin credentials match
export const authenticateAdmin = (username, password) => {
  const storedUsername = process.env.REACT_APP_ADMIN_USERNAME; // Assuming these are in .env
  const storedPassword = process.env.REACT_APP_ADMIN_PASSWORD;

  if (username === storedUsername && password === storedPassword) {
    localStorage.setItem('adminLoggedIn', 'true'); // Set login state
    console.log(localStorage.getItem('adminLoggedIn'));
    return true;
  } else {
    return false;
  }
};
