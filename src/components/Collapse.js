import React, { useState } from 'react';
import '../styles/components/Collapse.css';
import fleche from '../assets/fleche.svg';

function Collapse({title, description}) {
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
                // SI =true ---> afficher description
                open && <p className='collapse_description'>{description}</p>
            }
        </div>
    );
}

export default Collapse;