import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import VantaBackground from "./VantaBackground";
import axios from "axios";

const App = ({ start }) => {
  return (
    <>
      <div className="media">
        <img src="src/assets/testlogo.png" alt="Website Logo" />
      </div>
      <div className="main-content">
        <VantaBackground />

        <img
          src="src/assets/testlogo.png"
          alt="Website Logo"
          className="logo"
        />

        <div className="intro">
          <div className="movigo">
            <h1>
              <span className="browse"> Browse. </span>{" "}
              <span className="pick">Pick.</span>{" "}
              <span className="track">Track!</span>
            </h1>
            <h4>
              Browse movies, save your favorites, and stay up to date with the
              latest hits.
            </h4>
          </div>
          <div className="subtitles">
            <p>
              <FaCheck color="lime" /> Get personalized movie recommendations.
            </p>
            <p>
              <FaCheck color="lime" /> Track your favorite films and watch
              history.
            </p>
            <p>
              <FaCheck color="lime" /> Easily find where to stream your movies.
            </p>
          </div>
        </div>

        <div className="movie-container">
          <img src="" alt="" />
        </div>

        <button onClick={start} className="start-button">
          Browse{" "}
          <img src="src/assets/popcorn.png" alt="Popcorn" className="popcorn" />
        </button>
        <div className="rating">
          <h1>
            <span className="font-bold">500K+</span> Active Users
          </h1>
          <div className="stars">
            <AiFillStar color="gold" size="30px" className="star-icon" />
            <AiFillStar color="gold" size="30px" className="star-icon" />
            <AiFillStar color="gold" size="30px" className="star-icon" />
            <AiFillStar color="gold" size="30px" className="star-icon" />
            <AiFillStar color="gold" size="30px" className="star-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
