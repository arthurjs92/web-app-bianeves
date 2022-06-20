import React from "react";
import Logo from "../../img/imagens-header/logo-principal.png";
import ImagemDestaque from "../../img/imagens-header/imagem-principal.jpeg";

function Destaque() {
  return (
    <section className="sessao-destaque">
      <div className="container">
        <div className="row">
          <div class="d-flex flex-wrap justify-content-center flex-row align-items-center">
            <div className="box-logo flex-column col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img src={Logo} className="img-responsive img-fluid d-block" alt="Subtítulo escrita Marcenaria Criativa"/>
              <h4 className="subtitulo">Marcenaria Criativa</h4>
            </div>
            <div className="box-imagem-marcenaria flex-column col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img
                src={ImagemDestaque}
                className="img-responsive img-fluid d-block" alt="Imagem da Bia traçando a linha de corte na madeira"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destaque;
