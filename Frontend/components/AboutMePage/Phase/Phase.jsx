import React from "react";
import "./Phase.css";
const Phase = ({ url, ph, p1, p2, p3, p4 }) => {
  return (
    <div className="PhaseManiOuterCont">
      <div className="PhaseDataCont">
        <img src={url} alt="" />
        <div className="partionBar"></div>
        <div className="paraPhaseCOnt">
          <div className="WhatPhaseCOnt">
            <h2>{ph}</h2>
          </div>
          <div className="WhatPhaseCOnt">
            <p>
              <i>{p1}</i>
            </p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase;
