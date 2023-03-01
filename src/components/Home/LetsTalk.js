import React from 'react';
import '../../assets/styles/homeStyles.css';

const LetsTalk = (props) => {
    return (
        <section className={'homeContactContainer'} style={{ background: props.bg }}>
            <p style={{ color: props.color }}>HAVE A PROJECT IN MIND?</p>
            <p style={{ color: props.color }}>LET'S TALK</p>
            <p style={{ color: props.color }}>sos.dsgn.gmail.com</p>
        </section>
    )
}

export default LetsTalk