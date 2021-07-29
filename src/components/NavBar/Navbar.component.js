import React from "react";
import "./Navbar.component.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="menuBar">
        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="logo">
            <Link to="/home">
              <img src="images/logo.png" alt="No preview available" />
            </Link>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="main_nav"
          >
            <ul className="navbar-nav navList ">
              <li className="navItem">
                <NavLink
                  to="/home"
                  activeClassName="active_navLink"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Home
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink
                  to="/about"
                  activeClassName="active_navLink"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  About Us
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink
                  to="/motorcycle"
                  activeClassName="active_navLink"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  REV'IT
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink
                  to="/gallery"
                  activeClassName="active_navLink"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Gallery
                </NavLink>
              </li>

              {/* <li className="navItem">
                <NavLink
                  to="/product"
                  activeClassName="active_navLink"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Products
                </NavLink>
              </li> */}

              <li className="navItem">
                <NavLink
                  to="/contact"
                  activeClassName="active_navLink"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  to="/booking"
                  activeClassName="active_navLink"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Book Now
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <input type = "text" placeholder ="Search" /> */}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
