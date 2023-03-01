import React from 'react';
import Image from '../../assets/images/project.svg';

const DumpViewHero = () => {
    return (
        <section className={'workViewHeroContainer'} >
            <div>
                <h2 style={{ color: "#000000" }}>UNITY FEST</h2>
                <p style={{ color: "#000000" }}>BRAND IDENTITY, SERVICE DESIGN</p>
            </div>
            <div>
                <img src={Image} alt={'image'} />
            </div>
        </section>
    )
}

export default DumpViewHero