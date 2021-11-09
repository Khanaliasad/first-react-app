import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="Chart">
      {props.datapoints.map((datapoint) => {
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label}
        ></ChartBar>;
      })}
    </div>
  );
};

export default Chart;
