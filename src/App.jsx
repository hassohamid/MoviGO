import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import Start from "./components/Start";
import Favorites from "./pages/Favorites";
import { AnimatedBackground } from "animated-backgrounds";

function App() {
  return (
    <div className="app-container">
      <AnimatedBackground animationName="auroraBorealis" blendMode="lighten" />
      <Start />
    </div>
  );
}

export default App;
