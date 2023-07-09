import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="link">
            TestPage
          </Link>
        </li>
        <li>
          <Link to="/Goals" className="link">
            GoalsApp
          </Link>
        </li>
        <li>
          <Link to="/NewCard" className="link">
            New Card
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
