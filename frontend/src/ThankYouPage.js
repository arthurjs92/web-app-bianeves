import React from 'react';
import './css/style.css';
import Logo from './img/imagens-header/logo-principal.png';
import LogoInstagram from './img/imagens-main/logo-instagram.png';

function ThankYouPage() {
  return (
    <div className="thankyou-page">
        <div className="container">
            <img src={Logo} className="img-responsive img-fluid d-block" alt="Logo Bia Neves Marcenaria"/>
        </div>
        <div className="container box-thankyou">
            <h4>Agradecemos pelo interesse nos produtos do <span style={{fontWeight: 'bold'}}>Ateliê Bia Neves</span>!</h4>
            <h4 className="frase-destaque">Retornaremos o contato o mais breve possível.</h4>
        </div>
        <div className="container box-redessociais">
            <a 
              href="https://instagram.com/bia.pneves?igshid=YmMyMTA2M2Y=" 
              target="_blank" 
              rel="noreferrer"
            >
              <img src={LogoInstagram} alt="Instagram Bia Neves"/>
            </a>
            <p>Nos acompanhe pelo Instagram! <a 
              href="https://instagram.com/bia.pneves?igshid=YmMyMTA2M2Y=" 
              target="_blank" 
              rel="noreferrer"
              className="frase-destaque"
            >
              @bia.pneves
            </a></p>
        </div>
  </div>
  );
}

export default ThankYouPage;