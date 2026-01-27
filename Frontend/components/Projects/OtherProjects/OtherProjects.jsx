import React from "react";
import "./OtherProjects.css";
import HorizontalImgRunIrr from "../../HorizontalImgRun/HorizontalImgRunIrr";
import HorizontalImgRunRev from "../../HorizontalImgRun/HorizontalImgRunRev";
import ButtonHover from "../../ButtonHover/ButtonHover";
import { motion } from "framer-motion";
const OtherProjects = ({ MyPro }) => {
  const anim = () => ({
    scale: 1.12,
    cursor: "pointer",
  });
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
  ];
  const LogoURLs = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
  ];
  return (
    <div className="OtherProjectsMainCont">
      <h2 className="MyOtherprojectTxt">My Other Project</h2>
      <div className="HorizontalIrrev">
        <HorizontalImgRunIrr
          folder={"/OtherProject"}
          device={"/SecreenShots"}
          urls={imgURL}
          MyPro={MyPro}
        />
      </div>
      <div className="HorizontalRev">
        <HorizontalImgRunRev
          folder={"/OtherProject"}
          device={"/Logo"}
          urls={LogoURLs}
          MyPro={MyPro}
        />
      </div>
      <div className="LinksContProject1">
        <div className="LinksIons1 githubIcon">
          <motion.img
            whileHover={anim}
            src="./public/Icon/github.png"
            title="GitHub Repo"
            alt=""
          />
        </div>
        <div className="LinksIons1 githubIcon">
          <motion.img
            whileHover={anim}
            src="./public/Icon/redirect.png"
            alt=""
            title="View Details"
          />
        </div>
      </div>
      <ButtonHover text={"Explore"} />
    </div>
  );
};

export default OtherProjects;
