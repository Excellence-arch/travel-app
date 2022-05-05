import React from "react";
import { Link } from "react-router-dom";
import Animation from "../containers/Animation";
import NavBar from "../layouts/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <section>
        <Animation />
        <Link className="btn btn-info" to="/register">
          Get Started
        </Link>
      </section>
    </>
  );
};

export default Home;
