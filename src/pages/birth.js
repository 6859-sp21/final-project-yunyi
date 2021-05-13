import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Navbar from '../components/navbar';
import SexRatioByChildNumber from '../visualizations/birth-sex-ratio-by-child-number';
import SexRatioWorld from "../visualizations/birth-sex-ratio-world";

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
          <div className="visualization" >
            {currentStepIndex===2 ?
              <NewBornNumberJuxtaposition /> :
              currentStepIndex === 3 ?
                <div style={{"height": "450px", "margin": "60px"}}>
                  <SexRatioWorld />
                </div> :
                currentStepIndex === 4 ?
                  <div style={{"height": "450px", "margin": "60px"}}>
                    <SexRatioByChildNumber />
                  </div> :
                  <div>
                    <NewBornNumberJuxtaposition />
                  </div>
            }
          </div>

        <div className="accompany-text-all">
          <Scrollama onStepEnter={onStepEnter} >
            <Step data={1}>
              <div className="title">
                The Unwanted Daughter
              </div>
            </Step>
            <Step data={2}>
              <div className="accompany-text">
                <div className="secondary-title">
                  In 2009, the sex ratio of the new born babies was
                </div>
              </div>
            </Step>
            <Step data={3}>
              <div className="accompany-text">
                <div className="secondary-title">
                  This number was <b>the largest</b> among all countries in the world.
                </div>
              </div>
            </Step>
            <Step data={4}>
              <div className="accompany-text">
                <div className="secondary-title">
                  Due to the one-child policy, the second or third child (illegal) faces even harsher sex selection.
                </div>
              </div>
            </Step>
          </Scrollama>
        </div>

      </div>
    </div>
  );
}

export default BirthPage;
