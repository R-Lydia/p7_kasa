import React from 'react';
import Banner from '../components/Banner';
import bannerHome from '../assets/banner_home.png';

export default function Home() {
    document.title = 'Kasa - Accueil';
    return (
        <main className='main_home'>
            <Banner img={bannerHome} text='Chez vous, partout et ailleurs'/>
        </main>

    );
}