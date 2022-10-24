import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/info">Info</Link>
        </li>
        {
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
