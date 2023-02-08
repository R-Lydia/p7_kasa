import React from 'react';
import '../styles/components/Rating.css';
import star_color from '../assets/star_color.svg';
import star_grey from '../assets/star_grey.svg';

function Rating ({rating}) {
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
