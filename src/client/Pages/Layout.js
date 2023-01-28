import React from "react";
import { Routes, Route } from "react-router-dom";
import MoodSelection from "./MoodSelection";

const Layout = () => {
  return <div>
    <h1>Probando</h1>
      <Routes>
        <Route path="/" element={<MoodSelection/>} />
      </Routes>
  </div>
};

export default Layout;
