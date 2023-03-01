import React from 'react'
import { ArrowDown } from '../../assets';
import '../../assets/styles/workStyles.css';

const DumpHero = (props) => {

    const { activateShowOthers } = props
    return (
        <>
            <section className={'workHeroContainer'} style={{ background: "#ffffff" }}>
                <h2 style={{ color: "#000000" }}>Telling avant garde stories using visuals</h2>
                <div>
                    <img src={ArrowDown} alt='arrow' onClick={activateShowOthers} />
                </div>
            </section>
        </>

    )
}

export default DumpHero