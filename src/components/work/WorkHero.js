import React from 'react'
import { ArrowDown } from '../../assets';
import '../../assets/styles/workStyles.css';

const WorkHero = (props) => {

    const { activateShowOthers } = props
    return (
        <>
            <section className={'workHeroContainer'}>
                <h2>Telling avant garde stories using visuals</h2>
                <div>
                    <img src={ArrowDown} alt='arrow' onClick={activateShowOthers} />
                </div>
            </section>
        </>

    )
}

export default WorkHero