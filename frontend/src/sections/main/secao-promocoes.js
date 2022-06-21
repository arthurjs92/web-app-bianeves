import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoarc from "../../img/imagens-main/logo-formulario1.png";
import * as api from "../../services/Endpoints";

function Promocoes() {
  const estadoInicial = {
    nome: "",
    cidade: "",
    email: "",
    telefone: "",
  };
  const [dados, setDados] = useState(estadoInicial);

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const EnviarDados = () => {
    console.log(dados);
    api
      .create(dados)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
      useNavigate("/thankyou",{ replace:true })
  };

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
          <img src={logoarc} className="form-img img-fluid d-block" />
        </div>

        <div className="flex-column col-md-6 col-lg-6 ">
          <div className="form-horizontal form-color col-xs-3">
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputNome"
                  placeholder="Nome"
                  required
                  value={dados.nome}
                  onChange={trataCampo}
                  name="nome"
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
                  value={dados.telefone}
                  onChange={trataCampo}
                  name="telefone"
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
                  value={dados.email}
                  onChange={trataCampo}
                  name="email"
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
                  value={dados.cidade}
                  onChange={trataCampo}
                  name="cidade"
                />
              </div>
              <div className="terms">
                <label>
                  Eu li e concordo com os termos de uso.
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
            </div>
            <div className="form-group form-btn">
              <button
                className="btn btn-default button-adjust"
                onClick={EnviarDados}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promocoes;
