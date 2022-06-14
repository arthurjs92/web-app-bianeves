import React from 'react';
import './css/style.css';
import Contatos from './sections/footer/contatos';
import RedesSociais from './sections/footer/redes-sociais';

function Footer() {
    return (
        <footer className="">
            <Contatos/>
            <RedesSociais/>
        </footer>
    );
}

export default Footer;