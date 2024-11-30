import React from "react";
import LimeChecks from "./LimeChecks";
import Popkorn from "./Popkorn";
import Stars from "./Stars";
import Brands from "./Brands";

export default function Start({ start }) {
  return (
    <>
      <section className="media">
        <img src="src/assets/testlogo.png" alt="Website Logo" />
      </section>
      <div className="logo-container">
        <img
          src="src/assets/testlogo.png"
          alt="Website Logo"
          className="logo"
        />
      </div>
      <section className="main-content bg-black flex flex-col items-center gap-10">
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
          <LimeChecks />
        </section>
        <Brands />
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
