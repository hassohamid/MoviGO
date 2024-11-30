import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton";
export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

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
    if (sessionStorage.getItem("currentUser")) {
      setCurrentUser(JSON.parse(sessionStorage.getItem("currentUser")));
      console.log(currentUser);
    } else {
      alert("User is not registered");
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Navigation />
      <section className="flex flex-col items-center mt-20">
        <h1>Welcome to the profile page, {currentUser?.username}!</h1>
        <ProfileButton onClick={handleLogOut}>Log Out</ProfileButton>
        <ProfileButton onClick={deleteAccount}>Delete Account</ProfileButton>
      </section>
    </>
  );
}
