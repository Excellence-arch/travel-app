import { useEffect } from "react";
import NavBar from "../layouts/NavBar";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <NavBar />
      <section>
        <h1 className="display-4 text-center">About Us</h1>
        <h2 className="display-6">Tripify</h2>
        <p>
          Tripify is a travel agency. We provide travelling services througout
          all the states in Nigeria.
        </p>
        <p>We hope to extend our services to outside Nigeria very soon</p>
        <h2 className="display-6">About the developer</h2>
        <p>
          The developer of this great project is named Michael Oladipupo. He is
          a Frontend Developer proficient with :
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>SCSS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          He aspires to be a Fullstack Developer as he is currently learning
          Angular(Frontend) and Node js(Backend).
        </p>
        <p>
          He is also a Mechatronics Engineering student at Federal University
          Oye Ekiti, Ekiti State
        </p>
        <p>
          Check him out on:
          <ul>
            <li>Github: https://github.com/excellence-arch</li>
            <li>LinkedIn: https://linkedin.com/in/dev-michael-oladipupo</li>
          </ul>
        </p>
        <p>His portfolio website will be uploaded soon...</p>
      </section>
    </>
  );
};

export default About;
