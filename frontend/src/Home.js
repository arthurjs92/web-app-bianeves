import React from "react";
import NavbarHome from "./sections/header/navbar-home";
import HomeForm from "./sections/main/home-form";
import Login from "../src/Login";

function Home({ logged, setLogged }) {
  return (
    <>
      {logged ? (
        <Login setLogged={setLogged} />
      ) : (
        <div>
          <NavbarHome />
          <HomeForm />
        </div>
      )}
    </>
  );
}

export default Home;
