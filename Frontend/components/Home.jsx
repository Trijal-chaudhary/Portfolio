import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./Home.css";
import ShotingStars from "./Shotingstars/ShotingStars";
import Navbar from "./Navbar/Navbar";
import LinksBar from "./LinksBar/LinksBar";
import HeroText from "./Texts/HeroText/HeroText";
import HeroImage from "./HeroImage/HeroImage";
import AboutText from "./About/AboutText/AboutText";
import AboutImage from "./About/AboutImage/AboutImage";
import SkillsText from "./Skills/SkillsText/SkillsText";
import SkillsImage from "./Skills/SkillsImage/SkillsImage";
import WorldTy from "./TechnologysUsed/Project1/WorldTy";
import WorldTycoon from "./Projects/WorldTycoon/WorldTycoon";
import PlayItText from "./PlayItText/PlayItText";
import LocalConnectImage from "./Projects/LocalConnect/LocalConnectImage";
import LocalConnect from "./Projects/LocalConnect/LocalConnect";
import PravdhanImage from "./Projects/Pravdhan/PravdhanImage";
import Pravdhan from "./Projects/Pravdhan/Pravdhan";
import OtherProjects from "./Projects/OtherProjects/OtherProjects";
import ContactMe from "./ContactMe/ContactMe";
const Home = () => {
  const [renderStars, setRanderStars] = useState([]);
  const mousex = useMotionValue(0);
  const mousey = useMotionValue(0);
  const [currSection, setCurrSection] = useState(null);
  const x = useSpring(mousex);
  const y = useSpring(mousey);
  const world = [
    "React.js",
    "Node.js",
    "JavaScript",
    "Mongoose",
    "CSS",
    "Express.js",
    "Socket.io",
  ];
  const Prav = [
    "EJS",
    "Node.js",
    "JavaScript",
    "Mongoose",
    "CSS",
    "Express.js",
    "Geolocation",
  ];
  useEffect(() => {
    const track = (e) => {
      mousex.set(e.clientX);
      mousey.set(e.clientY);
    };
    console.log(Math.random());
    window.addEventListener("mousemove", track);
    return () => window.removeEventListener("mousemove", track);
  }, []);

  const ScrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((ele) => {
          if (ele.isIntersecting) {
            setCurrSection(ele.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  const background = useMotionTemplate`
    radial-gradient(
    500px at ${x}px ${y}px,
    rgba(255,255,255,0.15),
    transparent 60%), #020617`;
  return (
    <div className="home">
      <Navbar currSection={currSection} ScrollToSection={ScrollToSection} />

      {[0, 1, 3, 4, 5].map((i) => (
        <ShotingStars key={i} />
      ))}
      <section id="Home" className="HomeCont section">
        <LinksBar />
        <HeroText />
        <HeroImage />
      </section>
      <section id="About" className="HomeCont section">
        <AboutImage />
        <AboutText />
      </section>
      <section id="Skills" className="HomeCont section">
        <SkillsText />
        <SkillsImage />
        <LinksBar />
      </section>
      <section id="Projects" className="HomeCont section">
        <img className="ImageProject1" src="Project/WorldLogo.png" alt="" />
        {/* <h1 className="Project1">World Tycoon</h1> */}
        <img className="Project1ImageLap" src="Project/project1.png" alt="" />
        <WorldTy tech={world} />
        <WorldTycoon />
        <PlayItText />
      </section>
      <section id="Projects" className="HomeCont section">
        <img
          className="LocalConnectLogo"
          src="Project/LocalConnect/logo.png"
          alt=""
        />
        <LocalConnectImage />
        <WorldTy tech={world} />
        <LocalConnect />
        <PlayItText />
      </section>
      <section id="Projects" className="HomeCont section">
        <img
          className="LocalConnectLogo"
          src="Project/Pravdhan/logo.png"
          alt=""
        />
        <PravdhanImage />
        <PlayItText />
        <WorldTy tech={Prav} />
        <Pravdhan />
      </section>
      <section id="MyProjects" className="HomeCont section">
        <OtherProjects MyPro={currSection} />
      </section>
      <section id="ContactMe" className="HomeCont section">
        <ContactMe />
        {/* <LinksBar /> */}
      </section>
      <motion.div
        className="back"
        style={{
          background,
          pointerEvents: "none",
        }}
      ></motion.div>
    </div>
  );
};

export default Home;
