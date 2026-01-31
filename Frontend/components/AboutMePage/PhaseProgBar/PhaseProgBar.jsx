import React from "react";
import "./PhaseProgBar.css";
import { motion } from "framer-motion";
const PhaseProgBar = ({ currectPhase }) => {
  return (
    <div className="outerPhaseProgBarCont">
      <div className="AllImgPhaseCont">
        <motion.img
          animate={
            currectPhase >= 1
              ? currectPhase == 1
                ? { opacity: 1, scale: 1.3 }
                : { opacity: 1 }
              : {}
          }
          transition={{ duration: 0.8 }}
          src="images/Phase01.png"
          alt=""
        />
        <motion.img
          animate={
            currectPhase >= 2
              ? currectPhase == 2
                ? { opacity: 1, scale: 1.3 }
                : { opacity: 1 }
              : {}
          }
          transition={{ duration: 0.8 }}
          src="images/Phase02.png"
          alt=""
        />
        <motion.img
          animate={
            currectPhase >= 3
              ? currectPhase == 3
                ? { opacity: 1, scale: 1.3 }
                : { opacity: 1 }
              : {}
          }
          transition={{ duration: 0.8 }}
          src="images/Phase03.png"
          alt=""
        />
        <motion.img
          animate={
            currectPhase >= 4
              ? currectPhase == 4
                ? { opacity: 1, scale: 1.3 }
                : { opacity: 1 }
              : {}
          }
          transition={{ duration: 0.8 }}
          src="images/Phase04.png"
          alt=""
        />
        <motion.img
          animate={
            currectPhase >= 5
              ? currectPhase == 5
                ? { opacity: 1, scale: 1.3 }
                : { opacity: 1 }
              : {}
          }
          transition={{ duration: 0.8 }}
          src="images/Phase05.png"
          alt=""
        />
      </div>
      <div className="outerPhaseProgBar">
        <div className="innerPhaseProgBar">
          <motion.div
            initial={{ width: 0 }}
            animate={currectPhase >= 2 ? { width: "100%" } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="innerInnerPhaseCont"
          ></motion.div>
        </div>
        <div className="innerPhaseProgBar">
          <motion.div
            initial={{ width: 0 }}
            className="innerInnerPhaseCont"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            animate={currectPhase >= 3 ? { width: "100%" } : {}}
          ></motion.div>
        </div>
        <div className="innerPhaseProgBar">
          <motion.div
            initial={{ width: 0 }}
            className="innerInnerPhaseCont"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            animate={currectPhase >= 4 ? { width: "100%" } : {}}
          ></motion.div>
        </div>
        <div className="innerPhaseProgBar">
          <motion.div
            initial={{ width: 0 }}
            className="innerInnerPhaseCont"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            animate={currectPhase >= 5 ? { width: "100%" } : {}}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhaseProgBar;
