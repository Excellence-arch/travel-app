import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);

  return (
    <div className={darkMode ? "bg-navy text-white" : "bg-white text-dark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
