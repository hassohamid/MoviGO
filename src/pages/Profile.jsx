import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton";
import { PiUploadSimple } from "react-icons/pi";
import { MdOutlinePassword } from "react-icons/md";
import { GoLock } from "react-icons/go";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const capitalizeWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("currentUser");
    navigate("/");
  };

  const deleteAccount = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("No user is logged in");
      return;
    }
    let users = JSON.parse(localStorage.getItem("users"));

    users = users.filter((user) => user.username !== currentUser.username);

    localStorage.setItem("users", JSON.stringify(users));
    sessionStorage.removeItem("currentUser");
    navigate("/");
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUser(parsedUser);
      console.log("Logged-in user:", parsedUser);
    } else {
      alert("You are not logged in. Redirecting to the login page.");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Navigation />
      <div className="profile-container">
        <div className="profile">
          <h1 className="profile-title">Profile.</h1>
          <h4 className="profile-description">
            Manage your account settings with ease.
          </h4>
        </div>
        <div className="setting-container">
          <div className="settings">
            <button className="avatar-btn">
              <PiUploadSimple size={25} className="mr-1.5" /> Change your Avatar
            </button>
            <button className="update-btn">
              <MdOutlinePassword size={25} color="white" className="mr-1.5" />{" "}
              Update Password{" "}
            </button>
          </div>
        </div>
        <div className="userInfo">
          <img
            src="src/assets/avatar.png"
            className="userImg"
            alt="Profile Picture"
          />
          <span className="account-name">
            {currentUser?.username && capitalizeWord(currentUser.username)}
          </span>
        </div>
        <div className="profile-btns">
          <button className="deletebtn" onClick={deleteAccount}>
            Delete Account
          </button>
          <button className="logoutbtn" onClick={handleLogOut}>
            <GoLock size={20} className="mr-1.5" />
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}
