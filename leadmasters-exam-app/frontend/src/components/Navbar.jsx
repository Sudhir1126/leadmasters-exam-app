import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("score");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      {user && <Link to="/dashboard">Dashboard</Link>}
      {user && <Link to="/exam">Exam</Link>}
      {user && <Link to="/results">Results</Link>}
      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
