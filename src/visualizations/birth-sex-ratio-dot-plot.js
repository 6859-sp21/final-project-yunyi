import React from "react";

const SexRatioDotPlot = ({type}) => {
  const boy_count = 121;
  const girl_count = (type==="china") ? 100 : 116;

  let boy_circles = [];
  let girl_circles = [];

  for (let i=0; i<boy_count; i++) {
    boy_circles.push(
      <div key={i} className="sex-ratio-circle-boy" />
    )
  }

  for (let i=0; i<girl_count; i++) {
    girl_circles.push(
      (type==="missing" && i > 100) ?
        <div key={i} className="sex-ratio-circle-girl-missing" /> :
      <div key={i} className="sex-ratio-circle-girl" />
    )
  }

  return (
    <div className="dot-plot-overall" style={{
      padding: "30px"
    }}>
      <div className="sex-block">
        <div className="label">
          Boy
        </div>
        <div className="sex-ratio-circle-wrapper">
          {boy_circles}
        </div>
      </div>
      <div className="sex-block">
        <div className="label">
          Girl
        </div>
        <div className="sex-ratio-circle-wrapper">
          {girl_circles}
        </div>
      </div>

    </div>
  );
}

export default SexRatioDotPlot;