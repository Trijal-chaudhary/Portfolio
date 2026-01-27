import React, { useEffect, useState } from "react";
import "./ImagesRun.css";
import { motion, useScroll } from "framer-motion";
const ImagesRun = ({ playing }) => {
  // const Duration = 20;
  const [isHover, setIsHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imgURL = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
    "09.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
  ];
  useEffect(() => {
    if (window.innerWidth < 678) {
      setIsMobile(true);
    }
  }, []);
  return (
    <motion.div
      className="parImgRun"
      style={playing ? {} : { display: "none" }}
    >
      <div className="ImageContainer2">
        <motion.div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          // initial={{ x: 0 }}
          animate={
            isMobile
              ? playing
                ? { y: "-50%" }
                : {}
              : playing
              ? isHover
                ? {}
                : { x: "-50%" }
              : {}
          }
          transition={{
            duration: isHover ? 99999 : isMobile ? 40 : 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="ImageCont25"
        >
          {imgURL.map((url, idx) => (
            <img key={idx} src={`Project/Project1/${url}`} alt="" />
          ))}
          {imgURL.map((url, idx) => (
            <img key={idx} src={`Project/Project1/${url}`} alt="" />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImagesRun;
