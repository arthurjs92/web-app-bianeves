import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
        <nav className="col-10 nav nav-pills nav-fill">
            <div className="logo-nav">
                <a className="nav-item nav-link" href="#sessao-destaque">Bia Neves</a>
            </div>
            <a className="nav-item nav-link" href="#sessao-inicial">Início</a>
            <a className="nav-item nav-link" href="#sessao-sobre">Sobre mim</a>
            <a className="nav-item nav-link" href="#sessao-produtos">Produtos</a>
            <a className="nav-item nav-link" href="#sessao-footer">Contatos</a>
            <a className="nav-item nav-link active botao" href="#sessao-form-promocoes">Inscreva-se</a>
        </nav>
    </div>
  );
}

export default Navbar;