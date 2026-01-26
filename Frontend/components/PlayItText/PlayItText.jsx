import React from "react";
import "./PlayItText.css";
import { motion } from "framer-motion";
const PlayItText = () => {
  return (
    <motion.div
      initial={{
        width: 350,
      }}
      animate={{
        width: [350, 0, 350],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: ["easeInOut", "easeIn"],
        times: [0.5, 0.7, 1],
        delay: 6,
      }}
      className="PlayItTextCont"
    >
      <img src="Icon/PlayIt.png" alt="" />
    </motion.div>
  );
};

export default PlayItText;
