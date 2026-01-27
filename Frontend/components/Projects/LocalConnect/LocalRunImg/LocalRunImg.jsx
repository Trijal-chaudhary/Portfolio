import React from "react";
import "./LocalRunImg.css";
import LaptopImageRun from "../../../LaptopImageRun/LaptopImageRun";
import MobileImageRun from "../../../MobileImageRun/MobileImageRun";
const LocalRunImg = ({ playing }) => {
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
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
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
  ];
  return (
    <div
      className="LocalImgContOuter"
      style={playing ? {} : { display: "none" }}
    >
      <div className="LapRunImgCont">
        {/* sare img Project Folder ke under hi rakhna, ekk folder mai jis folder ka name folder prop mai pass karna, */}
        <LaptopImageRun
          folder={"/LocalConnect"}
          device={"/Laptop"}
          urls={imgURL}
        />
      </div>
      <div className="MobRunImgCont">
        <MobileImageRun
          folder={"/LocalConnect"}
          device={"/Mobile"}
          urls={MobImg}
        />
      </div>
    </div>
  );
};

export default LocalRunImg;
