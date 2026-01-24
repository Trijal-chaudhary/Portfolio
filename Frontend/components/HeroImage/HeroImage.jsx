import React, { useEffect, useState } from "react";
import "./HeroImage.css";
import { easeInOut, motion } from "framer-motion";
const HeroImage = () => {
  const [renderImg, setRenderImg] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 678) {
      setRenderImg(true);
    }
  }, []);
  return (
    <div className="HeroImg">
      <motion.img
        initial={renderImg ? { x: "0%", y: "5%", overflow: "hidden" } : {}}
        animate={
          renderImg
            ? {
                x: [
                  "0%",
                  "1%",
                  "2%",
                  "3%",
                  "4%",
                  "5%",
                  "6%",
                  "7%",
                  "8%",
                  "9%",
                  "10%",
                  "11%",
                  "12%",
                  "13%",
                  "14%",
                  "15%",
                  "16%",
                  "17%",
                ],
                y: [
                  "5%",
                  "4.5%",
                  "4%",
                  "3.5%",
                  "3%",
                  "2.5%",
                  "2%",
                  "1.5%",
                  "1%",
                  "1.5%",
                  "2%",
                  "2.5%",
                  "3%",
                  "3.5%",
                  "4%",
                  "4.5%",
                  "5%",
                ],
                scale: [1.0, 1.01, 1.02, 1.04, 1.05, 1.04, 1.02, 1.01, 1.0],
              }
            : {}
        }
        transition={{
          duration: 10,
          // times: [0, 0.5, 1],
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        src="./public/images/heroPhoroBG.png"
        alt=""
      />
    </div>
  );
};

export default HeroImage;
