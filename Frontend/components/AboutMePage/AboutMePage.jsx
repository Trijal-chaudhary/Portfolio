import React, { useEffect, useRef } from "react";
import "./AboutMePage.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import ShotingStars from "../Shotingstars/ShotingStars";
const AboutMePage = () => {
  const mousex = useMotionValue(0);
  const mousey = useMotionValue(0);
  const x = useSpring(mousex);
  const y = useSpring(mousey);
  useEffect(() => {
    const track = (e) => {
      mousex.set(e.clientX);
      mousey.set(e.clientY);
    };
    window.addEventListener("mousemove", track);
    return () => window.removeEventListener("mousemove", track);
  }, []);
  const background = useMotionTemplate`
    radial-gradient(
    500px at ${x}px ${y}px,
    rgba(255,255,255,0.15),
    transparent 60%), #020617`;
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const bar = document.getElementById("progressBar");
    const section = targetRef.current;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();

      const sectionHeight = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), sectionHeight);

      const progress = scrolled / sectionHeight;
      bar.style.height = `${progress * 100}%`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="AboutPageOuterMain" ref={targetRef}>
      {[0, 1, 3, 4, 5].map((i) => (
        <ShotingStars key={i} />
      ))}
      {/* <div className="contentAboutMeCont"> */}
      <div className="outerBar">
        <div className="innerBar" id="progressBar"></div>
      </div>
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

export default AboutMePage;
