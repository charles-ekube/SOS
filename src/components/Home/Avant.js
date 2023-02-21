import React from 'react';
import '../../assets/styles/homeStyles.css';

const Avant = () => {
    return (
        <section className={'avantContainer'}>
            <p>AVANT-GARDE BRANDS</p>
            <marquee behavior="scroll" direction="left" scrollAmount='10'>AVANT-GARDE BRANDS</marquee>
        </section>
    )
}

export default Avant