import { useState } from "react";

export default function Register({ closeModal }) {
  // Register inputs
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successfulMessage, setSuccessfulMessage] = useState(false);
  const [shake, setShake] = useState(false);

  const handleRegister = () => {
    if (!registerUsername.trim() || !registerPassword.trim()) {
      setErrorMessage("Both username and password are required.");
      setShake(false);
      setTimeout(() => setShake(true), 10);
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

    setRegisterUsername("");
    setRegisterPassword("");
    setSuccessfulMessage("Registration successful! You can now log in.");
    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  const handleAnimationEnd = () => {
    setShake(false);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <div className="absolute inset-0 bg-transparent/60" onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-5 w-[25rem] min-h-[30rem] top-1/4 relative mx-auto drop-shadow-xl rounded-lg flex flex-col items-center justify-center"
      >
        <button
          className="absolute right-5 top-5 z-10 border border-black px-2 rounded-full hover:bg-black hover:text-white transition-all duration-200 hover:rotate-90"
          onClick={closeModal}
        >
          X
        </button>
        <div className="h-96 w-[25rem] flex flex-col justify-between items-center p-5 gap-5 relative">
          <h1 className="text-3xl font-bold drop-shadow-md mt-4">Sign Up</h1>
          <h4 className="text-center font-medium drop-shadow-md">
            Enjoy the ultimate experience
          </h4>
          <input
            type="username"
            placeholder="Username"
            name="username"
            required
            className="inputs"
            onChange={(e) => handleInputChange(e, setRegisterUsername)}
          />
          <input
            type="password"
            placeholder="Password"
            name="username"
            required
            className="inputs"
            onChange={(e) => handleInputChange(e, setRegisterPassword)}
          />
          {errorMessage && (
            <p
              className={`absolute bottom-16 w-[90%] text-center text-red-500 text-sm font-medium mt-2 bg-red-100 border border-red-400 p-2 rounded-lg transition-all duration-300 ${
                shake ? "animate-shake" : ""
              } ${errorMessage ? "visible" : "invisible"}`}
              onAnimationEnd={handleAnimationEnd}
            >
              {errorMessage}
            </p>
          )}
          {successfulMessage && (
            <p className="text-green-600 absolute bottom-16 w-[90%] text-center font-medium mt-2 bg-green-200 border border-green-400 p-2 rounded-lg transition-all duration-300">
              {successfulMessage}
            </p>
          )}
          <button
            className="text-white bg-black rounded-md px-[25px] py-[10px] mt-20 w-full hover:bg-barely-black"
            onClick={handleRegister}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
