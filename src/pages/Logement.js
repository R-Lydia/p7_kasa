import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Logements from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import '../styles/pages/Logement.css';

export default function Logement() {

    document.title = 'Kasa - Logement';

    let { id } = useParams() ;
    const logement = Logements.find((logement) => logement.id === id);

    if(typeof logement !== "undefined") {

        return (
            <main className='main_logement'>
                <Slideshow images={logement.pictures}> </Slideshow>
                <div className='logement_presentation'>
                    <div className='presentation_location'>
                        <h1 className='logement_title'>{logement.title}</h1>
                        <p className='logement_location'>{logement.location}</p>
                        <div className='logement_tags'>
                            {logement.tags.map(tag =>
                                <Tag key={tag} tag={tag} />
                            )} 
                        </div>
                    </div>
                    <div className='presentation_host'>
                        
                    </div>
                </div>




            </main>
        )
    } else {
        return <Navigate to="/404"/>
    }
};