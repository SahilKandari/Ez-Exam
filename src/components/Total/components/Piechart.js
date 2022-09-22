import React from "react";
import { Pie } from "react-chartjs-2";
// eslint-disable-next-line

import { Chart as chartJS } from "chart.js/auto";

function Barchart(props) {
  return (
    <div>
      <Pie data={props.chartData} />
    </div>
  );
}

export default Barchart;
