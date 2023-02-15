// importer useState de React, les img fleche et le css du composant
import React, { useState } from 'react';
import fleche_prev from '../assets/fleche_prev.svg';
import fleche_next from '../assets/fleche_next.svg';
import '../styles/components/Slideshow.css';

function Slideshow({images}) {
    // créer hook d'état
    const [current, setCurrent] = useState(0);
    const length = images.length;
    // gérer image suivante
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    };
    // gérer image précédente
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    };

    return (
        <section className='slideshow'>
            <img src={images[current]} className='slide_img' alt={images.title} />
            <img src={fleche_prev} className={images.length === 1 ? 'fleche_prevDisabled' : 'fleche_prev'} onClick={prevSlide} alt='Précédente' />
            <div className={images.length === 1 ? 'slideIndexDisabled' : 'slideIndex'}>
                {current + 1}/{images.length}
            </div>
            <img src={fleche_next} className={images.length === 1 ? 'fleche_nextDisabled' : 'fleche_next'} onClick={nextSlide} alt='Suivante' />
        </section>
    )
}

export default Slideshow;