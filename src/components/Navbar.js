import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth-context";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);

  const handleLogout = () => {
    setIsLogoutClicked(true);
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Book Directory
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/books"
                >
                  Books
                </Link>
              </li>
            </ul>
            <div className="ml-auto">
              {auth.isLoggedIn ? (
                <Link
                  className="nav-link active "
                  onClick={handleLogout}
                  style={{ marginRight: "20px" }}
                >
                  {isLogoutClicked ? "Sign Up" : "Logout"}
                </Link>
              ) : (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                  style={{ marginRight: "20px" }}
                >
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
