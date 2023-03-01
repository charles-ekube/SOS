import React, { useState } from 'react'
import AboutApprochArticle from '../components/About/AboutApprochArticle'
import AboutHero from '../components/About/AboutHero'
import AboutProfilePicture from '../components/About/AboutProfilePicture'
import AboutServices from '../components/About/AboutServices'
import LetsTalk from '../components/Home/LetsTalk'
import Footer from '../widgets/Footer'
import NavBar from '../widgets/Navigation'

const About = () => {

    const [state, setState] = useState({
        showOthers: false
    })

    const activateShowOthers = () => {
        setState((prevState) => ({ ...prevState, showOthers: true }))
    }

    return (
        <>
            <NavBar />
            <AboutHero activateShowOthers={activateShowOthers} />
            {state.showOthers && <>
                <AboutApprochArticle />
                <AboutServices />
                <AboutProfilePicture />
                <LetsTalk />
                <Footer />
            </>}
        </>
    )
}

export default About