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
const Home = () => {
  const [renderStars, setRanderStars] = useState([]);
  const mousex = useMotionValue(0);
  const mousey = useMotionValue(0);

  const x = useSpring(mousex);
  const y = useSpring(mousey);

  useEffect(() => {
    const track = (e) => {
      mousex.set(e.clientX);
      mousey.set(e.clientY);
    };
    console.log(Math.random());
    window.addEventListener("mousemove", track);
    return () => window.removeEventListener("mousemove", track);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return; // disable on mobile

    // const interval = setInterval(() => {
    //   setRanderStars((prev) => [...prev, Date.now()]);
    // }, 6800); // random timing

    // return () => clearInterval(interval);
  }, []);

  const background = useMotionTemplate`
    radial-gradient(
    500px at ${x}px ${y}px,
    rgba(255,255,255,0.15),
    transparent 60%), #020617`;
  return (
    <div className="home">
      {[0, 1, 3, 4, 5].map((i) => (
        <ShotingStars key={i} />
      ))}
      <div className="HomeCont">
        <Navbar />
        <LinksBar />
        <HeroText />
        <HeroImage />
      </div>
      <div className="HomeCont"></div>
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
