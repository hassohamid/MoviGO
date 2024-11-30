import React from "react";
import LimeChecks from "./LimeChecks";
import Popkorn from "./Popkorn";
import Stars from "./Stars";

export default function Start({ start }) {
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
        </div>
        <LimeChecks />
        <Popkorn start={start} />
        <div className="rating">
          <h1>
            <span className="font-bold">500K+</span> Active Users
          </h1>
          <Stars />
        </div>
      </div>
    </>
  );
}
