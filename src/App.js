import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx'
import Technologies from './components/Technologies.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
