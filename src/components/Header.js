import React from 'react';
import './Header.css'

export const Header = () => {
    return(
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

                <a href="/" className="logo d-flex align-items-center me-auto">
                    <img src="./../../public/assets/img/logo.png" alt=""/>
                        <h1 className="sitename">Ibagué Vende</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="/#hero" className="">Inicio</a></li>
                        <li><a href="/#about">Vendedores</a></li>
                        <li><a href="/#features">Productos</a></li>
                        <li><a href="/#services">Servicios</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>
        </header>
    );
}