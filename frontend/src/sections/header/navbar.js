import React from 'react';

function Navbar() {
  return (
    <div className="container navbar">
        <nav className="col-10 nav nav-pills nav-fill">
            <div className="logo-nav">
                <a className="nav-item nav-link" href="#">Bia Neves</a>
            </div>
            <a className="nav-item nav-link" href="#">Início</a>
            <a className="nav-item nav-link" href="#">Sobre mim</a>
            <a className="nav-item nav-link" href="#">Produtos</a>
            <a className="nav-item nav-link" href="#">Contatos</a>
            <a className="nav-item nav-link active botao" href="#">Inscreva-se</a>
        </nav>
    </div>
  );
}

export default Navbar;