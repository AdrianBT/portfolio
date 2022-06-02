import React from 'react'
import './Project.css'


function Project() {
    return (
        <>
            <div className='card-header'>
                <h1 className='card-text'> Projects </h1>
                <div className='card-holder'>
                    <div className='card'>
                        <div className='card-content'>
                            <h2 className='card-title'> World clock</h2>
                            <p className='card-body'>A webste that provides different time zones</p>
                            <p className='card-body'> Javascript, React.js, HTML, CSS  </p>
                            <a href='#/' className='button'> Github </a>
                        </div>
                    </div>

                    <div className='card card2'>
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
            </div>

        </>
    )
}

export default Project