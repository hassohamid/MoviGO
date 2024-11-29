import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Start from "./components/Start";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : { username: "", password: "" };
  });

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Start start={handleStart} />} />
        <Route
          path="/login"
          element={<Login setFormData={setFormData} formData={formData} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
