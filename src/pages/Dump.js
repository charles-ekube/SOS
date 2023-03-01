import React, { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import NavBar from '../widgets/Navigation'
import DumpContent from './DumpContent'
import DumpView from './DumpView'
import WorkContent from './WorkContent'
import WorkView from './WorkView'

const Dump = (props) => {

    const [state, setState] = useState({
        showOthers: false
    })

    const activateShowOthers = () => {
        setState((prevState) => ({ ...prevState, showOthers: true }))
    }



    return (
        <>
            <NavBar bg={'#ffffff'} />
            <Routes>
                <Route path="/" element={<DumpContent />} />
                <Route path="/dumpView" element={<DumpView />} />
            </Routes>
            <Outlet />
        </>
    )
}

export default Dump