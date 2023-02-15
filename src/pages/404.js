// importer React, Link de React Router et le css du composant
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/404.css';

export default function Error() {
    // modifier nom de la page dans l'onglet du navigateur
    document.title = 'Kasa - Page introuvable';
    return (
        <main className='main_error'>
            <h1 className='error_title'>404</h1>
            <p className='error_text'>Oups! La page que <br/> vous demandez n'existe pas.</p>
            <Link className='error_backhome' to='/'>Retourner sur la page d'accueil</Link>
        </main>
    )
};