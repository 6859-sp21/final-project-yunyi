import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { fadeColor } from './birth.js';
import Navbar from '../components/navbar';
import ScrollToTop from "../components/scroll-to-top";

import DomesticViolenceSexRatio from "../visualizations/marriage-domestic-violence-99";
import DomesticViolenceReportRatio from "../visualizations/marriage-domestic-violence-resolution";
import DomesticViolencePoliceReturn from "../visualizations/marriage-domestic-violence-police-do-nothing";
import MarriageDivorceSuccessRate from "../visualizations/marriage-divorce-rate"

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
        <div className="visualization"
             style={{
               opacity: currentStepIndex===3 ? 1 : 0,
               visibility: currentStepIndex===3 ? "visible" : "hidden"
             }}
        >
          <DomesticViolenceSexRatio />
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===4 ? 1 : 0,
               visibility: currentStepIndex===4 ? "visible" : "hidden"
             }}
        >
          <DomesticViolenceReportRatio />
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===5 ? 1 : 0,
               visibility: currentStepIndex===5 ? "visible" : "hidden"
             }}
        >
          <DomesticViolencePoliceReturn />
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===6 ? 1 : 0,
               visibility: currentStepIndex===6 ? "visible" : "hidden"
             }}
        >
          <MarriageDivorceSuccessRate />
        </div>



        <div className="accompany-text-all">
          <Scrollama onStepEnter={onStepEnter} offset={0.4}>
            <Step data={1} >
              <h1 style={{color: currentStepIndex===1 ? "black": fadeColor}}>
                The Trapped Wife
              </h1>
            </Step>
            <Step data={2} >
              <div className="text-block" style={{color: currentStepIndex===2 ? "black": fadeColor}}>
                <p>
                  Domestic violence is a common threat to a married woman in China.
                </p>
                <p>
                  Since China does not have formal lawsuit on domestic violence,
                  we can infer the domestic violence situation through its divorce data.
                </p>
              </div>
            </Step>
            <Step data={3}>
              <div className="text-block" style={{color: currentStepIndex===3 ? "black": fadeColor}}>
                <h2>
                  Domestic Violence through Divorce Data
                </h2>
                <p>
                  From 2014 to 2016, 94571 divorce trials listed domestic violence as the reason for divorce.
                </p>
                <p>
                  In those trials, <b>99.9996 percent</b>  of the victims are women.
                </p>
              </div>
            </Step>
            <Step data={4}>
              <div className="text-block" style={{color: currentStepIndex===4 ? "black": fadeColor}}>
                <p>
                  In domestic violence, most women kept quiet.
                </p>
                <p>
                  Out of the 94571 marriages that involves domestic violence,
                  only <b>9.5 percent</b> of the victims have sought help from the police.
                </p>
              </div>
            </Step>
            <Step data={5}>
              <div className="text-block" style={{color: currentStepIndex===5 ? "black": fadeColor}}>
                <p>
                  Sadly, the 8989 victims that reported the incidents were not taken seriously.
                </p>
                <p>
                  Only <b>37 percent</b> of them were given a receipt,
                  <b>25 percent</b> were interviewed about the details of the incident,
                  and only <b>0.8 percent</b> of the perpetrators received a warning on file.
                </p>
                <p>
                  In other words, 63 percent of the victims received no help from the police.
                </p>
              </div>
            </Step>
            <Step data={6}>
              <div className="text-block" style={{color: currentStepIndex===6 ? "black": fadeColor}}>
                <h2>
                  The Long Journey to a Divorce
                </h2>
                <p>
                  It is hard to get out of a marriage in China.
                </p>
                <p>
                  From 2012 to 2017, more than half of the divorce trials result in "not divorce".
                  In those cases, the two people are forced to keep married.
                </p>
              </div>
            </Step>
            <Step data={7}>
              <div className="text-block" style={{color: currentStepIndex===7 ? "black": fadeColor}}>
                <p>
                  On average, one needs to go through <b>two</b> trials
                  in order to successfully get divorced.
                </p>
                <p>
                  This process takes about a year to go through, and
                  victims of the domestic violence suffer from
                  even more severe violence during this year.
                </p>
              </div>
            </Step>




          </Scrollama>
        </div>
      </div>
    </div>
  );

}

export default MarriagePage;