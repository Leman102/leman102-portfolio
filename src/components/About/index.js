import React from "react";
import profileImage from "../../assets/background/pic1.png"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">
                Hello There! I am Leonel Mancera Pinzon
            </h1>
            <div className="intro-container">
                <img id="profile-pic"  src={profileImage} className="my-2 mx-2"  alt="profile" />
                <h5 className="my-2 mx-2" >
                    Analytically minded person with more than 5 years of experience
                    collaborating with cross-functional teams and ensuring the
                    accuracy and integrity around data and actionable insights.
                </h5>
            </div>
        </section>

    );
}

export default About;