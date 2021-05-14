import React from "react";

const SexRatioDotPlot = () => {
  let boy_circles = [];
  let girl_circles = [];

  for (let i=0; i<121; i++) {
    boy_circles.push(
      <div key={i} className="sex-ratio-circle-boy" />
    )
  }

  for (let i=0; i<100; i++) {
    girl_circles.push(
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