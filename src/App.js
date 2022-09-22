import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Total from "./components/Total/Total";
import Maths from "./components/Maths/Maths";
import Chemistry from "./components/Chemistry/Chemistry";
import Physics from "./components/Physics/Physics";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="fluid-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Total />} />
        <Route path="total" element={<Total />} />
        <Route path="maths" element={<Maths />} />
        <Route path="chemistry" element={<Chemistry />} />
        <Route path="physics" element={<Physics />} />
      </Routes>
    </div>
  );
}

export default App;
