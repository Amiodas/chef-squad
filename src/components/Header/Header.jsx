import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="normal-case text-xl font-bold">Chef Squad</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/login">Login</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/register">Register</ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
