import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { dark, light, logout } from "../actions";
import Buttons from "../components/Buttons";

const NavBar = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);
  const loggedIn = useSelector((state) => state.usersReducer.onlineUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return loggedIn === null ? (
    <nav
      className={
        darkMode
          ? "navbar navbar-expand-sm navbar-dark nav-navy"
          : "navbar navbar-expand-sm navbar-light bg-light"
      }
    >
      <Link className="navbar-brand" to="/">
        Tripify
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
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/guide">
              Maps
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
        Tripify
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
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/guide">
              Maps
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
        color="light"
        types="button"
        handleClick={() => {
          navigate("/");
          dispatch(logout());
        }}
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
