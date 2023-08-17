import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => (
  <div className="xs:w-[250px] w-full bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-card">
    <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
  </div>
);

const About2d = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a software developer with deep proficiency in JavaScript, React, Node.js, and blockchain technologies. My portfolio includes building decentralized applications with web3 integration, utilizing machine learning algorithms for data analysis, and crafting augmented reality experiences.I thrive on technical challenges and am committed to delivering scalable and efficient solutions. Let's collaborate on your next cutting-edge project!
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About2d, "about");
