import React from 'react';
import LogoWhatsapp from '../../img/imagens-header/zap.png';

function Navbar() {
  return (
    <div className="navbar">
        <nav className="col-10 nav nav-pills nav-fill">
            <a className="nav-item nav-link logo-nav" href="#sessao-destaque">Bia Neves</a>
            <a className="nav-item nav-link" href="#sessao-inicial">Início</a>
            <a className="nav-item nav-link" href="#sessao-sobre">Sobre mim</a>
            <a className="nav-item nav-link" href="#sessao-produtos">Produtos</a>
            <a className="nav-item nav-link" href="#sessao-footer">Contatos</a>
            <a className="nav-item nav-link nav-link-ic active botao" href="#sessao-form-promocoes">Inscreva-se</a>
            <a href='https://wa.me/5534999143153?text=Desejo%20fazer%20um%20orçamento' target="_blank" rel="noopener noreferrer"><img src={LogoWhatsapp} className='logozap'></img></a>
        </nav>
    </div>
  );
}

export default Navbar;