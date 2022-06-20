import React from "react";
import logoarc from "../../img/imagens-main/logo-formulario1.png";

function Promocoes() {
  return (
    <section className="sessao-promocoes">
      <div className="container">
        <div className="col col-sm-8 col-md-8 col-lg-6">
          <h2 className="titulo" id="sessao-form-promocoes">
            Lançamentos e <span className="titulo-destaque">promoções</span>
          </h2>
          <p>Quer conhecer mais sobre o Ateliê Bia Neves?</p>
          <p>
            Se inscreva e fique por dentro de todos os lançamentos e promoções
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-row align-items-start flex-wrap-reverse bg-color col-sm-10 col-md-10 col-lg-8 ">
        
        <div className="flex-column col-md-6 col-lg-6 ">
          <img src={logoarc} className="form-img img-fluid d-block"/>
        </div>

        <div className="flex-column col-md-6 col-lg-6 ">
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
