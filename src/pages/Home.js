import React, { useState } from 'react'
import Avant from '../components/Home/Avant'
import Hero from '../components/Home/Hero'
import LetsTalk from '../components/Home/LetsTalk'
import ProjectsList from '../components/Home/ProjectsList'
import Footer from '../widgets/Footer'
import NavBar from '../widgets/Navigation'

const Home = () => {
    const [state, setState] = useState({
        showOthers: false
    })

    const activateShowOthers = () => {
        setState((prevState) => ({ ...prevState, showOthers: true }))
    }
    return (
        <main style={{ height: '100%' }}>
            <NavBar />
            <Hero activateShowOthers={activateShowOthers} />
            {state.showOthers && <>
                <ProjectsList />
                <Avant />
                <LetsTalk />
                <Footer />
            </>}

        </main>
    )
}

export default Home