import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Exam from "./pages/Exam";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard"; // if you have a dashboard page

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Main pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/result" element={<Result />} />

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
