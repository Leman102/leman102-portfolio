import React from "react";

function Resume() {
    return (
        <section className="ju resume">
            <div className="my-5">
                <h1>
                    <b>Resume 📄</b>
                </h1>
                <h3>
                    Download my resume ' 
                    <a  href="https://docs.google.com/document/d/1RDfjCf0U_oAhaKCUwCT5aD_HyQUahShJ_2i8XTT4mSg/edit#heading=h.hj06txyot8v" 
                        rel="noreferrer" target="_blank"
                        alt="Resume"
                    >
                    here!</a>'
                </h3>
            </div>
            <div>
                <h2>
                    <b>Front End Proficiency </b>
                </h2>
                <h5>
                    HTML/CSS
                </h5>
                <h5>
                    JavaScript/jQuery
                </h5>
                <h5>
                    Frameworks
                </h5>
                <h5>
                    Responsive Design
                </h5>
                <h5>
                    Version Control/Git 
                </h5>
                <h5>
                    Web Performance
                </h5>

                <h2>
                    <b>Back End Proficiency</b> 
                </h2>
                <h5>
                    MongoDB
                </h5>
                <h5>
                    Express
                </h5>
                <h5>
                    React
                </h5>
                <h5>
                    Node
                </h5>
                <h5>
                    MySQL
                </h5>
                <h5>
                    Handled API (CRUD)
                </h5>
            </div>
        </section>
    );
}

export default Resume;