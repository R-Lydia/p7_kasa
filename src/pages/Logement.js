// importer React, React Router, le fichier json, les composants et le css de la page
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Logements from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import '../styles/pages/Logement.css';


export default function Logement() {
    // modifier nom de la page dans l'onglet du navigateur
    document.title = 'Kasa - Logement';

    // récupérer l'ID dans l'URL + trouver le logement avec méthode find
    let { id } = useParams() ;
    const logement = Logements.find((logement) => logement.id === id);

    // SI le logement est trouvé, retourner les élements de la page et ses composants
    if(typeof logement !== 'undefined') {

        return (
            <main className='main_logement'>
                <Slideshow images={logement.pictures} />
                <div className='logement_presentation'>
                    <div className='presentation_left'>
                        <h1 className='logement_title'>{logement.title}</h1>
                        <p className='logement_location'>{logement.location}</p>
                        <div className='logement_tags'>
                            {logement.tags.map(tag =>
                                <Tag key={tag} tag={tag} />
                            )} 
                        </div>
                    </div>
                    <div className='presentation_right'>
                        <div className='logement_host'>
                            <span className='logement_hostName'>{logement.host.name}</span>
                            <img src={logement.host.picture} className='logement_hostPicture' alt='' />
                        </div>
                        <Rating rating={logement.rating} />
                    </div>
                </div>

                <div className='logement_collapses'>
                    <div className='collapse_description' >
                        <Collapse title={'Description'} content= {logement.description} />
                    </div>
                    <div className='collapse_equipment' >
                        <Collapse title={'Équipements'} content= {logement.equipments.map((equipments, index) => (
                            <p className='equipments_list' key={index}>
                                {equipments}
                            </p>
                        ))}
                        />
                    </div>
                </div>
            </main>
        ) 
    // SINON rediriger vers la page d'erreur
    } else {
        return <Navigate to="/404" />
    }
};