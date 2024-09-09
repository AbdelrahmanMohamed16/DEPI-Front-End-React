import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ loginStatus }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark position-fixed start-0 end-0 z-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          Social APP
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
          {loginStatus ? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="register"
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
