import React, { useContext } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="normal-case text-xl font-bold">
          Chef Squad
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu-horizontal px-1">
          <li className="mr-5">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="mr-5">
            <ActiveLink to="/blogs">Blogs</ActiveLink>
          </li>

          {user ? (
            <li className="mr-5 text-primary font-bold">{user?.displayName}</li>
          ) : (
            ""
          )}

          {user ? (
            <li>
              <button onClick={handleLogout}>Sign out</button>
            </li>
          ) : (
            ""
          )}
          {!user ? (
            <li className="mr-5">
              <ActiveLink to="/login">Sign in</ActiveLink>
            </li>
          ) : (
            " "
          )}
          {!user ? (
            <li>
              <ActiveLink to="/register">Sign Up</ActiveLink>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
