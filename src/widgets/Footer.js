import React from 'react';
import ArrowUp from '../assets/images/arrowUp.svg';

const Footer = () => {
    return (
        <section className={'footerContainer'}>
            <div>
                <p>©2022</p>
            </div>
            <div>
                <div>
                    <p>IN</p>
                    <p>LI</p>
                </div>
                <div>
                    <p>SOS.STDIO@GMAIL.COM</p>
                </div>
                <div>
                    <img src={ArrowUp} alt={'icon'} />
                </div>
            </div>

        </section>
    )
}

export default Footer