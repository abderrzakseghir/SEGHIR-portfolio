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
import ProjectDetails from "./projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
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
