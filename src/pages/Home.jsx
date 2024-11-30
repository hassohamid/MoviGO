import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerUsername, setRegisterUser] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    let newUser = { username: registerUsername, password: registerPassword };

    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users"));
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem("users", JSON.stringify([newUser]));
    }

    setRegisterUser("");
    setRegisterPassword("");
    alert("Registration successful! You can now log in.");
  };

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let loggedInUser = users.find(
      (user) =>
        user.username === loginUsername && user.password === loginPassword
    );

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
        <LoginInput
          label="Username"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <LoginInput
          label="Password"
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        {errorMessage && (
          <h1 className="text-red-500 text-center">{errorMessage}</h1>
        )}
        <div className="flex flex-col gap-5">
          <h3 className="text-white my-10">Not a user yet? Register here: </h3>
          <LoginInput
            label="Username"
            placeholder="Username"
            value={registerUsername}
            onChange={(e) => setRegisterUser(e.target.value)}
          />
          <LoginInput
            label="Password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
