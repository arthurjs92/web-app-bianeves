import React from "react";
import logoarc from "../../img/imagens-main/logo-formulario.png";

function Promocoes() {
  return (
    <section className="section-promocoes">
      <div className="title-desc-center">
        <h2 className="titulo" id="sessao-form-promocoes">
          Lançamentos e <span className="titulo-destaque">promoções</span>
        </h2>
        <p>Quer conhecer mais sobre o Ateliê Bia Neves?</p>
        <p>
          Se inscreva e fique por dentro de todos os lançamentos e promoções
        </p>
      </div>

      <div className="d-flex justify-content-center flex-row align-items-center flex-wrap-reverse bg-color col-sm-12 col-md-12 col-lg-8 mb-3">
        <div className="flex-column">
          <img src={logoarc} className="form-img img-fluid d-block" />
        </div>
        <div className="flex-column">
          <form className="form-horizontal form-color col-xs-3">
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputNome"
                  placeholder="Nome"
                  required
                />
              </div>
            </div>
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  type="tel"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Telefone"
                  required
                />
              </div>
            </div>
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputCidade"
                  placeholder="Cidade"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default button-adjust">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Promocoes;
