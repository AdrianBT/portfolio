import React, { useEffect } from 'react'
import './Skills.css'
import Aos from "aos"
import "aos/dist/aos.css"

function Skills() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

        <div data-aos='fade-down' class="skills-container" id='skills'>
            <div class="row">
                <h1 class="skills-title"> Skills</h1>
                <div class="skills-list">
                    <div class="skills">
                        <figure class="skills-img--wrapper">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                                alt="Html Logo" class="skills-img" />
                        </figure>
                        <span class="skills-name">HTML</span>
                    </div>
                    <div class="skills">
                        <figure class="skills-img--wrapper">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="CSS Logo"
                                class="skills-img" />
                        </figure>
                        <span class="skills-name">CSS</span>
                    </div>
                    <div class="skills">
                        <figure class="skills-img--wrapper">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="JavaScript Logo"
                                class="skills-img" />
                        </figure>
                        <span class="skills-name">JavaScript</span>
                    </div>
                    <div class="skills">
                        <figure class="skills-img--wrapper">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
                                alt="TypeScript Logo" class="skills-img" />
                        </figure>
                        <span class="skills-name">TypeScript</span>
                    </div>
                    <div class="skills">
                        <figure class="skills-img--wrapper">
                            <img src="https://cdn.iconscout.com/icon/free/png-128/sql-file-2917473-2420443.png" alt="SQL Logo"
                                class="skills-img" />
                        </figure>
                        <span class="skills-name">SQL</span>
                    </div>
                    <div class="skills">
                        <figure class="skills-img--wrapper">
                            <img src="https://cdn.iconscout.com/icon/free/png-128/figma-3521426-2944870.png" alt="Figma Logo"
                                class="skills-img" />
                        </figure>
                        <span class="skills-name">Figma</span>
                    </div>
                    <div class="skills">
                        <figure class="skills-img--wrapper">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png" alt="React Logo"
                                class="skills-img" />
                        </figure>
                        <span class="skills-name">React</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Skills