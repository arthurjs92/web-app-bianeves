import React from 'react';
import './css/style.css';
import Navbar from './sections/header/navbar';
import Destaque from './sections/header/destaque-inicial';


function Header() {
    return (
        <header className="">
            <Navbar/>
            <Destaque/>
        </header>
    );
}

export default Header;