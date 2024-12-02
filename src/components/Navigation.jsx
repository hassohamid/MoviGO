import { Link } from "react-router-dom";
import { CiBookmarkPlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function Navigation() {
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
            src="src/assets/avatar.png"
            className="userImg"
            alt="Profile Picture"
          />
        </Link>
      </nav>
    </header>
  );
}
