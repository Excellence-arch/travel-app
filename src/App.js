import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MapDetails from "./pages/MapDetails";
import Register from "./pages/Register";
import TravelDetails from "./pages/TravelDetails";

const App = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);

  return (
    <div className={darkMode ? "bg-navy text-white" : "bg-white text-dark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maps" element={<MapDetails />} />
        <Route path="/travel-details" element={<TravelDetails />} />
      </Routes>
    </div>
  );
};

export default App;
