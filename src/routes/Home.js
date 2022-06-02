import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Project from '../components/Project'


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Contact />
        </div>
    )
}

export default Home