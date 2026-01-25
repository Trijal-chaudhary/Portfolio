import React from "react";
import "./WorldTy.css";
const WorldTy = ({ tech }) => {
  return (
    <div className="WorldTyOuter">
      {tech.map((ele) => (
        <div className="tech">{ele}</div>
      ))}
    </div>
  );
};

export default WorldTy;
