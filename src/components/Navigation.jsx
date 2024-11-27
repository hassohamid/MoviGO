import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 bg-slate-400 w-screen">
      <nav className="flex justify-center gap-5 p-5 text-white font-extrabold drop-shadow-md">
        <Link className="links" to="/home">
          Home
        </Link>
        <Link className="links" to="/favorites">
          Favorites
        </Link>
        <Link className="links" to="/profile">
          My Profile
        </Link>
      </nav>
    </header>
  );
}
