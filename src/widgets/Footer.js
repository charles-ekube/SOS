import React from 'react';
import ArrowUp from '../assets/images/arrowUp.svg';
import ArrowUpBlack from '../assets/images/arrowUpBlack.svg';

const Footer = (props) => {
    return (
        <section className={'footerContainer'} style={{ background: props.bg }}>
            <div>
                <p style={{ color: props.color }}>©2022</p>
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <p style={{ color: props.color, }}>IN</p>
                    <p style={{ color: props.color, }}>LI</p>
                </div>
                <div>
                    <p style={{ color: props.color }}>SOS.STDIO@GMAIL.COM</p>
                </div>
                <div>
                    {props.bg === '#ffffff' ?
                        <img src={ArrowUpBlack} alt={'icon'} /> :
                        <img src={ArrowUp} alt={'icon'} />}
                </div>
            </div>

        </section>
    )
}

export default Footer