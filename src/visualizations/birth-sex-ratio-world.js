import {ResponsiveChoropleth} from "@nivo/geo";
import SexRatioWorldDataMultiYear from "../data/sex-ratio-world-multi-year.json";
import countries from "../data/world_countries.json";
import React from "react";
import _ from 'lodash';

const SexRatioWorld = ({year}) => {

  return (
    <ResponsiveChoropleth
      data={_.find(SexRatioWorldDataMultiYear, _.matchesProperty('year', year)).data}
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
};

export default SexRatioWorld;