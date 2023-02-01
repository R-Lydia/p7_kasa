import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/LOGO.svg';
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <header>
            <img src={Logo} className='logo' alt='Kasa' />
            <nav className='nav_menu'>
                    <NavLink className='nav_link' to='/'>Accueil</NavLink>   
                    <NavLink className='nav_link' to='/apropos'>A Propos</NavLink>
            </nav>
        </header>
    );
};


/*
                <ul>
                    <li>
                        <NavLink className='nav_link' to='/'>Accueil</NavLink>   
                    </li>
                    <li>
                        <NavLink className='nav_link' to='/apropos'>A Propos</NavLink>
                    </li>
                </ul>
*/