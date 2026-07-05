import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Planos from "./components/Planos/Planos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>
    </Router>
  );
}

export default App;
