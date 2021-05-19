import React from 'react';
import {VictoryPie} from 'victory';

const DomesticViolenceReportRatio = () => {
  return (
    <div>
      <div style={{
        position: "absolute",
        fontSize:"75px",
        top: "300px",
        left: "270px"
      }}>
        9.5%
      </div>
      <VictoryPie
        colorScale={["#ab251b", "#627980"]}
        data={[
          { x: "Reported", y: 8989 },
          { x: "Did not report", y: 85572 }
        ]}
        innerRadius={100}
        labels={({ datum }) => `${datum.x}: ${datum.y} cases`}
      />
    </div>
  )
}

export default DomesticViolenceReportRatio;
