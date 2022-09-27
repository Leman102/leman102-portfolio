import React from "react";

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        portfolioSelected,
        setPortfolioSelected,
    } = props
    return (
        <header className="flex-row px-2 " >
            <h2>
                <a data-testid="link" href='/' >
                    Leman102
                </a>
            </h2>
            <nav>
                <ul className="flex-row" >
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                            <span onClick={() => {setAboutSelected(true); setContactSelected(false);setResumeSelected(false);setPortfolioSelected(false)}} >
                            About me </span>
                    </li>
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {setPortfolioSelected(true);setContactSelected(false); setAboutSelected(false);setResumeSelected(false)}} >
                            Portfolio</span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {setContactSelected(true); setAboutSelected(false);setResumeSelected(false);setPortfolioSelected(false)}} >
                            Contact</span>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <span onClick={() => {setResumeSelected(true);setPortfolioSelected(false);setContactSelected(false); setAboutSelected(false)}} >
                            Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;