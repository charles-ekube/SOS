import React from 'react';
import UGO from '../../assets/images/ugo.svg';

const AboutProfilePicture = () => {
    return (
        <section className={'aboutProfilePictureContainer'}>
            <img src={UGO} alt='frisky' />
            <div>
                <p>Ugochukwu Ikeme </p>
                <p>Brand Designer</p>
            </div>
        </section>
    )
}

export default AboutProfilePicture