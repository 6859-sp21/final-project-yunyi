import React from 'react';
import { ReactComponent as DomesticViolencePolice } from '../visualizations/domestic-violence-police.svg'

const DomesticViolencePoliceReturn = () => {
  return (
    <div>
      <DomesticViolencePolice />
      <div className="caption"
      >
        police handling of reported domestic violence cases <a href="https://zhuanlan.zhihu.com/p/26749311" target="_blank">
        (source)
      </a>.
      </div>
    </div>
  )
}

export default DomesticViolencePoliceReturn;
