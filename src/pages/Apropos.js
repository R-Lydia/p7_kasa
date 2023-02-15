// importer React, les composants Banner et Collapse, img Banner Apropos et le css de la page
import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import bannerApropos from '../assets/banner_apropos.png';
import '../styles/pages/Apropos.css';

export default function Apropos() {
    // modifier nom de la page dans l'onglet du navigateur
    document.title = 'Kasa - A propos';

    // retourner une bannière pour la page A propos + 4 collapses
    return (
        <main className='main_apropos'>
            <Banner bannerClass='banner banner_apropos' img={bannerApropos} />
            <div className='apropos_collapses'>
                <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
        </main>
    )
};