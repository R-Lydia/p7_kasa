import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/Layout.css';

//function Layout() { 

const Layout = () => {
    return (
        <div className='body'>
            <div className='layout'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;