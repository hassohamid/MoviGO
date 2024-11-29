import React from "react";
import { AiFillStar } from "react-icons/ai";
import VantaBackground from "./VantaBackground"; // Import the Vanta background component

export default function Start({ start }) {
  return (
    <>
      <VantaBackground />
      <img src="src/assets/start.png" alt="Website Logo" className="logo" />
      <div className="start-container"></div>
      <button onClick={start} className="start-button">
        Browse
      </button>
      <div className="rating">
        <h1>
          {" "}
          <span className="font-bold"> 500K+ </span> Active Users
        </h1>
        <div className="stars">
          <AiFillStar color="gold" size="30px" className="star-icon" />
          <AiFillStar color="gold" size="30px" className="star-icon" />
          <AiFillStar color="gold" size="30px" className="star-icon" />
          <AiFillStar color="gold" size="30px" className="star-icon" />
          <AiFillStar color="gold" size="30px" className="star-icon" />
        </div>
      </div>
    </>
  );
}
