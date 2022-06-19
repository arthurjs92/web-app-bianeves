import React from 'react';
import ImagemProdutos from '../../img/imagens-main/produtos.jpeg';

function Transver() {
  return (
    <div className="container sessao-transver ">
      <div className="row box-imagem-produto">
        <div className="col-sm-6 imagem-principal-produtos">
          <img src={ImagemProdutos} className="img-responsive img-rounded"/>
        </div>
        <div className="col-sm-6">
          <h2 className="titulo" id="sessao-inicial">O transver através das <spam className="titulo-destaque">transformações da natureza</spam></h2>
          <p>Em um mundo cada vez mais obcecado com velocidade, produção em massa e descarte, optamos por ficar do outro lado da moeda.</p>
        </div>
      </div>
      <div className="row box-video-producao">
        <div className="col-sm-6">
          <p>No Ateliê Bia Neves, <spam className="frase-destaque">cada curva é moldada à mão </spam>
          para criar produtos que durarão<spam className="frase-destaque"> por toda a vida.</spam></p>
        </div>
        <div className="col-sm-6 video-producao">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/A-BSv43V7kM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Transver;