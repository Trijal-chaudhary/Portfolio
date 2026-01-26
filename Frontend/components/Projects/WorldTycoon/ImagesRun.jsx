import React, { useState } from "react";
import "./ImagesRun.css";
import { motion, useScroll } from "framer-motion";
const ImagesRun = () => {
  // const Duration = 20;
  const [inView, setInView] = useState(false);
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
  return (
    <div className="parImgRun">
      <div className="ImageContainer2">
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "-50%" }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
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
    </div>
  );
};

export default ImagesRun;
