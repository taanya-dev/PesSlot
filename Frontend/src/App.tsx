import React from "react";
import { Routes, Route, Link } from "react-router-dom";   // ⭐ REQUIRED IMPORT

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import BookingHistory from "./Components/BookingHistory";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Parking App</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/history">History</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<BookingHistory />} />
        </Routes>
      </main>
    </div>
  );
}
