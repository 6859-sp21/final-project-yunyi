import React from 'react';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryAxis} from 'victory'


const data = [
  {x:"2012", y: 54.74},
  {x:"2013", y: 53.39},
  {x:"2014", y: 51.95},
  {x:"2015", y: 49.82},
  {x:"2016", y: 48.1},
  {x:"2017", y: 46.69}
]

const MarriageDivorceSuccessRate = () => {
  return (
    <div>
      <VictoryChart
        minDomain={{ y: 0 }}
        maxDomain={{y:65}}
      >
        {/*<VictoryAxis*/}
        {/*  crossAxis*/}
        {/*  style={{*/}
        {/*  tickLabels: { fill:"transparent"},*/}
        {/*    axis: {stroke: "black"}*/}
        {/*}} />*/}
        {/*<VictoryAxis*/}
        {/*  dependantAxis*/}
        {/*  style={{*/}
        {/*    tickLabels: { fill:"black"}*/}
        {/*  }} />*/}
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" }
          }}
          data={data}
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
      <div className="caption"
           style={{marginLeft: "40px"}}
      >
        success rate of divorce trials <a href="http://www.jialilaw.com/file/2018%E5%B9%B4%E5%A9%9A%E5%A7%BB%E5%AE%B6%E4%BA%8B%E6%B3%95%E5%BE%8B%E6%9C%8D%E5%8A%A1%E8%A1%8C%E4%B8%9A%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf" target="_blank">
        (source)
      </a>.
      </div>
    </div>

  );
}

export default MarriageDivorceSuccessRate;