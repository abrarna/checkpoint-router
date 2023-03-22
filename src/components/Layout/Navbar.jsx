import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="!#">Home</Link>
      <Link to="!#">About</Link>
      <Link to="!#">Users</Link>
    </nav>
  );
};

export default Navbar;
