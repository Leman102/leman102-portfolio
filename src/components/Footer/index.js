import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="flex-row ">
            <h2 className="mx-2">
                <a href="https://github.com/Leman102" 
                    rel="noreferrer" target="_blank" 
                    alt="Github logo" 
                >
                    <FaGithub/>
                </a>
            </h2>
            <h2 className="mx-2">
                <a href="https://www.linkedin.com/in/leonelpinzon"
                    rel="noreferrer" target="_blank"
                    alt="LinkedIn logo" 
                >
                    <FaLinkedin/>
                </a>
            </h2>
            <h2 className="mx-2">
                <a href="https://twitter.com/LeoMancera"
                    rel="noreferrer" target="_blank"
                    alt="Twitter logo" 
                >
                    <FaTwitter/>
                </a>
            </h2>
        </footer>
    )
}

export default Footer;