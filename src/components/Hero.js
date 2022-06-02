import React from 'react'
import './Hero.css'
import heroImage from '../assets/image1-removebg.png'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


function Hero() {
    return (
        <>
            <div className='hero-container'>
                <div className='hero-content'>
                    <h1 className='hero-header'> Hi I`m Adrian C Butler</h1>
                    <h2 className='hero-subheader'>A <strong className='strong'>Frontend developer</strong></h2>
                    <h2 className='hero-subheader'>and <strong className='strong'>UX & UI Designer</strong></h2>

                    <div className='hero-icons'>
                        <FaTwitter className='icon' />
                        <FaInstagram className='icon' />
                        <FaLinkedin className='icon' />
                        <FaGithub className='icon' />
                    </div>

                </div>
                <img className='hero-image' src={heroImage} alt='person on desk' />
            </div>
        </>
    )
}
export default Hero