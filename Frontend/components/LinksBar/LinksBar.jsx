import React from "react";
import "./LinksBar.css";
import { motion } from "framer-motion";
const LinksBar = () => {
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  return (
    <div className="LinksCont">
      <div className="LinksIons">
        <motion.img whileHover={anim} src="./public/Icon/Linkdin.svg" alt="" />
      </div>
      <div className="LinksIons githubIcon">
        <motion.img whileHover={anim} src="./public/Icon/github.png" alt="" />
      </div>
      <div className="LinksIons">
        <motion.img whileHover={anim} src="./public/Icon/insta.png" alt="" />
      </div>
      <div className="LinksIons">
        <motion.img whileHover={anim} src="./public/Icon/yt.png" alt="" />
      </div>
    </div>
  );
};

export default LinksBar;
