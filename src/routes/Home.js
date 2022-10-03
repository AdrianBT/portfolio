import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Skills from '../components/Skills'
import './Home.css'

const Home = () => {
    
    return (
        <>
            <Navbar />


            <div className="home">
                

                <Hero />
                <About />
                <Skills />
                <Project />
                <Contact />
                


            </div>
        </>
    )
}

export default Home