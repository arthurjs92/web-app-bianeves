import React from "react";
import NavbarHome from "./sections/header/NavbarHome";
import HomeForm from "./sections/main/HomeForm";
import Login from "../src/Login";

function Home({ logged, setLogged }) {
  return (
    <>
      {logged ? (
        <div>
          <NavbarHome logged={logged} setLogged={setLogged} />
          <HomeForm />
        </div>
      ) : (
        <Login setLogged={setLogged} />
      )}
    </>
  );
}

export default Home;
