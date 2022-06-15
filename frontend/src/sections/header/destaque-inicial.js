import React from 'react';
import Logo from '../../img/imagens-header/logo-principal.png';
import ImagemDestaque from '../../img/imagens-header/imagem-principal.jpeg';

function Destaque() {
  return (
    <div className="d-flex align-items-center sessao-destaque">
        <div className="box-logo col-6">
            <img src={Logo}/>
            <h4 className="subtitulo">Marcenaria Criativa</h4>
        </div>
        <div className="box-imagem-marcenaria col-6">
          <img src={ImagemDestaque}/>
        </div>
    </div>
  );
}

export default Destaque;