import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';


function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected,setAboutSelected] = useState(true)
  const [resumeSelected,setResumeSelected] = useState(false)
  const [portfolioSelected,setPortfolioSelected] = useState(false)

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {aboutSelected ? (
          <About></About>
        ):(
          <>

          </>
        )}
        {portfolioSelected ? (
          <Portfolio></Portfolio>
        ):(
          <>
          </>
        )}
        {contactSelected ? (
          <ContactForm></ContactForm>
          
        ) : (
          <>
            
          </>
        )}
        {resumeSelected ? (
          <Resume></Resume>
        ):(
          <>
          </>
        )}

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
