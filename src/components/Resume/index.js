import React from "react";

function Resume() {
    return (
        <section className="my-5">
            <div>
            <h1 id="resume">
                Resume
            </h1>
            <h3>
                Download my resume 
                <a href="https://docs.google.com/document/d/1RDfjCf0U_oAhaKCUwCT5aD_HyQUahShJ_2i8XTT4mSg/edit#heading=h.hj06txyot8v" rel="noreferrer" target="_blank"
                    alt="Resume"
                >
                here! 📄</a>
            </h3>
            </div>
            <div>
                <h2>
                    Front End proficiency 
                </h2>
                <ul>
                    <li>
                        HTML/CSS
                    </li>
                    <li>
                        JavaScript/jQuery
                    </li>
                    <li>
                        Frameworks
                    </li>
                    <li>
                        Responsive Design
                    </li>
                    <li>
                        Version Control/Git 
                    </li>
                    <li>
                        Web Performance 
                    </li>
                </ul>
                <h2>
                    Back End proficiency 
                </h2>
                <ul>
                    <li>
                        MongoDB 
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Node
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Handled API (CRUD)
                    </li>
                </ul>

            </div>
        </section>
    );
}

export default Resume;