import React from 'react';
import Transver from './sections/main/SecaoTransver';
import Sobre from './sections/main/SecaoSobre';
import Produtos from './sections/main/SecaoProdutos';
import Promocoes from './sections/main/SecaoPromocoes';
import BotaoFlutuante from './sections/main/BotaoFlutuante';

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