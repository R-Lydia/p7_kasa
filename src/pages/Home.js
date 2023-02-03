import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import bannerHome from '../assets/banner_home.png';
import Logements from '../data/logements.json';
import '../styles/pages/Home.css';

export default function Home() {
    document.title = 'Kasa - Accueil';
    return (
        <main className='main_home'>
            <Banner img={bannerHome} text='Chez vous, partout et ailleurs'/>
            <div className='card_home'>
                {Logements.map((logement) => 
                    <Link key={logement.id} to={`/Logement/${logement.id}`}>
                        <Card key={logement.id} 
                            id={logement.id} 
                            img={logement.cover} 
                            title={logement.title} />
                    </Link>
                )}
            </div>
        </main>
    );
}