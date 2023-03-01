import React from 'react';
import Image from '../../assets/images/project.svg';

const WorkViewImagesContainer = () => {
    return (
        <section className={'workImagesContainer'}>
            <img src={Image} alt='image' />
            <img src={Image} alt='image' />
            <img src={Image} alt='image' />
        </section>
    )
}

export default WorkViewImagesContainer