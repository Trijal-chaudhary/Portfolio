import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AboutText.css";
import { useNavigate } from "react-router-dom";
const AboutText = () => {
  const [hover, sethover] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="AbTexOuter">
        <h1>Who I am and how it all started.</h1>
        <div className="AbPhases">
          <div className="ImgPhaseCont">
            <img src="images/harsh10.png" alt="" />
          </div>
          <div className="phaseTextCont">
            <h2>Curiosity Phase</h2>
            <p>
              From an early stage, I was deeply curious about creativity and
              technology, always driven by the urge to create something new and
              engaging. I spent a lot of time playing games on my old laptop,
              and that curiosity gradually turned into a desire to understand
              how those games worked behind the scenes.
            </p>
          </div>
        </div>
        <div className="AbPhases">
          <div className="ImgPhaseCont">
            <img src="images/harsh15.png" alt="" />
          </div>
          <div className="phaseTextCont">
            <h2>Awareness Phase</h2>
            <p>
              During my teenage years, my curiosity evolved into understanding.
              I began exploring how technology actually works and learned to use
              tools like MS Office and SketchUp. This phase sparked a strong
              interest in design and structure, especially in creating house
              layouts, which I often designed for my relatives.
            </p>
          </div>
        </div>
        <div className="AbPhases">
          <div className="ImgPhaseCont">
            <img src="images/harsh20.png" alt="" />
          </div>
          <div className="phaseTextCont">
            <h2>Expansion Phase</h2>
            <p>
              Motivated by my growing interest in technology, I pursued
              engineering and started learning programming languages and
              development frameworks, including Java and Full Stack Development
              (MERN). Over time, I built multiple projects and continue to
              strengthen my skills in Data Structures & Algorithms and
              full-stack development, while actively participating in
              hackathons.
            </p>
          </div>
        </div>
      </div>
      <div
        className="GetToKnowMe"
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        <motion.div
          initial={{
            scale: 1,
          }}
          animate={hover ? { scale: 100 } : {}}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="DotScalable"
        ></motion.div>
        <div onClick={() => navigate("/about")}>
          <motion.h2 animate={hover ? { x: 5, scale: 1.05 } : {}}>
            Get To Know Me ➜
          </motion.h2>
        </div>
      </div>
    </>
  );
};

export default AboutText;
