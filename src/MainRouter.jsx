import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import Contact from './Contact.jsx'
import Layout from './Layout.jsx'

const MainRouter = () => {
    return (
    <>
        <Layout/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
    )
}

export default MainRouter