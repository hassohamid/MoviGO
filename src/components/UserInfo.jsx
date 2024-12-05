import { useEffect, useState } from "react";
export default function UserInfo({ currentAvatar }) {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("currentUser from localStorage:", currentUser); // Отладка

    if (currentUser) {
      setUsername(currentUser.username);
    } else {
      console.log("No user logged in"); // Отладка
    }
  }, []);
  return (
    <div className="userInfo">
      <img
        src={currentAvatar}
        className="userImg rounded-full"
        alt="Profile Picture"
      />
      <span className="account-name">
        {username ? username : "No user logged in"}
      </span>
    </div>
  );
}
