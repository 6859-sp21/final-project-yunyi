import React from 'react';
import Navbar from '../components/navbar';
import { ResponsiveChoropleth } from '@nivo/geo';
import { ResponsiveBar } from '@nivo/bar';



import countries from "../data/world_countries.json";
import SexRatioWorldData from '../data/sex-ratio-world.json';
import SexRatioNumChildData from '../data/sex-ratio-num-child.json';

const NewBornNumberJuxtaposition = () => (
  <div id="new-born-number-visualization">
    <div id="new-born-number-china">
      <div className="caption">
        China
      </div>
      <div className="number">
        1.21 : 1
      </div>
    </div>
    <div id="new-born-number-natural">
      <div className="caption">
        Natural Value
      </div>
      <div className="number">
        1.05 : 1
      </div>
    </div>
  </div>
)

const SexRatioWorld = () => (
  <ResponsiveChoropleth
    data={SexRatioWorldData}
    features={countries.features}
    margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
    colors="YlOrRd"
    domain={[ 1.00, 1.18 ]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat="0.3s"
    enableGraticule={false}
    borderWidth={0.3}
    borderColor="#152538"
    legends={[
      {
        anchor: 'bottom-left',
        direction: 'column',
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: 'left-to-right',
        itemTextColor: '#444444',
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000000',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)

const SexRatioByChildNumber = () => (
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

const BirthPage = () => {
  return (
    <div className="page">
      <Navbar pageName="birth"/>
      <div className="page-contents">
        <div className="title">
          The Unwanted Daughter
        </div>

        <div className="horizontal-line" />
        <div className="secondary-title">
          In 2009, the sex ratio of the new born babies was
        </div>
        <NewBornNumberJuxtaposition />

        <div className="horizontal-line" />
        <div className="secondary-title">
          This number was <b>the largest</b> among all countries in the world.
        </div>

        <div style={{"height": "450px", "margin": "60px"}}>
          <SexRatioWorld />
        </div>

        <div className="horizontal-line" />
        <div className="secondary-title">
          Due to the one-child policy, the second or third child (illegal) faces even harsher sex selection.
        </div>
        <div style={{"height": "450px", "margin": "60px"}}>
          <SexRatioByChildNumber />
        </div>


      </div>
    </div>
  );
}

export default BirthPage;
