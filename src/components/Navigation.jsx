import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { MdFavorite } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

export default function Navigation() {
  return (
    <header>
      <nav>
        <Link to="/home" className="home">
          <AiFillHome size={50} />
        </Link>
        <Link to="/favorites" className="favorites">
          <MdFavorite size={50} />
        </Link>
        <Link to="/profile" className="avatar">
          <RxAvatar size={50} />
        </Link>
      </nav>
    </header>
  );
}
