import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const cookie = Cookies.get("access");

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access");
    navigate("/");
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/info">Info</Link>
        </li>
        {cookie ? (
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
