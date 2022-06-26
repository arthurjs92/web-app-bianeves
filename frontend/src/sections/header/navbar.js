import React from 'react';

function Navbar() {
  return (
    <div className="div-nav">
        <nav className="container navbar navbar-expand-lg navbar-light bg-light nav nav-pills nav-fill">
          <div className="container-fluid">

              <a className="navbar-brand logo-nav" href="#sessao-destaque">
                  Bia Neves
              </a>

              <button className="navbar-toggler cursor-pointer" type="button" data-bs-toggle="collapse" data-bs-target="#menu-ancora" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">
                  </span>
              </button>

              <div className="container collapse navbar-collapse" id="menu-ancora">
                  <ul className="navbar-nav mb-lg-0">
                      <li className="nav-item"><a className="nav-link" href="#sessao-inicial">Início</a></li>
                      <li className="nav-item"><a className="nav-link" href="#sessao-sobre">Sobre mim</a></li>
                      <li className="nav-item"><a className="nav-link" href="#sessao-produtos">Produtos</a></li>
                      <li className="nav-item"><a className="nav-link" href="#sessao-footer">Contatos</a></li>
                      <li className="nav-item botao"><a className="nav-link nav-link-ic active" href="#sessao-form-promocoes">Inscreva-se</a></li>
                  </ul>
              </div>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;