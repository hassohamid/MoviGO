import { Link } from "react-router-dom";
import { CiBookmarkPlus } from "react-icons/ci";

export default function Navigation() {
  return (
    <header>
      <nav>
        <img src="src/assets/testlogo.png" alt="Web Logo" className="logonav" />
        <Link to="/home" className="home">
          Browse
        </Link>
        <Link to="/favorites" className="favorites">
          <CiBookmarkPlus size={30} /> Your Lists
        </Link>
        <Link to="/profile" className="avatar">
          <img src="src/assets/hasso.jpeg" alt="" className="userImg" />
        </Link>
      </nav>
    </header>
  );
}
