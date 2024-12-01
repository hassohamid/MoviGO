import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiSignInBold } from "react-icons/pi";

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
    <section className="login-page">
      <div className="login-container">
        <div className="methods">
          <button>
            <FaApple size={25} className="mr-[10px]" /> Sign in with Apple
          </button>
          <button>
            <FcGoogle size={25} className="mr-[10px]" />
            Sign in with Google
          </button>
        </div>
        <hr className="mt-8 " />
        <div className="login-form">
          <h1 className="text-3xl font-bold drop-shadow-md  mt-4">Sign in</h1>
          <h4 className=" mt-1 font-medium drop-shadow-md">
            Enjoy the ultimate experience
          </h4>
          <input
            type="username"
            placeholder="Username"
            name="username"
            required
            className="inputs"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="username"
            required
            className="inputs"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={handleLogin}>
            Login
            <PiSignInBold size={30} className="ml-2" />
          </button>
          {errorMessage ? <p>User is not registered</p> : ""}
        </div>
        <hr className="mt-8 " />
        <div className="register-container">
          <h1 className="text-3xl font-bold drop-shadow-md mt-4">Register</h1>
          <h4 className=" mt-1 font-medium drop-shadow-md">
            No account? No worries! Click the button to begin
          </h4>
          <button>Create account</button>
        </div>
      </div>
    </section>
  );
}
