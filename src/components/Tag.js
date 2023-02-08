import React from 'react';
import '../styles/components/Tag.css';

function Tag ({tag}) {
    return (
        <span className='tag'>
            {tag}
        </span>
    )
}

export default Tag;
