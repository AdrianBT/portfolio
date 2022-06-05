import React, { useEffect } from 'react'
import './About.css'
import Aos from "aos"
import "aos/dist/aos.css"
import aboutImage from '../assets/image2.png'



function About() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div data-aos="fade-right" className='about-header'>
            <h1 className='about-text'> About me </h1>
            <div className='about-container'>

                <h2 data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='about-paragraph'>Hi, My Name is Adrian B. I have a BS degree in Computer Science at Medgar Evers College. My fields of interest are software development, game development, and web development. I am proficient with Microsoft Office tools including : Excel, PowerPoint and Outlook.
                    I am also proficient in computer programming languages including : JavaScript, Python, HTML, CSS and SQL and I'm currently learning React, NodeJS, MongoDB and Express. Im quietly confident, naturally curoius, and perpetually working on improving my
                    craft one day at a time </h2>
                <img className='about-image' src={aboutImage} alt='spark' />
            </div>
        </div>


    )
}

export default About