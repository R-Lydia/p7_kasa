import React from 'react';
import '../styles/components/Card.css';

function Card({id, img, title}) {
    return(
        <div className='card' id={id}>
            <img className='card_img' src={img} alt='card-fond'/>
            <div className='card_filter'></div>
            <h3 className='card_title'>{title}</h3>
        </div>
    );
}

export default Card;