import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

import { FaGithubSquare, FaAppStore } from 'react-icons/fa'


function Portfolio() {
    const [projects] = useState([
        {
            name: "SecondChance",
            repo: "https://github.com/Leman102/second-chance",
            deployedLink: "https://second-chance-e-commerce.herokuapp.com/"
        },
        {
            name: "Pet-hub",
            repo: "https://github.com/Leman102/pet-hub",
            deployedLink: "https://pets-projects.herokuapp.com/"
        },
        {
            name: "Artist-Music-Tour",
            repo: "https://github.com/Leman102/Artist_Music_Tour",
            deployedLink: "https://vinyldude8896.github.io/Artist_Music_Tour/"
        },
        {
            name: "Oh-Snap",
            repo: "https://github.com/Leman102/photo-port",
            deployedLink: "https://leman102.github.io/photo-port/"
        },
        {
            name: "Weather-App",
            repo: "https://github.com/Leman102/weather-dashboard",
            deployedLink: "https://leman102.github.io/weather-dashboard/"
        },
        {
            name: "run-buddy",
            repo: "https://github.com/Leman102/run-buddy",
            deployedLink: "https://leman102.github.io/run-buddy/"
        }, 
    ]);

    return (
        <div>
            <h1><b>Projects:</b></h1>
            <div id='portfolio-container' className='flex-row'>
                {projects.map((image) => (
                    <div>
                        <div className='flex-row space-between '>
                            <h2 className="mx-2">{capitalizeFirstLetter(image.name)}</h2>
                            <h2 className="mx-2">
                                <a href={image.repo} 
                                    rel="noreferrer" target="_blank" 
                                    alt="Github logo" 
                                >
                                    <FaGithubSquare/>
                                </a>
                            </h2>
                            <h2 className="mx-2">
                                <a href={image.deployedLink} 
                                    rel="noreferrer" target="_blank" 
                                    alt="App logo" 
                                >
                                    <FaAppStore/>
                                </a>
                            </h2>
                        </div>
                        <img
                            src={require(`../../assets/projects/${image.name}.png`).default}
                            alt={image.name}
                            className='img-thumbnail mx-1'
                            key={image.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;