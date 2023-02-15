// importer React, Outlet de React Router, les composants Navbar et Footer et le ccs du composant
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/components/Layout.css';

// créer une navbar (header) et un footer sur chaque page 
const Layout = () => {
    return (
        <div className='body'>
            <div className='layout'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};

export default Layout;