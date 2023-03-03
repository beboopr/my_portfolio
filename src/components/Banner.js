import React from "react";
//Image
import Image from "../assets/avatar.svg";
//Icons
import { FagGithub, FaLinkedin, FaMedium } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//Motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            <h1>
              Hi I'm EDGAR <span>DAVILA</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold
              uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Gamer 🎮",
                  2000,
                  "Car enthusiast 🏎️",
                  2000,
                  "Dog Lover 🐾",
                  2000,
                  "Developer 👨🏻‍💻",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
              <p></p>
            </div>
          </div>
          {/* Image */}
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
