import React, { useState } from 'react';
import LetsTalk from '../components/Home/LetsTalk';
import WorkHero from '../components/work/WorkHero';
import WorkProjectsList from '../components/work/WorkProjectsList';
import Footer from '../widgets/Footer';


const WorkContent = (props) => {
    const [state, setState] = useState({
        showOthers: false
    });

    const activateShowOthers = () => {
        setState((prevState) => ({ ...prevState, showOthers: true }));
    };

    return (
        <>
            <WorkHero activateShowOthers={activateShowOthers} />
            <WorkProjectsList />
            <LetsTalk />
            <Footer />
        </>
    );
};


export default WorkContent;