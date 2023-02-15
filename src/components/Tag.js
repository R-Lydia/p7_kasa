// importer React et le css du composant
import React from 'react';
import '../styles/components/Tag.css';

// créer tag
function Tag ({tag}) {
    return (
        <span className='tag'>
            {tag}
        </span>
    )
}

export default Tag;
