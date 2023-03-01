import React from 'react';
import Image from '../../assets/images/project.svg';

const WorkViewHero = () => {
    return (
        <section className={'workViewHeroContainer'}>
            <div>
                <h2>UNITY FEST</h2>
                <p>BRAND IDENTITY, SERVICE DESIGN</p>
            </div>
            <div>
                <img src={Image} alt={'image'} />
            </div>
        </section>
    )
}

export default WorkViewHero