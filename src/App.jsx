import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Prigra from "./projects/Prigra";
import Jarvis from "./projects/Jarvis";
import EsiWay from "./projects/Esiway";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      // Faire défiler la fenêtre vers le haut de la page
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [pathname]);

    return null;
  }
  return (
    
    <BrowserRouter>
    <ScrollToTop />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/prigra" element={<Prigra />} />
        <Route path="/projects/jarvis" element={<Jarvis />} />
        <Route path="/projects/esiway" element={<EsiWay />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

const Home = () => {
  
  return (
    
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
       
      <section id="work">
        {" "}
        <Works />
      </section>
      <div className="relative z-0">
        <section id="contact">
          <Contact />
        </section>
        <StarsCanvas />
      </div>
    </div>
  );
};
