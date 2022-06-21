import React from 'react';
import './css/style.css';
import Logo from './img/imagens-header/logo-principal.png';

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center titulo mt-5">Clientes</h2>
          <div className="text-center frase-destaque mb-5">Landing Page</div>

          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">

              <div className="text-center">
                <img src={Logo} className="img-fluid profile-image-pic  my-3" width="200px" alt="profile" />
              </div>

              <div className="mb-3">
                <input type="email" className="form-control" id="Username" aria-describedby="emailHelp"
                  placeholder="E-mail" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="Senha" required />
              </div>

              <button type="submit" className="btn form-button px-5 mb-5 w-100 shadow rounded">Entrar</button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;