import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../style/SideNav.css";

function SideNav() {
  return (
    <div className="sideNav-container">
      <div className="logo">
        <h1>WikiMedia</h1>
      </div>
      <div className="nav-links">
        <Router>
          <ul>
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={""}>Main</Link>
            </li>
            <li>
              <Link to={""}>Random article</Link>
            </li>
            <li>
              <Link to={""}>Contact</Link>
            </li>
            <li>
              <Link to={""}>About Wikimedia</Link>
            </li>
            <li>
              <Link to={""}>Donate</Link>
            </li>
          </ul>
          <p className="navlinks-head">
            <span>Contribute</span>
          </p>
          <ul>
            <li></li>
            <li>
              {" "}
              <Link to={""}>Learn to edit</Link>
            </li>
            <li>
              <Link to={""}>Community Portal</Link>
            </li>
            <li>
              <Link to={""}>Help</Link>
            </li>
            <li>
              <Link to={""}>Recent Changes</Link>
            </li>
            <li>
              <Link to={""}>Upload Life</Link>
            </li>
          </ul>
        </Router>
      </div>
    </div>
  );
}

export default SideNav;
