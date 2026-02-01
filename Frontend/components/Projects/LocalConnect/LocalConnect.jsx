import React, { useState } from "react";
import "./LocalConnect.css";
import ButtonHover from "../../ButtonHover/ButtonHover";
import { motion } from "framer-motion";
import PlayButton from "../../PlayButton/PlayButton";
import LocalRunImg from "./LocalRunImg/LocalRunImg";
import { useNavigate } from "react-router-dom";
const LocalConnect = () => {
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
      <div className="LocalDisCont">
        <h1>Description</h1>
        <div className="LocalConnectParaCont">
          <h3>LocalConnect – Your Community’s Helping Hand</h3>
          <p>
            <b>LocalConnect</b> is a hyperlocal peer-to-peer service platform
            designed to reduce the gap between local service providers and
            community members by building a trusted and transparent digital
            ecosystem. The platform focuses on solving common issues such as
            lack of trust, limited opportunities for freshers, digital literacy
            barriers, and unfair pricing, especially in semi-urban and rural
            areas.
          </p>
          <h4>The system is built around three distinct interfaces.</h4>
          <p>
            The <span>Customer interface</span> allows users to search for
            services, view verified service provider profiles, compare options,
            book service providers, track service progress, and provide feedback
            after service completion.
          </p>
          <p>
            The <span>Service Provider</span> interface enables local
            professionals to register digitally, upload verification documents,
            manage bookings, communicate with customers, and maintain
            transparent service profiles.
          </p>
          <p>
            The <span>Admin interface</span> is responsible for verifying
            service providers, monitoring platform activity, handling disputes,
            managing pricing benchmarks using analytics and geolocation data,
            and ensuring overall platform reliability.
          </p>
        </div>
      </div>
      <div onClick={() => navigate("/localConnect")}>
        <ButtonHover text={"Case Study"} />
      </div>
      <div className="LinksContProject1">
        <div className="LinksIons1 githubIcon">
          <motion.img
            onClick={() =>
              redirectUser("https://github.com/Trijal-chaudhary/LocalConnect")
            }
            whileHover={anim}
            src="Icon/github.png"
            title="GitHub Repo"
            alt=""
          />
        </div>
        <div className="LinksIons1 githubIcon">
          <motion.img
            onClick={() =>
              redirectUser("https://localconnect-p703.onrender.com/")
            }
            whileHover={anim}
            src="Icon/redirect.png"
            alt=""
            title="Live Preview"
          />
        </div>
      </div>

      <PlayButton
        Setplaingstate={Setplaingstate}
        source={"Audio/Project02Audio.mp3"}
      />
      <LocalRunImg playing={playing} />
    </div>
  );
};

export default LocalConnect;
