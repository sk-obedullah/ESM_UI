
import './App.css';
import Login from './components/Login/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div>
      <div>
        <ToastContainer
          position="top-center"
          style={{ width: "auto",height:"auto", fontSize: "15px" }}
        />
      </div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} /> {/* Default to login */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
