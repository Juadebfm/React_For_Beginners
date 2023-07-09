import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoalsApp from "./pages/GoalsApp";
import TestPage from "./pages/TestPage";
import NewCard from "./pages/NewCard";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/Goals" element={<GoalsApp />} />
        <Route path="/NewCard" element={<NewCard />} />
      </Routes>
    </Router>
  );
};

export default Routing;
