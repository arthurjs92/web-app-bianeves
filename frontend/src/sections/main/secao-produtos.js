import React from "react";
import CompanyLogo from "../../img/imagens-main/logo2 - Bia Neves.png";
import LogoMadeira from "../../img/imagens-main/logoMadeira.png";
import Produto1 from "../../img/imagens-main/produto1.jpg";
import Produto2 from "../../img/imagens-main/produto2.jpg";
import Produto3 from "../../img/imagens-main/produto3.jpeg";
import Produto4 from "../../img/imagens-main/produto4.JPG";
import Produto5 from "../../img/imagens-main/produto5.jpg";
import Produto6 from "../../img/imagens-main/produto6.png";
import Produto7 from "../../img/imagens-main/produto7.jpg";
import Produto8 from "../../img/imagens-main/produto8.jpg";

function Produtos() {
  return (
    <section className="w-75 section-produtos">

      <div class="d-flex justify-content-center flex-row align-items-center flex-wrap div-margin">
        <div className="flex-column div-logo">
          <img src={CompanyLogo} alt="Logo Bia" />
        </div>
        <div className="flex-column title-desc w-50">
          <h1>
            Conheça alguns dos nossos{" "}
            <span className="color-name">produtos</span>
          </h1>
          <p>
            Esperamos que você ame e aprecie nossos produtos tanto em seu uso
            quanto na forma em que foi criada.
          </p>
        </div>
        <div className="flex-column">
          <img src={LogoMadeira} className="img-responsive"/>
        </div>
      </div>

      <div className="container">
        <div className="row no-gutters">
          <div className="col">
            <img
              src={Produto1}
              className="img-responsive img-rounded width-img"
              alt="Produtos"
            />
          </div>
          <div className="col ">
            <img
              src={Produto2}
              className="img-responsive img-rounded width-img"
              alt="Produtos"
            />
          </div>
          <div className="col">
            <img
              src={Produto3}
              className="img-responsive img-rounded width-img"
              alt="Produtos"
            />
          </div>
          <div className="col">
            <img
              src={Produto4}
              className="img-responsive img-rounded width-img"
              alt="Produtos"
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col">
            <img
              src={Produto5}
              className="img-responsive img-rounded width-img"
              alt="Produtos"
            />
          </div>
          <div className="col">
            <img
              src={Produto6}
              className="img-responsive img-rounded width-img"
              alt="Produtos"
            />
          </div>
          <div className="col">
            <img
              src={Produto7}
              className="img-responsive img-rounded width-img"
              alt="Produtos"
            />
          </div>
          <div className="col">
            <img
              src={Produto8}
              className="img-responsive img-rounded width-img"
              alt="Produtos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produtos;
