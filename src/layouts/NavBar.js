import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { dark, light, logout } from "../actions";
import Buttons from "../components/Buttons";

const NavBar = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);
  const loggedIn = useSelector((state) => state.usersReducer.onlineUser);
  const dispatch = useDispatch();

  return loggedIn === null ? (
    <nav
      className={
        darkMode
          ? "navbar navbar-expand-sm navbar-dark nav-navy"
          : "navbar navbar-expand-sm navbar-light bg-light"
      }
    >
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <Link className="btn btn-outline-info" to="/login">
        Log in
      </Link>
      {darkMode ? (
        <button
          className="text-white bg-transparent border-0 mx-4"
          onClick={() => dispatch(light(false))}
          type="button"
        >
          <FontAwesomeIcon icon={faSun} />
        </button>
      ) : (
        <button
          className="text-dark bg-transparent border-0 mx-4"
          onClick={() => dispatch(dark(true))}
          type="button"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
    </nav>
  ) : (
    <nav
      className={
        darkMode
          ? "navbar navbar-expand-sm navbar-dark nav-navy"
          : "navbar navbar-expand-sm navbar-light bg-light"
      }
    >
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <Buttons
        name="Logout"
        types="button"
        color=""
        handleClick={() => dispatch(logout())}
      />
      {darkMode ? (
        <button
          className="text-white bg-transparent border-0 mx-4"
          onClick={() => dispatch(light(false))}
          type="button"
        >
          <FontAwesomeIcon icon={faSun} />
        </button>
      ) : (
        <button
          className="text-dark bg-transparent border-0 mx-4"
          onClick={() => dispatch(dark(true))}
          type="button"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
