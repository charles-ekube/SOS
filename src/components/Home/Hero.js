import React from 'react';
import { ArrowDown } from '../../assets';
import '../../assets/styles/homeStyles.css';

const Hero = (props) => {

    const { activateShowOthers } = props
    return (
        <section className={'heroContainer'}>
            <div className={'heroLeft'}>
                <h2>
                    BUILDING FOR BRANDS WHO DARE TO BE DIFFERENT
                </h2>
            </div>
            <div className={'heroRight'}>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nisl at enim mi quisque egestas urna consequat adipiscing mi. Netus sit ut ante.
                </p>
            </div>
            <div>
                <img src={ArrowDown} alt='arrow' onClick={activateShowOthers} />
            </div>
        </section>
    )
}

export default Hero