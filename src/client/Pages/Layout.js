import React from "react";
import { Routes, Route } from "react-router-dom";
import MoodSelection from "./MoodSelection";
import Questions from "./Questions";

const Layout = () => {
  return <div>
      <Routes>
        <Route path="/" element={<MoodSelection/>} />
        <Route path="/questions" element={<Questions/>} />
      </Routes>
  </div>
};

export default Layout;
