import React, { useEffect } from 'react'
import './Project.css'
import Aos from "aos"
import "aos/dist/aos.css"



function Project() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

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
            <div className='card-header cardAnimation fade-right'>
                <h1 className='card-text'> Projects </h1>
                <div className='card-holder'>
                    <div className='card cardAnimation fade-bottom' >
                        <div className='card-content'>
                            <h2 className='card-title'> World clock</h2>
                            <p className='card-body'>A webste that provides different time zones</p>
                            <p className='card-body'> Javascript, React.js, HTML, CSS  </p>
                            <a href='#/' className='button'> Github </a>
                        </div>
                    </div>

                    <div className='card card2 '>
                        <div className='card-content'>
                            <h2 className='card-title'> Keanu Reeves </h2>
                            <p className='card-body'>A website about keanu reeves with links  </p>
                            <p className='card-body'> HTML, CSS </p>
                            <a href='#/' className='button'> Github </a>
                        </div>
                    </div>

                    <div className='card card3 '>
                        <div className='card-content'>
                            <h2 className='card-title'> Group project  </h2>
                            <p className='card-body'>A website with an anime api I created</p>
                            <p className='card-body'> Javascript, Json, HTML, CSS </p>
                            <a href='#/' className='button'> Github </a>
                        </div>
                    </div>



                </div>
            </div >

        </>
    )
}

export default Project