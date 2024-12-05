import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Start from "./components/Start";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AvatarProvider from "./components/AvatarProvider";

function App() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : { username: "", password: "" };
  });

  const handleStart = () => {
    navigate("/login");
  };

  const [currentAvatar, setCurrentAvatar] = useState(() => {
    const savedAvatar = localStorage.getItem("currentAvatar");
    return savedAvatar || "/src/assets/1.png";
  });

  const handleAvatarChange = (newAvatarPath) => {
    setCurrentAvatar(newAvatarPath);
    localStorage.setItem("currentAvatar", newAvatarPath);
  };

  return (
    <AvatarProvider>
      <Routes>
        <Route path="/" element={<Start start={handleStart} />} />
        <Route
          path="/login"
          element={<Login setFormData={setFormData} formData={formData} />}
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Profile
              currentAvatar={currentAvatar}
              onAvatarChange={handleAvatarChange}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </AvatarProvider>
  );
}

export default App;
