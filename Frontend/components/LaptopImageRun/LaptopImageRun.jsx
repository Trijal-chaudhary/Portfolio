import React, { useState } from "react";
import "./LaptopImageRun.css";
import { motion } from "framer-motion";
const LaptopImageRun = ({ folder, device, urls }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      // initial={{ x: 0 }}
      whileInView={
        isHover
          ? {}
          : {
              y: "-50%",
            }
      }
      transition={{
        duration: isHover ? 99999 : 60,
        repeat: Infinity,
        ease: "linear",
      }}
      className="ImageCont255"
    >
      {urls.map((url, idx) => (
        <img key={idx} src={`Project${folder}${device}/${url}`} alt="" />
      ))}
      {urls.map((url, idx) => (
        <img key={idx} src={`Project${folder}${device}/${url}`} alt="" />
      ))}
    </motion.div>
  );
};

export default LaptopImageRun;
