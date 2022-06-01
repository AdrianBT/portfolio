import React from 'react'
import './About.css'
import aboutImage from '../assets/image2.png'


function About() {
    return (
        <>
            <div>
                <h1 className='about-header'> About me </h1>
            </div>
            <div className='about-container'>

                <h2 className='about-paragraph'>Hi, My Name is Adrian B. I have a BS degree in Computer Science at Medgar Evers College. My fields of interest are software development, game development, and web development. I am proficient with Microsoft Office tools including : Excel, PowerPoint and Outlook.
                    I am also proficient in computer programming languages including : JavaScript, Python, HTML, CSS and SQL and I'm currently learning React, NodeJS, MongoDB and Express. Im quietly confident, naturally curoius, and perpetually working on improving my
                    craft one day at a time </h2>
                <img className='about-image' src={aboutImage} alt='spark' />
            </div>
        </>
    )
}

export default About