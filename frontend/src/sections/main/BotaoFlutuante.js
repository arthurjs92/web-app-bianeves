import React from "react";
import Whatsapp from "../../img/imagens-header/whatsapp.png";

function BotaoFlutuante() {
  return (
    <div className="whats">
      <a
        href="https://wa.me/5534999143153?text=Olá,%20desejo%20fazer%20um%20orçamento"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img
          src={Whatsapp}
          width="75"
          alt="Fale conosco pelo Whatsapp"
          title="Fale conosco pelo Whatsapp"
        />
      </a>
    </div>
  );
}

export default BotaoFlutuante;