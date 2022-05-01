import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import NavBar from "./layouts/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginHome from "./pages/LoginHome";
import MapDetails from "./pages/MapDetails";
import Register from "./pages/Register";
import TermsOfService from "./pages/TermsOfService";
import TravelDetails from "./pages/TravelDetails";
import BookTransport from "./pages/BookTransport";

const App = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);

  return (
    <div className={darkMode ? "bg-navy text-white" : "bg-white text-dark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LoginHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maps" element={<MapDetails />} />
        <Route path="/book-transport" element={<BookTransport />} />
        <Route path="/travel-details" element={<TravelDetails />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <h1>Page Not Found</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
