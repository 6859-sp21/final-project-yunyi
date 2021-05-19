import { ResponsiveBar } from "@nivo/bar";
import SexRatioNumChildData from "../data/sex-ratio-num-child.json";
import React from "react";
import {VictoryBar, VictoryChart, VictoryTheme, VictoryStack, VictoryAxis} from "victory";

const BoyDataFirst = [
  {
    "num_child": "First Child",
    "percentage": 0.532119964441
  },
  {
    "num_child": "Second Child",
    "percentage": 0.562229129274
  },
  {
    "num_child": "Third Child",
    "percentage": 0.61767854412
  }
]

const GirlDataFirst = [
  {
    "num_child": "First Child",
    "percentage": 0.467880035559,
    "ratio": "1.14:1"
  },
  {
    "num_child": "Second Child",
    "percentage": 0.437770870726,
    "ratio": "1.28:1"
  },
  {
    "num_child": "Third Child",
    "percentage": 0.38232145588,
    "ratio": "1.62:1"
  }
]

const BoyData = [
  {
    "num_child": "First Child",
    "percentage": 0.512195121951
  },
  {
    "num_child": "Second Child",
    "percentage": 0.512195121951
  },
  {
    "num_child": "Third Child",
    "percentage": 0.512195121951
  }
]

const GirlData = [
  {
    "num_child": "First Child",
    "percentage": 0.450360610174

  },
  {
    "num_child": "Second Child",
    "percentage": 0.398812677685
  },
  {
    "num_child": "Third Child",
    "percentage": 0.317030899945
  }
]

const MissingGirlData = [
  {
    "num_child": "First Child",
    "percentage": 0.0374442678745,
    "missing": "7.7%"
  },
  {
    "num_child": "Second Child",
    "percentage": 0.0889922003635,
    "missing": "18.2%"
  },
  {
    "num_child": "Third Child",
    "percentage": 0.170773978104,
    "missing": "35%"
  }
]

const Ratio = [1.1373, 1.2843, 1.6156]


// victory
const SexRatioByChildNumberVictory = ({type}) => (
  <div>
    <div>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        domainPadding={40}
        animate={{duration: 400}}
      >
        <VictoryAxis
          style={{
            axis: {stroke: "transparent"},
            ticks: {stroke: "transparent"}
          }}
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3]}
          tickFormat={["First Child", "Second Child", "Third Child"]}
        />
        <VictoryStack>
          <VictoryBar
            data={type==="missing" ? BoyData: BoyDataFirst}
            color="#477091"
            x="num_child"
            y="percentage"
          />
          <VictoryBar
            data={type==="missing" ? GirlData: GirlDataFirst}
            color="#8a3821"
            x="num_child"
            y="percentage"
            labels={({ datum }) => (type==="missing" ? null : datum.ratio)}
          />
          {
            type==="missing" &&
            <VictoryBar
              data={MissingGirlData}
              color="grey"
              x="num_child"
              y="percentage"
              labels={({ datum }) => (type==="missing" ? datum.missing: null)}
              width={400}
            />
          }
        </VictoryStack>
      </VictoryChart>
    </div>
    <div className="caption"
         style={{marginLeft: "50px"}}
    >
      newborn sex ratio in China given different child orders  <a href="http://www.stats.gov.cn/tjsj/pcsj/rkpc/6rp/indexch.htm" target="_blank">
      (source)
    </a>.
    </div>
  </div>
);

//nivo
const SexRatioByChildNumberNivo = () => (
  <ResponsiveBar
    data={SexRatioNumChildData}
    keys={[ 'boy', 'girl', 'girl_missing' ]}
    indexBy="num_child"
    padding={0.5}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors = { (bar) => ({'boy': 'lightblue', 'girl': 'pink', 'girl_missing': 'darkred' }[bar.id])}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'num_child',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'sex',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
)

export default SexRatioByChildNumberVictory;