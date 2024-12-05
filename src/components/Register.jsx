import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function Register({ closeModal }) {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successfulMessage, setSuccessfulMessage] = useState(false);
  const [shake, setShake] = useState(false);

  const navigate = useNavigate();

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

  return (
    <div>
      <div className="absolute inset-0 bg-transparent/60">
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
          <RegisterForm
            handleRegister={handleRegister}
            registerUsername={registerUsername}
            setRegisterUsername={setRegisterUsername}
            registerPassword={registerPassword}
            setRegisterPassword={setRegisterPassword}
            errorMessage={errorMessage}
            shake={shake}
            successfulMessage={successfulMessage}
          />
        </div>
      </div>
    </div>
  );
}
