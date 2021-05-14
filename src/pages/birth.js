import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Navbar from '../components/navbar';
import SexRatioByChildNumber from '../visualizations/birth-sex-ratio-by-child-number';
import SexRatioWorld from "../visualizations/birth-sex-ratio-world";
import SexRatioDotPlot from "../visualizations/birth-sex-ratio-dot-plot";

const SexRatioNumber = () => (
  <div style={{
    fontSize: "150px",
    textAlign: "center",
    border: "5px solid black"

  }}>
    1.21: 1
  </div>
)



const BirthPage = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="page">
      <Navbar pageName="birth"/>

      <div className="page-contents">
        <div className="visualization-fancy" style={{opacity:
            currentStepIndex===2 ? 1 : 0}}>
          <SexRatioNumber />
        </div>
        <div className="visualization-fancy" style={{opacity: currentStepIndex===3 ? 1: 0}}>
          <SexRatioDotPlot  type="china" />
        </div>
        <div className="visualization-fancy" style={{opacity: currentStepIndex===4 ? 1 : 0}}>
          <SexRatioDotPlot  type="world" />
        </div>
        <div className="visualization-fancy" style={{opacity: currentStepIndex===5 ? 1 : 0}}>
          <SexRatioDotPlot  type="missing" />
        </div>

        <div className="visualization-fancy" style={{opacity: currentStepIndex===6 ? 1 : 0}}>
          <SexRatioByChildNumber />
          <SexRatioWorld />
        </div>


        <div className="accompany-text-all">
          <Scrollama onStepEnter={onStepEnter} >
            <Step data={1}>
              <h1>
                The Unwanted Daughter
              </h1>
            </Step>
            <Step data={2}>
              <div className="text-block">
                <p>
                  In 2009, the newborn sex ratio China was <b>1.21: 1</b>.
                </p>
              </div>
            </Step>
            <Step data={3}>
              <div className="text-block">
                <p>
                  This means, 121 boys are born with every 100 girls.
                </p>
              </div>
            </Step>
            <Step data={4}>
              <div className="text-block">
                <p>
                  This number was much higher than the world average, 1.05: 1,
                  where 115 girls should have been born with 121 boys.
                </p>
              </div>
            </Step>
            <Step data={5}>
              <div className="text-block">
                <p>
                  It means that in China, with every 100 newborn girls, 15 went missing.
                </p>
              </div>
            </Step>

            {/*<Step data={3}>*/}
            {/*  <div className="text-block">*/}
            {/*    <p>*/}
            {/*      This number was <b>the largest</b> among all countries in the world.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</Step>*/}
            {/*<Step data={4}>*/}
            {/*  <div className="text-block">*/}
            {/*    <p>*/}
            {/*      Due to the one-child policy, the second or third child (illegal) faces even harsher sex selection.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</Step>*/}
          </Scrollama>
        </div>

      </div>
    </div>
  );
}

export default BirthPage;
