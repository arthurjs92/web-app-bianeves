import { Link } from "react-router-dom";
import Login from "../../Login";

const NavbarHome = ({ logged, setLogged }) => {

  const logout = () => {
    console.log("saindo ....");
    localStorage.removeItem("jwtToken");
    setLogged(false);
  };

  return (
    <div className="div-nav">
      <nav className="container navbar navbar-expand-lg navbar-light bg-light nav nav-pills nav-fill">
        <div className="container-fluid">
          
          <a className="navbar-brand logo-nav nav-link-logo nav-home" >Bia Neves</a>

          <button className="navbar-toggler cursor-pointer" type="button" data-bs-toggle="collapse" data-bs-target="#menu-ancora" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
          </button>
          
          <div
            className="container collapse navbar-collapse col-logout"
            id="menu-ancora"
          >
            {logged ? (
              <div className="col col-logout">
                <ul className="navbar-nav mb-lg-0">
                  <li className="nav-item">
                    <Link onClick={logout} className="nav-link" to={""}>
                      Sair
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Login setLogged={setLogged} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;
