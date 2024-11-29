import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
export default function Profile({ formData }) {
  console.log(formData.username);

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Navigation />
      <section className="flex flex-col items-center">
        <h1>Welcome back, {formData.username}!</h1>
        <button
          onClick={handleLogOut}
          className="border border-black px-4 rounded-md my-5 shadow-md hover:scale-105 transition-all duration-200 hover:bg-[rgb(200, 200, 200)]"
        >
          Log Out
        </button>
      </section>
    </>
  );
}
