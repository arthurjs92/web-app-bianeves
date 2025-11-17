import React from "react";
import LogoFooter from "../../img/imagens-footer/logo-footer.png";
import GmailImg from "../../img/imagens-footer/gmail.png";
import IgImg from "../../img/imagens-footer/instagram.png";
import WhatsAppImg from "../../img/imagens-footer/whatsapp.png";

function Contatos() {
  return (
    <footer className="pt-5 pb-4 footer">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 mx-auto mt-3" id="sessao-footer">
            <p className="text-light mb-4 font-weight-bold d-none d-md-block">
              E-mail
            </p>
            <p className="text-light mb-4 font-weight-bold d-none d-md-block">
              Telefone
            </p>
            <p className="text-light mb-4 font-weight-bold d-none d-md-block">
              Local
            </p>
            <div className="collum ml-5 d-flex align-items-md-center">
              <div className="col-md-d col-lg-4 ">
                <a href="mailto:biancapneves@gmail.com">
                  <img src={GmailImg} className="img-fluid" />
                </a>
              </div>
              <div className="col-md-d col-lg-4 ">
                <a href="https://instagram.com/bia.pneves?igshid=YmMyMTA2M2Y=" target="_blank">
                  <img src={IgImg} className="img-fluid" />
                </a>
              </div>
              <div className="col-md-d col-lg-4 ">
                <a href="https://wa.me/5534999143153?text=Olá,%20desejo%20fazer%20um%20orçamento" target="_blank">
                  <img src={WhatsAppImg} className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 mx-auto mt-3">
            <p className="text-light mb-4 font-weight-bold">
              biancapneves@gmail.com
            </p>
            <p className="text-light mb-4 font-weight-bold ">
              (34) 9 9914-3153
            </p>
            <p className="text-light mb-4 font-weight-bold ">
              Uberlândia | MG
            </p>
          </div>
          <div className="col-md-4 col-lg-3 mx-auto mt-3">
            <img src={LogoFooter} className="img-fluid d-block" />
          </div>
          <hr className="text-light mb-4" />
          <div className="col-md-7 col-lg-8">
            <p className="font-footer">© Bia Neves Marcenaria Criativa, 2022. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contatos;
