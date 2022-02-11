import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Contacto from './components/Contacto.jsx';
import NavBar from './components/NavBar.jsx';
import Presentacion from './components/Presentacion.jsx';
import Proyectos from './components/Proyectos.jsx';
import Footer from './components/Footer.jsx'
import Tecnologias from './components/Tecnologias.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Presentacion />
        <Tecnologias />
        <Proyectos />
        <Contacto />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
