import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Start from "./components/Start";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home"); // Navigate to the home page after login
  };

  return (
    <div className="app-container">
      <Routes>
        {/* Start Page */}
        <Route path="/" element={<Start start={handleStart} />} />

        {/* Login Page */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Home Page */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
        />

        {/* Other Routes */}
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/favorites"
          element={isLoggedIn ? <Favorites /> : <Login onLogin={handleLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
