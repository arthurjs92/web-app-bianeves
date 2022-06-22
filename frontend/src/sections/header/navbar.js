import React from 'react';

function Navbar() {
  return (
    <div className="navbar" id="navbar">
        <nav className="col-10 nav nav-pills nav-fill">
            <a className="nav-item nav-link logo-nav" href="#sessao-destaque">Bia Neves</a>
            <a className="nav-item nav-link" href="#sessao-inicial">Início</a>
            <a className="nav-item nav-link" href="#sessao-sobre">Sobre mim</a>
            <a className="nav-item nav-link" href="#sessao-produtos">Produtos</a>
            <a className="nav-item nav-link" href="#sessao-footer">Contatos</a>
            <a className="nav-item nav-link nav-link-ic active botao" href="#sessao-form-promocoes">Inscreva-se</a>
        </nav>
    </div>
  );
}

export default Navbar;