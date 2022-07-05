import React from "react";
import CompanyLogo from "../../img/imagens-main/logo-bia-3.png";
import LogoMadeira from "../../img/imagens-main/logoMadeira.png";
import Produto1 from "../../img/imagens-main/produto1.jpg";
import Produto2 from "../../img/imagens-main/produto2.jpg";
import Produto3 from "../../img/imagens-main/produto3.jpeg";
import Produto4 from "../../img/imagens-main/produto4.png";
import Produto5 from "../../img/imagens-main/produto5.jpg";
import Produto6 from "../../img/imagens-main/produto6.png";
import Produto7 from "../../img/imagens-main/produto7.jpg";
import Produto8 from "../../img/imagens-main/produto8.jpg";

function Produtos() {
  return (
    <section className="sessao-produtos">

      <div className="container d-flex  flex-row  flex-wrap div-margin">
        <div className="row align-items-center">
          <div className="flex-column div-logo w-25 d-none d-md-block col-md-2 col-lg-3">
            <img src={CompanyLogo} className="img-responsive img-rounded img-fluid" alt="Logo Bia" />
          </div>
          <div className="flex-column w-75 title-desc col-xs-12 col-sm-12 col-md-10 col-lg-9">
              <div className="d-flex flex-wrap">
                <div className="col align-self-end ">
                  <h2 className="titulo titulo-produtos" id="sessao-produtos">
                  Conheça alguns dos nossos{" "}
                  <span className="frase-destaque">produtos</span>
                  </h2>
                </div>
                <div className="box-madeira align-self-end">
                  <img src={LogoMadeira} className="img-responsive" alt=""/>
                </div>
              </div>
              <div className="justify-content-start">
                <p className="mt-3">
                  Esperamos que você ame e aprecie nossos produtos tanto em seu uso
                  quanto na forma em que foi criada.
                </p>
              </div>

          </div>
        </div>
        
      </div>

      <div className="container d-flex flex-wrap col-xs-12 box-produtos justify-content-center">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <img
              src={Produto1}
              className="img-responsive img-rounded img-fluid width-img"
              alt="Produtos"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 ">
            <img
              src={Produto2}
              className="img-responsive img-rounded img-fluid width-img"
              alt="Produtos"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <img
              src={Produto3}
              className="img-responsive img-rounded img-fluid width-img"
              alt="Produtos"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <img
              src={Produto4}
              className="img-responsive img-rounded img-fluid width-img"
              alt="Produtos"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs- col-sm-12 col-md-6 col-lg-3">
            <img
              src={Produto5}
              className="img-responsive img-rounded img-fluid width-img"
              alt="Produtos"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <img
              src={Produto6}
              className="img-responsive img-rounded img-fluid width-img"
              alt="Produtos"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <img
              src={Produto7}
              className="img-responsive img-rounded img-fluid width-img"
              alt="Produtos"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <img
              src={Produto8}
              className="img-responsive img-rounded img-fluid width-img"
              alt="Produtos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produtos;
