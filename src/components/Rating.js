// importer React, les img star et le css du composant
import React from 'react';
import star_color from '../assets/star_color.svg';
import star_grey from '../assets/star_grey.svg';
import '../styles/components/Rating.css';

// créer la notation du logement
function Rating ({rating}) {
    // créer tableau du nombre d'étoiles
    const nbStars =[1, 2, 3, 4, 5];
    return (   
        <div className='logement_rating'>
            {nbStars.map((star) =>
                rating >= star ? (
                    <img key={star.toString()} className='rating_star' src={star_color} alt='pink star' />
                ) : (
                    <img key={star.toString()} className='rating_star' src={star_grey} alt='empty star' />
                )
            )}
        </div>
    )
}

export default Rating;
