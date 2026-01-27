import React, { useState } from "react";
import "./HorizontalImgRunIrr.css";
import { motion } from "framer-motion";
const HorizontalImgRunIrr = ({ folder, device, urls, MyPro }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      initial={{ x: "-50%" }}
      animate={
        MyPro === "MyProjects"
          ? {
              x: "0%",
            }
          : {}
      }
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

export default HorizontalImgRunIrr;
