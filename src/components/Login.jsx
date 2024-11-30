import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //Register inputs
  const [registerUsername, setRegisterUser] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!registerUsername || !registerPassword) {
      alert("Both username and password are required.");
      return;
    }

    const newUser = {
      username: registerUsername,
      password: registerPassword,
    };

    const usersData = localStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];

    if (users.find((user) => user.username === registerUsername)) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setRegisterUser("");
    setRegisterPassword("");
    alert("Registration successful! You can now log in.");
  };

  const handleLogin = () => {
    let usersData = JSON.parse(localStorage.getItem("users"));
    let users = usersData ? usersData : [];

    if (!users || users.length === 0) {
      alert("No registered users found. Please register first.");
      return;
    }
    //Kolla om det finns en anvandare med username + password
    let loggedInUser = users.find((user) => {
      return user.username === loginUsername && user.password === loginPassword;
    });

    if (loggedInUser) {
      sessionStorage.setItem("currentUser", JSON.stringify(loggedInUser));
      setLoginUsername("");
      setLoginPassword("");
      navigate("/profile");
    } else {
      setErrorMessage("User is not registered");
    }
  };

  return (
    <section className="bg-gray-900 h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5">
        <label className="text-white text-2xl font-extrabold drop-shadow-md">
          Username
        </label>
        <input
          name="username"
          className="p-1 rounded-md shadow-sm drop-shadow-sm"
          id="username"
          type="text"
          placeholder="Username"
          required
          onChange={(e) => setLoginUsername(e.target.value)}
        />

        <label
          className="text-white text-2xl font-extrabold drop-shadow-md"
          // htmlFor="password"
        >
          Password
        </label>
        <input
          name="password"
          onChange={(e) => setLoginPassword(e.target.value)}
          className="p-1 rounded-md shadow-sm drop-shadow-sm"
          id="password"
          type="password"
          placeholder="Password"
          required
        />

        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        {errorMessage && (
          <h1 className="text-red-500 text-center">{errorMessage}</h1>
        )}
        <div className="flex flex-col gap-5">
          <h3 className="text-white my-10">Not a user yet? Register here: </h3>
          <label
            htmlFor=""
            className="text-white text-2xl font-extrabold drop-shadow-md"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setRegisterUser(e.target.value)}
            className="p-1 rounded-md shadow-lg"
          />
          <label
            htmlFor=""
            className="text-white text-2xl font-extrabold drop-shadow-md"
          >
            Password
          </label>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
            className="p-1 rounded-md shadow-lg"
          />
          <button className="login-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
