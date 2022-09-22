import React from 'react'
import './Project.css'




function Project() {
    function cardAnimation() {
        var cards = document.querySelectorAll(".cardAnimation")
        for (var i = 0; i < cards.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = cards[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                cards[i].classList.add("active");
            } else {
                cards[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", cardAnimation);
    return (
        <>
            <div id='projects' className='card-header cardAnimation fade-right'>
                <h1 className='card-text'> Projects </h1>
                <div className='card-holder'>
                    <div className='card cardAnimation fade-bottom' >
                        <div className='card-content'>
                            <h2 className='card-title'> Instagram clone</h2>
                            <p className='card-body'>A website that allows users to sign in and upload content</p>
                            <p className='card-body'> Javascript, HTML, Tailwind CSS, React.js, Firebase, NextAuth, Recoil  </p>
                            <a href='https://github.com/AdrianBT/Website-Mockup' className='button'> Github </a>
                        </div>
                    </div>

                    <div className='card card2 '>
                        <div className='card-content'>
                            <h2 className='card-title'> Keanu Reeves </h2>
                            <p className='card-body'>A website about keanu reeves with links  </p>
                            <p className='card-body'> HTML, CSS </p>
                            <a href='https://github.com/AdrianBT/Website-Mockup' className='button'> Github </a>
                        </div>
                    </div>

                    <div className='card card3 '>
                        <div className='card-content'>
                            <h2 className='card-title'> Anime website  </h2>
                            <p className='card-body'>A website with an anime API by Jikan</p>
                            <p className='card-body'> Javascript, Json, HTML, CSS </p>
                            <a href='https://github.com/AdrianBT/Final-Project-' className='button'> Github </a>
                        </div>
                    </div>



                </div>
            </div >

        </>
    )
}

export default Project