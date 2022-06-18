import React from "react";
import LogoFooter from "../../img/imagens-footer/logo-footer2.png";
import GmailImg from "../../img/imagens-footer/gmail.png";
import IgImg from "../../img/imagens-footer/instagram.png";
import WhatsAppImg from "../../img/imagens-footer/whatsapp.png";

function Contatos() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold ">
              E-mail
            </h5>
            <h5 className="mb-4 font-weight-bold ">
              Telefone
            </h5>
            <h5 className="mb-4 font-weight-bold ">
              Local
            </h5>
            <div className="row ml-5">
              <div className="col-md-d col-lg-4 ">
                <img src={GmailImg} className="img-fluid" />
              </div>
              <div className="col-md-d col-lg-4 ">
                <img src={IgImg} className="img-fluid" />
              </div>
              <div className="col-md-d col-lg-4 ">
                <img src={WhatsAppImg} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">
              biancapneves@gmail.com
            </h5>
            <h5 className="mb-4 font-weight-bold ">
              (34) 9 9914-3153
            </h5>
            <h5 className="mb-4 font-weight-bold ">
              Uberlândia | MG
            </h5>
          </div>
          <div className="col-md-5 col-lg-4 mx-auto mt-3">
            <img src={LogoFooter} className="img-fluid d-block" />
          </div>
          <hr className="mb-4" />
          <div className="col-md-7 col-lg-8">
            <p>© Bia Neves Marcenaria Criativa, 2022. Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contatos;
