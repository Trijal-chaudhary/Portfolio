import React, { useState } from "react";
import { motion } from "framer-motion";

const HorizontalImgRunRev = ({ folder, device, urls }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      initial={{ x: "0%" }}
      animate={{
        x: "-50%",
      }}
      transition={{
        duration: 30,
        repeat: isHover ? 0 : Infinity,
        ease: "linear",
      }}
      className="ImageCont270"
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

export default HorizontalImgRunRev;
