import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const isMobile = window.innerWidth < 900;
const BallCanvas2d  = ({ icon }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={icon} alt="Icon" style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? (
            <BallCanvas2d icon={technology.icon} />
          ) : (
          <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
