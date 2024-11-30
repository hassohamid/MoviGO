import React from "react";
import LimeChecks from "./LimeChecks";
import Popkorn from "./Popkorn";
import Stars from "./Stars";

export default function Start({ start }) {
  return (
    <>
      <section className="media">
        <img src="src/assets/testlogo.png" alt="Website Logo" />
      </section>
      <section className="main-content h-screen bg-black flex flex-col items-center">
        <div className="flex w-screen">
          <img
            src="src/assets/testlogo.png"
            alt="Website Logo"
            className="logo"
          />
        </div>

        <section className="intro">
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
        </section>
        <LimeChecks />
        <Popkorn start={start} />
        <div className="rating">
          <h1>
            <span className="font-bold">500K+</span> Active Users
          </h1>
          <Stars />
        </div>
      </section>
    </>
  );
}
