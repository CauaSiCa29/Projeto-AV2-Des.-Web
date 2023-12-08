import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <header>
            <div className="logo">
                <img src="/img/Pokemon.jpeg" alt="Logo Pokemon" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pesquisa">Pesquisa</Link></li>
                    <li><Link to="/listagem">Listagem</Link></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;
