import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Sidebar({ user, signOut }) {
  let [userName, setUserName] = useState(null);
  if (user && !userName) setUserName(user.ID);
  return (
    <div
      className="d-lg-flex d-none flex-column flex-shrink-0 p-3 text-white bg-transparent position-fixed start-0 top-25 side-bar"
      style={{ width: 280 + `px` }}
    >
      <span className="fs-4 mb-2">Pages</span>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="" className="nav-link text-white" aria-current="page">
            Coming Soon
          </Link>
        </li>
      </ul>
      <hr />
      <span className="fs-4 mb-2">Friends</span>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="" className="nav-link text-white" aria-current="page">
            Coming Soon
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to=""
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="..."
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2 placeholder"
          />
          <strong>{userName}</strong>
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <Link className="dropdown-item" to="">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/login" onClick={signOut}>
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
