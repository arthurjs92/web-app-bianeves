import React from "react";
import ImagemBia from "../../img/imagens-main/bia.jpeg";
import ImagemArvore from "../../img/imagens-main/arvore.png";

function Sobre() {
  return (
    <section>
      <div className="sessao-sobre">

        <div className="container d-flex flex-wrap">
          <div>
            <img
              src={ImagemArvore}
              className="img-responsive img-rounded img-fluid"
              alt=""
            />
          </div>
          <div className="col align-self-end titulo-bia-desc">
            <h2 className="titulo container titulo-sobre-bia" id="sessao-sobre">
              Sobre a <span className="titulo-destaque">Bia</span>
            </h2>
            <p className="mt-4">
              “Designer, arte educadora, marceneira e
              <br />
              <span className="frase-destaque">
                amante da natureza e suas minúcias."
              </span>
            </p>
          </div>
        </div>

        <div className="container d-flex flex-wrap">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="box-frase">
              <p>
                "Inspirada nas sutilezas da natureza busco minhas inspirações e
                matéria – prima,<span className="frase-destaque"> para criar peças bonitas e originais, com um toque fresco e contemporâneo.”</span>
              </p>
            </div>
          </div>

          <div className="flex-column col-xs-12 col-sm-12 col-md-10 col-lg-6 imagem-bia">
            <img
              src={ImagemBia}
              className="img-responsive img-rounded img-fluid"
              alt=""
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sobre;
