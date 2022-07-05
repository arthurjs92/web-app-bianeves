import React from 'react';
import './css/style.css';
import Navbar from './sections/header/Navbar';
import Destaque from './sections/header/Destaque';

function Header() {
    return (
        <header>
            <Navbar/>
            <Destaque/>
        </header>
    );
}

export default Header;