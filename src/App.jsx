import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Start from "./components/Start";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [pass] = useState("123");
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : { username: "", password: "" };
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      console.log("User is logged in, but no redirect yet.");
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStart = () => {
    navigate("/login");
  };

  const handleLogin = () => {
    if (formData.password === pass) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/profile");
    } else {
      setErrorMessage("Unknown password");
    }
  };

  const showHeader = location.pathname !== "/";

  return (
    <div className="app-container">
      {showHeader && <Navigation />}
      <Routes>
        {/* Start page */}
        <Route path="/" element={<Start start={handleStart} />} />

        {/* Login page */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/profile" />
            ) : (
              <Login
                formData={formData}
                onInputChange={handleInputChange}
                onLogin={handleLogin}
                errorMessage={errorMessage}
              />
            )
          }
        />

        {/* Main page (after login) */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />

        {/* Profile (after login) */}
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile formData={formData} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* favorites (after login) */}
        <Route
          path="/favorites"
          element={isLoggedIn ? <Favorites /> : <Navigate to="/login" />}
        />
      </Routes>
      {isLoggedIn && (
        <button
          className="border border-black px-4 rounded-md my-5"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      )}
    </div>
  );
}

export default App;
