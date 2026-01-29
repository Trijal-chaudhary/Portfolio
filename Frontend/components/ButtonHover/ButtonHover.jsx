import React, { useState } from "react";
import "./ButtonHover.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const ButtonHover = ({ text, redir }) => {
  const [hover, sethover] = useState(false);
  const navigiate = useNavigate();
  const red = () => {
    if (redir) navigiate(redir);
  };
  return (
    <div
      className="ButtonHoverAnimation"
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      onClick={() => red}
    >
      <motion.div
        initial={{
          scale: 1,
        }}
        animate={hover ? { scale: 100 } : {}}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="DotScalable2"
      ></motion.div>
      <motion.h2 animate={hover ? { x: 5, scale: 1.05 } : {}}>
        {text} ➜
      </motion.h2>
    </div>
  );
};

export default ButtonHover;
