import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<Prigra />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="">
        <Navbar />
        <Hero />
      </div>
      <section id="about">
        <About />
      </section>

      <Experience />
      <Tech />
      <section id="work">
        {" "}
        <Works />{" "}
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
