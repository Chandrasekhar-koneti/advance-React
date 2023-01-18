import React from "react";

import Chartbar from './Chartbar';

import './Chart.css'

const Chart=(props)=>{
    const dataPointvalues= props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalmaximum=Math.max(...dataPointvalues)


    return (   
    <div className="chart">
    {props.dataPoints.map(dataPoint=>(
    <Chartbar 
    key={dataPoint.label}
    value={dataPoint.value} 
    maxValue={totalmaximum}
    label={dataPoint.label}
    
    />
    ))}
</div>
)
 

}
export default Chart