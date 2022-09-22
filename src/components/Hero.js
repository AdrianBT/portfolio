import React, { useEffect } from 'react'
import './Hero.css'
import heroImage from '../assets/image1-removebg.png'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"


function Hero() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className='hero-container'>
                <div className='hero-content'>
                    <h1 data-aos="slide-down" className='hero-header'> Hi I`m Adrian C Butler</h1>
                    <h2 data-aos="slide-down" className='hero-subheader'>A <strong className='strong'>Frontend developer</strong></h2>
                    <h2 data-aos="slide-down" className='hero-subheader'>and <strong className='strong'>UX & UI Designer</strong></h2>

                    <div className='hero-icons'>
                        <FaTwitter className='icon' title='not done yet' />
                        <FaInstagram className='icon'  title='not done yet' />
                        <FaLinkedin className='icon'  title='not done yet' />
                        <FaGithub className='icon'  title='not done yet' />
                    </div>

                </div>
                <img data-aos="fade-left" className='hero-image' src={heroImage} alt='person on desk' />
            </div>
        </>
    )
}
export default Hero