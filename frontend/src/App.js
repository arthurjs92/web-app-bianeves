import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYouPage from "./ThankYouPage";
import Home from "./Home";
import HomePage from "./HomePage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route
          path="/home"
          element={<Home logged={logged} setLogged={setLogged} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
