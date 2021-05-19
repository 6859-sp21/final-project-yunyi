import React from 'react';
import {VictoryPie} from 'victory';

const DomesticViolenceSexRatio = () => {
  return (
    <div>
      <div style={{
        fontSize: "100px",
        textAlign: "center",
        border: "5px solid black",
        padding: "100px 100px",
        marginTop: "100px"
      }}>
        99.9996 %
      </div>
      <div className="caption">
        percentage of domestic violence victims that are
        women <a href="https://zhuanlan.zhihu.com/p/26749311" target="_blank">
        (source)
      </a>.
      </div>
    </div>

  )
}

export default DomesticViolenceSexRatio;
