import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/auth";
import CourseDetail from "./pages/courseDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
