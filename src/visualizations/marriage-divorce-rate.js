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
    <VictoryChart
      minDomain={{ y: 0 }}
      maxDomain={{y:65}}
      animate={{
        duration: 400
      }}
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
  );
}

export default MarriageDivorceSuccessRate;