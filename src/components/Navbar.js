// importer React, Navlink de React Router, l'img du logo et le ccs du composant
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LOGO.svg';
import '../styles/components/Navbar.css';

// créer l'en-tête des pages 
export default function Navbar() {
    return (
        <header>
            <img src={Logo} className='logo' alt='Kasa' />
            <nav className='nav_menu'>
                <NavLink className='nav_link' to='/'>Accueil</NavLink>   
                <NavLink className='nav_link' to='/apropos'>A Propos</NavLink>
            </nav>
        </header>
    )
};