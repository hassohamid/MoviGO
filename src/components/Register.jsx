import { useState } from "react";
export default function Register({ closeModal, showRegister }) {
  //Register inputs
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

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

    setRegisterUsername("");
    setRegisterPassword("");
    alert("Registration successful! You can now log in.");
  };

  return (
    <div className="absolute inset-0 bg-transparent/60">
      <div className=" bg-white p-5 w-80 top-1/3 relative mx-auto min-h-80 drop-shadow-xl rounded-lg">
        <button
          className="absolute right-5 top-5 border border-black px-2 rounded-full hover:bg-black hover:text-white transition-all duration-200"
          onClick={closeModal}
        >
          X
        </button>
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-3xl font-bold drop-shadow-md  mt-4">Sign Up</h1>
          <h4 className="my-5 text-center font-medium drop-shadow-md">
            Enjoy the ultimate experience
          </h4>
          <input
            type="username"
            placeholder="Username"
            name="username"
            required
            className="inputs"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="username"
            required
            className="inputs"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button
            className="text-white bg-black rounded-md px-[11px] py-[5px] mt-10"
            onClick={handleRegister}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
