import { Link } from "react-router-dom";
import { useAvatar } from "./AvatarProvider";

export default function Navigation() {
  const { currentAvatar } = useAvatar();
  return (
    <header>
      <nav>
        <img src="src/assets/testlogo.png" alt="Web Logo" className="logonav" />
        <Link to="/home" className="home">
          Browse
        </Link>
        <Link to="/favorites" className="favorites">
          My Favorites
        </Link>
        <Link to="/profile" className="avatar">
          <img
            src={currentAvatar}
            className="userImg rounded-full"
            alt="Profile Picture"
          />
        </Link>
      </nav>
    </header>
  );
}
