import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar fixed-top border-bottom navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {" "}
          <h3 className="text-brand">
            Job<span className="text-secondary">Zilla</span>
          </h3>
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
          <ul className="navbar-nav ms-auto text-center pt-1">
            <li className="nav-item">
              <Link
                id="menu"
                className="nav-link"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu" className="nav-link" to="/jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu" className="nav-link" to="/aboutus">
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link id="menu" className="nav-link" to="/blogs">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu" className="nav-link" to="/addReview">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <button className="btn-brand fw-bold rounded">LOG IN</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
