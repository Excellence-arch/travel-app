import { useEffect } from "react";
import NavBar from "../layouts/NavBar";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <NavBar />
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        quaerat assumenda quidem, facere saepe adipisci tempore, nulla quae
        aliquam veritatis, fugiat quos quas ea quasi. Minus dolorem delectus
        dolores incidunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa omnis
        fugit dignissimos perspiciatis est iusto fugiat deserunt aspernatur
        laborum delectus laudantium, alias expedita vitae libero necessitatibus
        ex sint dolorem quis.
      </p>
    </>
  );
};

export default About;
