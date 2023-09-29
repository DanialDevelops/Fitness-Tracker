import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Exercise from "./Pages/Exercise";
import History from "./Pages/History";
import DonationPage from "./Pages/Donation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/history" element={<History />} />
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
    </Router>
  );
}

export default App;