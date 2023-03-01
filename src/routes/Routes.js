import React from 'react';
import { Routes, Route } from "react-router-dom"
import About from '../pages/About';
import Contact from '../pages/Contact';
import Dump from '../pages/Dump';
import Home from '../pages/Home';
import Work from '../pages/Work';

const RoutesContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="work/*" element={<Work />} />
            <Route path="dump/*" element={<Dump />} />
        </Routes>
    )
}

export default RoutesContainer