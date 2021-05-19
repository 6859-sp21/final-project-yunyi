import React from 'react';
import {VictoryPie} from 'victory';

const DomesticViolenceReportRatio = () => {
  return (
    <div>
      <div style={{overflow:"hidden", width: "35vw"}}>
        <div style={{
          position: "absolute",
          fontSize:"75px",
          top: "14vw",
          left: "13vw"
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
      <div className="caption"
      >
        percentage of domestic violence victims
        that have reported the incidents <a href="https://zhuanlan.zhihu.com/p/26749311" target="_blank">
        (source)
      </a>.
      </div>
    </div>

  )
}

export default DomesticViolenceReportRatio;
