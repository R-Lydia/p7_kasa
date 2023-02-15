// importer React et le css du composant
import React from 'react';
import '../styles/components/Banner.css';

// créer la bannière sur les pages d'accueil et A propos 
// réutilisable et modifiable grâce aux props img, text, bannerClass
function Banner({img, text, bannerClass}) {
    return (
        <div className={bannerClass}>
            <img className='banner_img' src={img} alt='banner-paysage'/>
            <div className='banner_filter'></div>
            <p className='banner_txt'>{text}</p>
        </div>
    )
};

export default Banner;