//WORK IN PROGGRESS

import React from "react";
//icon
// import { BsArrowUpRight } from "react-icons/bs";
//motion
// import { motion } from "framer-motion";
//variants
// import { fadeIn } from "../variants";

//services data
// const services = [
//   {
//     name: "UI/UX Desing",
//     description:
//       "ao;cinraicnar;oinc;orvinaro;vbrvubarv;unurlnfrucnra;coie;ociejc;nrvna;oeincae;oicne;oicncin",
//     link: "Learn More",
//   },
//   {
//     name: "Development",
//     description:
//       "ao;cinraicnar;oinc;orvinaro;vbrvubarv;unurlnfrucnra;coie;ociejc;nrvna;oeincae;oicne;oicncin",
//     link: "Learn More",
//   },
//   {
//     name: "Re-desing/Fix",
//     description:
//       "ao;cinraicnar;oinc;orvinaro;vbrvubarv;unurlnfrucnra;coie;ociejc;nrvna;oeincae;oicne;oicncin",
//     link: "Learn More",
//   },
// ];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">
              I'm a Freelance Front end Web dev... blah blah blah
            </h3>
            <button className="btn btn-sm">See my work</button>
          </div>
          {/* services */}
          <div>
            {/* service list */}
            <div>
              {/* Not working */}
              {/* {services.map((service, index) => {
                const {} = 
                return <div>service<div/>;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
