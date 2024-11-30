import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

export default function Start({ start }) {
  const countStars = 5;
  const limes = [
    {
      id: 1,
      description: "Get personalized movie recommendations.",
    },
    {
      id: 2,
      description: "Track your favorite films and watch history.",
    },
    {
      id: 3,
      description: "Easily find where to stream your movies.",
    },
  ];
  return (
    <>
      <div className="media">
        <img src="src/assets/testlogo.png" alt="Website Logo" />
      </div>
      <div className="main-content h-screen bg-black">
        <img
          src="src/assets/testlogo.png"
          alt="Website Logo"
          className="logo"
        />

        <div className="intro">
          <div className="movigo">
            <h1>
              <span> Browse. </span>
              <span>Pick.</span>
              <span className="text-red-600">Track!</span>
            </h1>
            <h4>
              Browse movies, save your favorites, and stay up to date with the
              latest hits.
            </h4>
          </div>
          <div className="flex flex-col items-start">
            {limes.map((item, i) => (
              <div key={i} className="flex flex-row-reverse items-center gap-2">
                <p className="text-white">{item.description}</p>
                <FaCheck color="lime" />
              </div>
            ))}
          </div>
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
            {[...Array(countStars)].map((_, i) => (
              <AiFillStar
                key={i}
                color="gold"
                size="30px"
                className="star-icon"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
