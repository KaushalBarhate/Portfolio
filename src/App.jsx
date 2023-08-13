import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Works2d,
  About2d,
  Contact2d,
} from "./components";

const App = () => {
  const isMobile = window.innerWidth < 900;
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {!isMobile ? <About /> : <About2d />}

        <Experience />
        <Tech />
        {!isMobile ? <Works /> : <Works2d />}
        <div className="relative z-0">
          {!isMobile ? (
            <>
              <Contact />
              <StarsCanvas />
            </>
          ) : (
            <>
              <Contact2d />
            </>
          )}
          <p className="mt-2 text-white flex justify-center items-center mx-auto ">
            <a
              href="https://www.linkedin.com/in/kaushalbarhate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./Linkedin.png"
                alt="linkedin"
                className="w-10 h-10 "
              />
            </a>
            <a
              href="https://github.com/KaushalBarhate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./github.png" alt="github" className="w-10 h-10 ml-2" />
            </a>
            <a
              href="mailto:barhate.kaushal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./gmail.png" alt="email" className="w-10 h-10 ml-2" />
            </a>
            <br></br>
          </p>
          <br></br>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
