import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // for every datapoint we just return datapoint value
    const totalMaximum = Math.max(...dataPointsValues);
    //since max want argument and dataPointValue in still and array we use spread operator to pull out value as argument
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}>
                </ChartBar>
            ))}
        </div>
    );
};

export default Chart;