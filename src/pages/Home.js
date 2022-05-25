import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Animation from "../containers/Animation";
import NavBar from "../layouts/NavBar";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <NavBar />
      <section className="text-center">
        <Animation />
        <Link className="btn btn-info" to="/register">
          Get Started
        </Link>
      </section>
    </>
  );
};

export default Home;
