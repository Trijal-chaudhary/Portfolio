import React from "react";
import "./PravRunningImage.css";
import MobileImageRun from "../../../MobileImageRun/MobileImageRun";
import LaptopImageRun from "../../../LaptopImageRun/LaptopImageRun";
const PravRunningImage = ({ playing }) => {
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
  const MobImg = [
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
    <div
      className="LocalImgContOuter"
      style={playing ? {} : { display: "none" }}
    >
      <div className="LapRunImgCont">
        {/* sare img Project Folder ke under hi rakhna, ekk folder mai jis folder ka name folder prop mai pass karna, */}
        <LaptopImageRun folder={"/Pravdhan"} device={"/Laptop"} urls={imgURL} />
      </div>
      <div className="MobRunImgCont">
        <MobileImageRun folder={"/Pravdhan"} device={"/Mobile"} urls={MobImg} />
      </div>
    </div>
  );
};

export default PravRunningImage;
