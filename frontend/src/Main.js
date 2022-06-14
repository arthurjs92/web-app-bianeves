import React from 'react';
import Transver from './sections/main/secao-transver';
import Sobre from './sections/main/secao-sobre';
import Produtos from './sections/main/secao-produtos';
import Promocoes from './sections/main/secao-promocoes';
import BotaoFlutuante from './sections/main/botao-flutuante';

function Main() {
    return (
        <main className="">
            <Transver/>
            <Sobre/>
            <Produtos/>
            <Promocoes/>
            <BotaoFlutuante/>
        </main>
    );
}

export default Main;