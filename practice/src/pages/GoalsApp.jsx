import React from "react";
import Navbar from "../components/NavBar";
import Goals from "../components/Goals";
import "./index.css";

const GoalsApp = () => {
  return (
    <div className="goals">
      <Navbar />
      <h1>Goals App</h1>
      <Goals />
    </div>
  );
};

export default GoalsApp;
