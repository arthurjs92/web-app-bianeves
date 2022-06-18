import React from 'react';
import ImagemProdutos from '../../img/imagens-main/produtos.jpeg';

function Transver() {
  return (
    <div className="container sessao-transver ">
      <div className="row box-imagem-produto">
        <div className="col-6 imagem-principal-produtos">
          <img src={ImagemProdutos} className="img-responsive img-rounded"/>
        </div>
        <div className="col-6">
          <h2 className="titulo">O transver através das <spam className="titulo-destaque">transformações da natureza</spam></h2>
          <p>Em um mundo cada vez mais obcecado com velocidade, produção em massa e descarte, optamos por ficar do outro lado da moeda.</p>
        </div>
      </div>
      <div className="row box-video-producao">
        <div className="col-6">
          <p>No Ateliê Bia Neves, <spam className="frase-destaque">cada curva é moldada à mão </spam>
          para criar produtos que durarão<spam className="frase-destaque"> por toda a vida.</spam></p>
        </div>
        <div className="col-6 imagem-principal-produtos">
          {/* <iframe scr="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="video"/> */}
          <img src={ImagemProdutos} className="img-responsive img-rounded"/>
        </div>
      </div>
    </div>
  );
}

export default Transver;