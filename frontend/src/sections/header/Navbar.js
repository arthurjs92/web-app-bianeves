import React from 'react';

function Navbar() {
  const handleAnchorClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="div-nav">
        <nav className="container navbar navbar-expand-lg navbar-light bg-light nav nav-pills nav-fill">
          <div className="container-fluid">

              <a 
                className="navbar-brand logo-nav nav-link-logo" 
                href="#sessao-destaque"
                onClick={(e) => handleAnchorClick(e, 'sessao-destaque')}
              >
                  Bia Neves
              </a>

              <button className="navbar-toggler cursor-pointer" type="button" data-bs-toggle="collapse" data-bs-target="#menu-ancora" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">
                  </span>
              </button>

              <div className="container collapse navbar-collapse" id="menu-ancora">
                  <ul className="navbar-nav mb-lg-0">
                      <li className="nav-item">
                        <a 
                          className="nav-link" 
                          href="#sessao-inicial"
                          onClick={(e) => handleAnchorClick(e, 'sessao-inicial')}
                        >
                          Início
                        </a>
                      </li>
                      <li className="nav-item">
                        <a 
                          className="nav-link" 
                          href="#sessao-sobre"
                          onClick={(e) => handleAnchorClick(e, 'sessao-sobre')}
                        >
                          Sobre mim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a 
                          className="nav-link" 
                          href="#sessao-produtos"
                          onClick={(e) => handleAnchorClick(e, 'sessao-produtos')}
                        >
                          Produtos
                        </a>
                      </li>
                      <li className="nav-item">
                        <a 
                          className="nav-link" 
                          href="#sessao-footer"
                          onClick={(e) => handleAnchorClick(e, 'sessao-footer')}
                        >
                          Contatos
                        </a>
                      </li>
                      <li className="nav-item botao">
                        <a 
                          className="nav-link nav-link-ic active" 
                          href="#sessao-form-promocoes"
                          onClick={(e) => handleAnchorClick(e, 'sessao-form-promocoes')}
                        >
                          Inscreva-se
                        </a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;