import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({ formData, setFormData }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [pass] = useState("123");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      console.log("User is logged in, but no redirect yet.");
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (formData.password === pass) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate("/profile");
    } else {
      setErrorMessage("Unknown password");
    }
  };

  if (!formData) {
    console.error("formData is undefined");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <section className="bg-gray-900 h-screen w-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label
          className="text-white text-2xl font-extrabold drop-shadow-md"
          htmlFor="username"
        >
          Username
        </label>
        <input
          name="username"
          value={formData.username || ""}
          className="p-1 rounded-md shadow-sm drop-shadow-sm"
          id="username"
          type="text"
          placeholder="Username"
          required
          onChange={handleInputChange}
        />

        <label
          className="text-white text-2xl font-extrabold drop-shadow-md"
          htmlFor="password"
        >
          Password
        </label>
        <input
          name="password"
          onChange={handleInputChange}
          value={formData.password || ""}
          className="p-1 rounded-md shadow-sm drop-shadow-sm"
          id="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit" className="login-button">
          Login
        </button>
        {errorMessage && (
          <h1 className="text-red-500 text-center">{errorMessage}</h1>
        )}
      </form>
    </section>
  );
}
