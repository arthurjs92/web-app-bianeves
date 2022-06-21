import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './Login';
import ThankYouPage from "./ThankYouPage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <Footer />

        {/* <ThankYouPage/> */}
        {/* <Login/> */}
      </div>
      <Routes>
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
