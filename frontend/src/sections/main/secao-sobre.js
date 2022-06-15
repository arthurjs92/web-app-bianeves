import React from "react";
import ImagemBia from "../../img/imagens-main/bia.jpeg";
import ImagemArvore from "../../img/imagens-main/arvore.png";

function Sobre() {
  return (
    <div className="sessao-sobre">
      <h2 className="titulo">
        Sobre a <spam className="titulo-destaque">Bia</spam>
      </h2>

      <div className="container d-flex">
        <div className="col-6">
          <div className="d-flex box-container">
            <div className="col-1">
              <img src={ImagemArvore} />
            </div>
            <div className="col-5 box-frase">
              <p>“Designer, arte educadora, marceneira e{" "}<spam className="frase-destaque">
                  amante da natureza e suas minúcias.</spam>
              </p>
            </div>
          </div>
          <div className="box-frase">
            <p>
              Inspirada nas sutilezas da natureza busco minhas inspirações e
              matéria – prima, para criar peças bonitas e originais, com um
              toque fresco e contemporâneo.”
            </p>
          </div>
        </div>
        <div className="col-6 imagem-bia">
          <div>
            <img src={ImagemBia} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
