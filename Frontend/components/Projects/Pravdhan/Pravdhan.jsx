import React, { useState } from "react";
import "./Pravdhan.css";
import ButtonHover from "../../ButtonHover/ButtonHover";
import { motion } from "framer-motion";
import PlayButton from "../../PlayButton/PlayButton";
import PravRunningImage from "./PravRunning/PravRunningImage";
import { useNavigate } from "react-router-dom";
const Pravdhan = () => {
  const [playing, Setplaingstate] = useState(false);
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
  const redirectUser = (where) => {
    window.open(where, "_blank");
  };
  const navigate = useNavigate();
  return (
    <div className="LocalConnectContPar">
      <div className="PravDisCont">
        <h1>Description</h1>
        <div className="PravConnectParaCont">
          <h3>
            Pravadhan – Crowdsourced Civic Issue Reporting & Resolution System
          </h3>
          <p>
            <b>Pravadhan</b>
            is a crowdsourced, mobile-first civic issue reporting and resolution
            platform designed to improve communication between citizens and
            local governments, enabling faster identification and resolution of
            everyday civic problems.
          </p>
          <p>
            Local authorities often face challenges in promptly addressing
            issues such as potholes, broken streetlights, overflowing garbage
            bins, water leakage, and pollution due to inefficient reporting
            channels and limited real-time visibility. Pravadhan bridges this
            gap by empowering citizens to report civic issues through a simple
            and accessible digital platform.
          </p>
          <h4>The system is built around two distinct interfaces.</h4>
          <p>
            <span>Citizens </span>
            can submit reports using images and brief descriptions, along with
            automatic geolocation tagging, making it easy to report real-world
            problems as they are encountered. Other users can support reported
            issues through upvotes, helping highlight urgent concerns and
            assisting authorities in prioritizing them effectively.
          </p>
          <p>
            On the <span>administrative side</span> , Pravadhan provides a
            dedicated web-based dashboard for municipal staff to view, filter,
            verify, and categorize reported issues based on location, type, and
            priority. Authorities can manually assign issues, update their
            statuses, and communicate progress, ensuring transparency throughout
            the resolution process.
          </p>
        </div>
      </div>

      <div onClick={() => navigate("/pravdhan")}>
        <ButtonHover text={"Details"} />
      </div>
      <div className="LinksContProject1">
        <div className="LinksIons1 githubIcon">
          <motion.img
            onClick={() =>
              redirectUser("https://github.com/Trijal-chaudhary/Pravadhan")
            }
            whileHover={anim}
            src="Icon/github.png"
            title="GitHub Repo"
            alt=""
          />
        </div>
      </div>
      <PlayButton
        Setplaingstate={Setplaingstate}
        source={"Audio/Project03Audio.m4a"}
      />
      <PravRunningImage playing={playing} />
    </div>
  );
};

export default Pravdhan;
