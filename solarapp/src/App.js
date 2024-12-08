import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";


//import './App.css';
import './styling/Main.css';



function App() {

  const isAdminLoggedIn = () => {
    return localStorage.getItem('adminLoggedIn') === 'true';
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;



//<Route 
//          path="/dashboard" 
//          element={
//            isAdminLoggedIn() ? <Dashboard /> : <Navigate to="/admin" />
//          }
//        />
