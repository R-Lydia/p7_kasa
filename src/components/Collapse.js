// importer useState de React, l'img fleche et le css du composant
import React, { useState } from 'react';
import fleche from '../assets/fleche.svg';
import '../styles/components/Collapse.css';

// créer les collapses sur pages A propos et Logement
function Collapse({title, content}) {
    // créer hook d'état
    const [open, setOpen] = useState(false);
    return (
        <div className='collapse'>
            <div className='collapse_header'>
                <h2 className='collapse_title'>{title}</h2>
                <div className={`collapse_fleche ${open}`} onClick={() => setOpen(!open)}>
                    <img src={fleche} alt="Cliquer pour voir la description" />
                </div>
            </div>
            {
                // =true ---> afficher contenu description
                open && <div className='collapse_content'>{content}</div>
            }
        </div>
    )
};

export default Collapse;