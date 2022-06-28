import React, { useState } from "react";
import logoarc from "../../img/imagens-main/logo-formulario1.png";
import * as api from "../../services/Endpoints";
import { useForm } from "react-hook-form";

function Promocoes() {

  const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    api
      .create(dados)
      .then((response) => {
        console.log(response);
        window.location.href = "/thankyou";
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const estadoInicial = {
    nome: "",
    email: "",
    telefone: "",
  };

  const [dados, setDados] = useState(estadoInicial);

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-horizontal form-color col-xs-3"
          >
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  {...register("nome", {required: true, minLength: 2, maxLength: 25})}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  {...register("telefone", {required: true, minLength: 11, maxLength: 13, pattern: /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/})}
                  type="tel"
                  />
              </div>
            </div>
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/})}
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="terms">
                <label>
                  Eu li e concordo com os <u>termos de uso.</u>
                  <input
                    {...register('checkbox', { required: true })}
                    type="checkbox"
                    className="form-check-input"
                  />
                  <span></span>
                </label>
              </div>
            </div>
            <div className="form-group form-btn">
              <input type="submit"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Promocoes;
