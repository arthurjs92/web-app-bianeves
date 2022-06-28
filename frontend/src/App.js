import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYouPage from "./ThankYouPage";
import Home from "./Home";
import Promocoes from "../src/sections/main/secao-promocoes"; 

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Promocoes />} />
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
