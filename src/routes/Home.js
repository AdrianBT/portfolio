import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import './Home.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">

                <Hero />
                <About />
                <Project />
                <Contact />
            </div>
        </>
    )
}

export default Home