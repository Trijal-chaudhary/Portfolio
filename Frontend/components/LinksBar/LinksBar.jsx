import React from "react";
import "./LinksBar.css";
import { motion } from "framer-motion";
const LinksBar = () => {
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  const redirectUser = (where) => {
    window.open(where, "_blank");
  };
  return (
    <div className="LinksCont">
      <div className="LinksIons">
        <motion.img
          onClick={() =>
            redirectUser(
              "https://www.linkedin.com/in/harsh-vardhan-chaudhary-0b31b1367/"
            )
          }
          whileHover={anim}
          src="./public/Icon/Linkdin.svg"
          alt=""
        />
      </div>
      <div className="LinksIons githubIcon">
        <motion.img
          onClick={() => redirectUser("https://github.com/Trijal-chaudhary")}
          whileHover={anim}
          src="./public/Icon/github.png"
          alt=""
        />
      </div>
      <div className="LinksIons">
        <motion.img
          onClick={() =>
            redirectUser("https://www.instagram.com/trijal_chaudhary_/")
          }
          whileHover={anim}
          src="./public/Icon/insta.png"
          alt=""
        />
      </div>
      <div className="LinksIons">
        <motion.img
          onClick={() =>
            redirectUser("https://www.youtube.com/@HarshVardhanChaudhary-g1o8z")
          }
          whileHover={anim}
          src="./public/Icon/yt.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LinksBar;
