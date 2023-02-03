import React from 'react';
import '../styles/components/Banner.css';

function Banner({img, text}) {
    return (
        <div className='banner'>
            <img className='banner_img' src={img} alt='banner-paysage'/>
            <div className='banner_filter'></div>
            <p className='banner_txt'>{text}</p>
        </div>
    );
}

export default Banner;