import React from 'react';
import Navbar from '../components/navbar';
import { ResponsiveChoropleth } from '@nivo/geo'
import SexRatioWorldData from '../data/sex-ratio-world.json';
import countries from "../data/world_countries.json";

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
    borderWidth={0.5}
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



const BirthPage = () => {
  return (
    <div className="page">
      <Navbar pageName="birth"/>
      <div className="page-contents">
        <div className="title">
          The Unwanted Daughter
        </div>
        <div className="secondary-title">
          In 2009, the sex ratio of the new born babies was
        </div>
        <div style={{"height": "450px"}}>
          <SexRatioWorld />
        </div>

      </div>
    </div>
  );
}

export default BirthPage;
