import { Link } from "react-router-dom";

export default function Navigation({ currentAvatar }) {
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
          <img src={currentAvatar} className="userImg" alt="Profile Picture" />
        </Link>
      </nav>
    </header>
  );
}
