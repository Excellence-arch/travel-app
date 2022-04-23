import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MapDetails from "./pages/MapDetails";
import Register from "./pages/Register";

const App = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);

  return (
    <div className={darkMode ? "bg-navy text-white" : "bg-white text-dark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/maps" element={<MapDetails />} />
      </Routes>
    </div>
  );
};

export default App;
