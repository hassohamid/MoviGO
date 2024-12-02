import { Link } from "react-router-dom";
import { CiBookmarkPlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function Navigation() {
  return (
    <header>
      <nav>
        <img src="src/assets/testlogo.png" alt="Web Logo" className="logonav" />
        <div className="w-screen flex justify-evenly gap-24 items-center">
          <Link
            to="/home"
            className="hover:text-white transition-all duration-150"
          >
            Browse
          </Link>
          <Link to="/favorites" className="favorites">
            <CiBookmarkPlus size={30} /> Your Lists
          </Link>
          <Link to="/profile" className="avatar">
            <img
              src="src/assets/avatar.png"
              className="userImg"
              alt="Profile Picture"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
