import React, { useEffect, useState } from "react";
import "./HeroText.css";
import { motion } from "framer-motion";
const HeroText = () => {
  const Showing = ["A Full Stack Developer", "I Build MERN Apps"];
  const [Show, SetShow] = useState("A Full Stack Developer");
  useEffect(() => {
    let i = 1;

    const interval = setInterval(() => {
      SetShow(Showing[i]);
      i = (i + 1) % Showing.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="HeroTextCont">
      <h3 className="Hello">Hello!</h3>
      <h1 className="Im">
        I'm{" "}
        <motion.span
          animate={{
            color: ["#f0f8ff", "#fca311", "#f0f8ff"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          Harsh
        </motion.span>
      </h1>
      <h2
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        className="Showing"
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: ["easeInOut", "easeIn"],
            times: [0, 0.7, 1],
          }}
          style={{
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",
            color: "#f0f8ff",
          }}
        >
          {Show}
        </motion.span>
      </h2>
    </div>
  );
};

export default HeroText;
