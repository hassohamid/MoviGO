import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 bg-slate-400 w-screen">
      <nav className="flex justify-center gap-5 p-5 text-white font-extrabold drop-shadow-md">
        <Link to="/home" className="links">
          Home
        </Link>
        <Link to="/favorites" className="links">
          Favorites
        </Link>
        <Link to="/profile" className="links">
          My Profile
        </Link>
      </nav>
    </header>
  );
}
