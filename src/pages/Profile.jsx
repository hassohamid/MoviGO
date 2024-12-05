import avatar1 from "../assets/1.png";
import avatar2 from "../assets/2.png";
import avatar3 from "../assets/3.png";
import avatar4 from "../assets/4.png";
import avatar5 from "../assets/5.png";
import avatar6 from "../assets/6.png";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton";
import { PiUploadSimple } from "react-icons/pi";
import { MdOutlinePassword } from "react-icons/md";
import { GoLock } from "react-icons/go";
import AvatarDashboard from "../components/AvatarDashboard";
import { useAvatar } from "../components/AvatarProvider";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const { currentAvatar, setCurrentAvatar } = useAvatar();
  const avatars = [
    { id: 1, path: avatar1 },
    { id: 2, path: avatar2 },
    { id: 3, path: avatar3 },
    { id: 4, path: avatar4 },
    { id: 5, path: avatar5 },
    { id: 6, path: avatar6 },
  ];

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

  const toggleAvatar = () => {
    setChangeAvatar(!changeAvatar);
    console.log(changeAvatar);
  };

  const onAvatarChange = (newAvatar) => {
    setCurrentAvatar(newAvatar); // Обновляем аватар в состоянии
  };

  return (
    <>
      <Navigation currentAvatar={currentAvatar} />
      <section className="profile-container relative">
        {
          <AvatarDashboard
            avatars={avatars}
            changeAvatar={changeAvatar}
            onAvatarChange={onAvatarChange}
          />
        }
        <div className="profile">
          <h1 className="profile-title">Profile.</h1>
          <h4 className="profile-description">
            Manage your account settings with ease.
          </h4>
        </div>
        <div className="setting-container">
          <div className="settings">
            <button onClick={toggleAvatar} className="avatar-btn">
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
            src={currentAvatar}
            className="userImg rounded-full"
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
      </section>
    </>
  );
}
