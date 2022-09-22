import React from "react";
import { PolarArea } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as chartJS } from "chart.js/auto";

function Polarchart(props) {
  return (
    <div>
      <PolarArea data={props.chartData} />
    </div>
  );
}

export default Polarchart;
