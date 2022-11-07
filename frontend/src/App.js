import React from 'react'
import { BrowserRouter } from "react-router-dom";

import Contact from 'components/Contact.jsx';
import NavBar from 'components/NavBar.jsx';
import Presentation from 'components/Presentation.jsx';
import Projects from 'components/Projects.jsx';
import Footer from 'components/Footer.jsx'
import Technologies from 'components/Technologies.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Presentation />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
