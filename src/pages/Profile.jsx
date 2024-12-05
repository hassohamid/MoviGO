import avatar1 from "../assets/1.png";
import avatar2 from "../assets/2.png";
import avatar3 from "../assets/3.png";
import avatar4 from "../assets/4.png";
import avatar5 from "../assets/5.png";
import avatar6 from "../assets/6.png";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoLock } from "react-icons/go";
import { useAvatar } from "../components/AvatarProvider";
import AvatarSelector from "../components/AvatarSelector";
import ProfileSettings from "../components/ProfileSettings";
import UserInfo from "../components/UserInfo";
import { useAccount } from "../hooks/useAccount";

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

  const { handleLogOut, deleteAccount } = useAccount(navigate);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
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
    setCurrentAvatar(newAvatar);
  };

  return (
    <>
      <Navigation currentAvatar={currentAvatar} />
      <section className="profile-container relative">
        <AvatarSelector
          avatars={avatars}
          changeAvatar={changeAvatar}
          onAvatarChange={onAvatarChange}
        />
        <div className="profile">
          <h1 className="profile-title">Profile.</h1>
          <h4 className="profile-description">
            Manage your account settings with ease.
          </h4>
        </div>
        <ProfileSettings toggleAvatar={toggleAvatar} />
        <UserInfo currentAvatar={currentAvatar} />
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
