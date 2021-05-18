import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { fadeColor } from './birth.js';
import Navbar from '../components/navbar';
import ScrollToTop from "../components/scroll-to-top";


const MarriagePage = () => {
  // don't touch
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="page">
      <ScrollToTop />
      <Navbar pageName="marriage"/>

      <div className="page-contents">


        <div className="accompany-text-all">
          <Scrollama onStepEnter={onStepEnter} offset={0.4}>
            <Step data={1} >
              <h1 style={{color: currentStepIndex===1 ? "black": fadeColor}}>
                The Trapped Wife
              </h1>
            </Step>



          </Scrollama>
        </div>
      </div>
    </div>
  );

}

export default MarriagePage;