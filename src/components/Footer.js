// importer React, l'img du logo et le css du composant
import React from 'react';
import Logo from '../assets/Logo_footer.svg';
import '../styles/components/Footer.css';

// créer le bas de page
function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt='Kasa' />
            <p className='footer_copyright'>
            © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
};

export default Footer;