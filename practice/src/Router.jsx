import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoalsApp from "./pages/GoalsApp";
import TestPage from "./pages/TestPage";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/Goals" element={<GoalsApp />} />
      </Routes>
    </Router>
  );
};

export default Routing;
