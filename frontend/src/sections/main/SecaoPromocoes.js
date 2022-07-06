import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as api from "../../services/Endpoints";
import logoarc from "../../img/imagens-main/logo-formulario1.png";

const telefoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/gm;

const formValidation = yup
  .object({
    nome: yup
      .string()
      .min(2, "Nome inválido.")
      .max(50, "Nome inválido.")
      .required("O campo é obrigatório."),
    telefone: yup
      .string()
      .min(11, "Telefone inválido.")
      .max(15, "Telefone inválido.")
      .matches(telefoneRegex, "Telefone inválido.")
      .required("O campo é obrigatório."),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("O campo é obrigatório."),
    checkbox: yup
      .boolean()
      .oneOf([true], "Necessário aceitar os termos de uso!"),
  })
  .required();

export default function Promocoes() {
  const estadoInicial = {
    nome: "",
    email: "",
    telefone: "",
    checkbox: false,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  const [dados, setDados] = useState(estadoInicial);

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const onSubmit = (data) => {
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

  const acessaPolitica = () => {
    window.open("/politica-de-privacidade","_blank");
  }

  const acessaTermos = () => {
    window.open("/termos-de-uso","_blank");
  }

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
          <img src={logoarc} className="form-img img-fluid d-block" alt="" />
        </div>

        <div className="flex-column col-md-6 col-lg-6 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-horizontal form-color col-xs-3"
          >
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  {...register("nome")}
                  placeholder="Nome"
                  value={dados.nome}
                  onChange={trataCampo}
                  className="form-control"
                />
                <p>{errors.nome?.message}</p>
              </div>
            </div>
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  {...register("telefone")}
                  placeholder="Telefone"
                  value={dados.telefone}
                  onChange={trataCampo}
                  className="form-control"
                />
                <p>{errors.telefone?.message}</p>
              </div>
            </div>
            <div className="form-group row padding-form">
              <div className="col form-group">
                <input
                  {...register("email")}
                  placeholder="E-mail"
                  value={dados.email}
                  onChange={trataCampo}
                  className="form-control"
                />
                <p>{errors.email?.message}</p>
              </div>
            </div>
            <div className="form-group row padding-form">
              <div className="terms">
                <label>
                  Eu li e concordo com a <a onClick={(acessaPolitica)} className="link-politica-termos">política de privacidade</a> e <a onClick={(acessaTermos)} className="link-politica-termos">termos de uso.</a>
                  <input
                    {...register("checkbox")}
                    value={dados.checkbox}
                    onClick={() => {
                      setDados({ ...dados, checkbox: true });
                    }}
                    type="checkbox"
                  />
                  <span></span>
                  <p>{errors.checkbox?.message}</p>
                </label>
              </div>
            </div>
            <div className="text-center">
              <input type="submit" className="form-group form-btn btn btn-group-toggle" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
