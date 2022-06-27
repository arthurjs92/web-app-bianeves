import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYouPage from "./ThankYouPage";
import HomePage from "./HomePage";
import Login from "./Login";
import Home from "./Home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
