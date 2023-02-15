// importer React, React Router, les composants Banner et Card, img Banner home, fichier json et le css de la page
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import bannerHome from '../assets/banner_home.png';
import Logements from '../data/logements.json';
import '../styles/pages/Home.css';

export default function Home() {
    // modifier le nom de la page dans l'onglet du navigateur
    document.title = 'Kasa - Accueil';

    // retourner une bannière pour la page Home
    // récupérer les données de logements.json pour créer une card grâce à l'ID + lien vers page Logement
    return (
        <main className='main_home'>
            <Banner bannerClass='banner banner_home' img={bannerHome} text='Chez vous, partout et ailleurs'/>
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
    )
}