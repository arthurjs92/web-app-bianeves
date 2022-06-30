import "./css/style.css";
import Logo from "./img/imagens-header/logo-principal.png";
import { useState, useEffect } from "react";
import * as api from "../src/services/Endpoints";

const Login = ({ setLogged }) => {
  const estadoInicial = {
    nome: "",
    senha: "",
  };

  const [user, setUser] = useState(estadoInicial);
  const [erro, setErro] = useState("");

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // useEffect(() => {
  //   console.log("useEffect (" + localStorage.getItem("jwtToken") + ")");
  //   if (localStorage.getItem("jwtToken") !== null) setLogged(true);
  //   else setLogged(false);
  // }, []);

  const logar = (event) => {
    event.preventDefault();
    api
      .login(user)
      .then((response) => {
        setLogged(true);
        localStorage.setItem("jwtToken", response.data);
        setErro("");
      })
      .catch((e) => {
        // console.log("Erro: -------------------------- " + e);
        setErro("Usuário e/ou senha incorreto(s)");
        alert(erro);

      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center titulo mt-5">Clientes</h2>
          <div className="text-center frase-destaque mb-5">Landing Page</div>

          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src={Logo}
                  className="img-fluid profile-image-pic  my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="nome"
                  required
                  value={user.nome}
                  onChange={trataCampo}
                  name="nome"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  required
                  value={user.senha}
                  onChange={trataCampo}
                  name="senha"
                  placeholder="Senha"
                />
              </div>

              <button
                type="submit"
                className="btn form-button px-5 mb-5 w-100 shadow rounded"
                onClick={logar}
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
