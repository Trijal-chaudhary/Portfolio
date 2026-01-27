import React, { useState } from "react";
import "./MobileImageRun.css";
import { motion } from "framer-motion";
const MobileImageRun = ({ folder, device, urls }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      initial={{ y: "-50%" }}
      animate={
        isHover
          ? {}
          : {
              y: "0%",
            }
      }
      transition={{
        duration: isHover ? 99999 : 50,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className="ImageCont260"
    >
      {urls
        .slice()
        .reverse()
        .map((url, idx) => (
          <img key={idx} src={`Project${folder}${device}/${url}`} alt="" />
        ))}
      {urls
        .slice()
        .reverse()
        .map((url, idx) => (
          <img key={idx} src={`Project${folder}${device}/${url}`} alt="" />
        ))}
    </motion.div>
  );
};

export default MobileImageRun;
