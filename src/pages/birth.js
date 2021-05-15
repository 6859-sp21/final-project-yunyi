import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Navbar from '../components/navbar';
import SexRatioByChildNumber from '../visualizations/birth-sex-ratio-by-child-number';
import SexRatioWorldByYear from "../visualizations/birth-sex-ratio-world";
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

const DotGirlMissing = () => {
  // temp just the number
  return (
    <div style={{
     fontSize: "150px",
      textAlign: "center",
      border: "5px solid black"
    }}>
      83034
    </div>
  )
};

const fadeColor="#5e5e5e";


const BirthPage = () => {
  // year scroll for country map
  const [countryVisYear, setCountryVisYear] = useState(1990);
  const years = [1990, 1992, 1997, 2002, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];


  // don't touch
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    if (data > 7) {
      setCountryVisYear(years[data-8]);
    }
  };



  return (
    <div className="page">
      <Navbar pageName="birth"/>

      <div className="page-contents">
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===2 ? 1 : 0,
               visibility: currentStepIndex===2 ? "visible" : "hidden"
             }}
        >
          <SexRatioNumber />
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===3 ? 1 : 0,
               visibility: currentStepIndex===3 ? "visible" : "hidden"
             }}
        >
          <SexRatioDotPlot  type="china" />
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===4 ? 1 : 0,
               visibility: currentStepIndex===4 ? "visible" : "hidden"
             }}
        >
          <SexRatioDotPlot  type="world" />
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===5 ? 1 : 0,
               visibility: currentStepIndex===5 ? "visible" : "hidden"
             }}
        >
          <SexRatioDotPlot  type="missing" />
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===6 ? 1 : 0,
               visibility: currentStepIndex===6 ? "visible" : "hidden"
             }}
        >
          <DotGirlMissing />
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex===7 ? 1 : 0,
               visibility: currentStepIndex===7 ? "visible" : "hidden"
             }}
        >
          <div style={{height: "600px"}}>
            {/*<SexRatioWorld />*/}
          </div>
        </div>
        <div className="visualization-fancy"
             style={{
               opacity: currentStepIndex>=8 ? 1 : 0,
               visibility: currentStepIndex>=8 ? "visible" : "hidden"
             }}
        >
          {years[currentStepIndex-8]}
          <div style={{height: "600px"}}>
            <SexRatioWorldByYear year={countryVisYear} />
          </div>
        </div>
        {/*<div className="visualization-fancy"*/}
        {/*     style={{*/}
        {/*       opacity: currentStepIndex=== ? 1 : 0,*/}
        {/*       visibility: currentStepIndex===8 ? "visible" : "hidden"*/}
        {/*     }}*/}
        {/*>*/}
        {/*  <SexRatioByChildNumber />*/}
        {/*</div>*/}


        <div className="accompany-text-all">
          <Scrollama onStepEnter={onStepEnter} offset={0.4}>
            <Step data={1} >
              <h1 style={{color: currentStepIndex===1 ? "black": fadeColor}}>
                The Unwanted Daughter
              </h1>
            </Step>
            <Step data={2}>
              <div className="text-block" style={{color: currentStepIndex===2 ? "black": fadeColor}}>
                <p>
                  In 2009, the newborn sex ratio China was <b>1.21: 1</b>.
                </p>
              </div>
            </Step>
            <Step data={3}>
              <div className="text-block" style={{color: currentStepIndex===3 ? "black": fadeColor}}>
                <p>
                  This means, 121 boys are born with every 100 girls.
                </p>
              </div>
            </Step>
            <Step data={4}>
              <div className="text-block" style={{color: currentStepIndex===4 ? "black": fadeColor}}>
                <p>
                  This number was much higher than the world average, 1.05: 1,
                  where 115 girls should have been born with 121 boys.
                </p>
              </div>
            </Step>
            <Step data={5}>
              <div className="text-block" style={{color: currentStepIndex===5 ? "black": fadeColor}}>
                <p>
                  It means that in China, with every 100 newborn girls, 15 went missing.
                </p>
              </div>
            </Step>
            <Step data={6}>
              <div className="text-block" style={{color: currentStepIndex===6 ? "black": fadeColor}}>
                <p>
                  Given that 537987 girls were born that year, 83034 girls went missing.
                </p>
              </div>
            </Step>
            <Step data={7}>
              <div className="text-block">
                <p>
                  In fact, China has been having the world's highest newborn sex ratio for the past 30 years (since 1990).
                </p>
              </div>
            </Step>
            {
              years.map((year, i) => (
                <Step data={i+8}>
                  <div style={{
                    textAlign:"center",
                    fontSize:"20px",
                    marginTop:"10px",
                    color: currentStepIndex===4 ? "black": fadeColor
                  }}
                  >
                    {year}
                  </div>
                </Step>
              ))
            }


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
