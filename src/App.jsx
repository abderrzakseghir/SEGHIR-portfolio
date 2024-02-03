import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
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
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <BrowserRouter>
    
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
      <div className="">
      <StarsCanvas />
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
        
      </div>
    </div>
  );
};
