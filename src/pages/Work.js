import React, { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import NavBar from '../widgets/Navigation'
import WorkContent from './WorkContent'
import WorkView from './WorkView'

const Work = (props) => {

    const [state, setState] = useState({
        showOthers: false
    })

    const activateShowOthers = () => {
        setState((prevState) => ({ ...prevState, showOthers: true }))
    }



    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<WorkContent />} />
                <Route path="/workView" element={<WorkView />} />
            </Routes>
            <Outlet />
        </>
    )
}

export default Work