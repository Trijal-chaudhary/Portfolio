import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ShotingStars.css";
const randomStar = () => {
  const startX = Math.random() * window.innerWidth * 0.5;
  const startY = Math.random() * window.innerHeight * 0.3;

  return {
    startX,
    startY,
    endX: startX + window.innerWidth * 0.7,
    endY: startY + window.innerHeight * 0.6,
    rotate: 210 + Math.random() * 20,
    repeatDelay: Math.random() * 3 + 1,
  };
};
const ShotingStars = () => {
  const [star, setStar] = useState(randomStar());

  return (
    <motion.div
      key={star.startX + star.startY}
      initial={{
        x: star.startX,
        y: star.startY,
        opacity: 0,
        rotate: star.rotate,
      }}
      animate={{
        x: star.endX,
        y: star.endY,
        opacity: [0, 0.6, 1, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: star.repeatDelay,
        onRepeat: () => setStar(randomStar()),
      }}
      className="shotting"
      style={{
        position: "fixed",
        width: "160px",
        height: "3px",
        background:
          "linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0))",
        boxShadow: "0 0 20px rgba(255,255,255,0.8)",
        pointerEvents: "none",
        zIndex: 1,
      }}
    ></motion.div>
  );
};

export default ShotingStars;
