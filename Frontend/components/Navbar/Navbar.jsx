import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
const Navbar = () => {
  const [renderNav, setRenderNav] = useState(false);
  const handleRenderNav = () => {
    setRenderNav((prev) => !prev);
  };
  return (
    <>
      <div className="NavCont navHamb">
        <svg
          className="Hamb"
          viewBox="0 0 100 80"
          width="40"
          height="40"
          onClick={handleRenderNav}
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
      <motion.div
        initial={{
          y: 12,
          opacity: 1,
        }}
        animate={
          window.innerWidth < 678
            ? renderNav
              ? { opacity: 1, y: 50, pointerEvents: "auto" }
              : { opacity: 0, pointerEvents: "none" }
            : {}
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="NavCont"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="nav"
        >
          Home
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="nav"
        >
          About me
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="nav"
        >
          Skills
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="nav"
        >
          Projects
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="nav"
        >
          Contact me
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
