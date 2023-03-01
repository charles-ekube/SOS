import React, { useState } from 'react';
import DumpHero from '../components/dump/DumpHero';
import DumpProjectsList from '../components/dump/DumpProjectList';
import LetsTalk from '../components/Home/LetsTalk';
import Footer from '../widgets/Footer';


const DumpContent = (props) => {
    const [state, setState] = useState({
        showOthers: false
    });

    const activateShowOthers = () => {
        setState((prevState) => ({ ...prevState, showOthers: true }));
    };

    return (
        <>
            <DumpHero activateShowOthers={activateShowOthers} />
            <DumpProjectsList />
            <LetsTalk color={'#000000'} bg={'#FFFFFF'} />
            <Footer bg={'#ffffff'} color={'#000000'} />
        </>
    );
};


export default DumpContent;